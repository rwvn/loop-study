/* Loop v0.2 — scroll-native personal study feed. No analytics, accounts, or API keys. */
(() => {
  'use strict';
  const STORAGE_KEY = 'loop.personal.v1';
  const DAY = 24 * 60 * 60 * 1000;
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
  const uid = () => (globalThis.crypto && crypto.randomUUID) ? crypto.randomUUID() : `id-${Date.now()}-${Math.random().toString(36).slice(2)}`;
  const dateNow = () => Date.now();
  const escape = s => String(s ?? '').replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  const pretty = s => escape(s).replace(/\n/g, '<br>');
  const niceDate = time => new Intl.DateTimeFormat(undefined, {month:'short',day:'numeric'}).format(new Date(time));
  const view = $('#view');
  let toastTimeout;
  let activeView = 'study';
  let filterDeck = 'all';
  let libraryDeck = 'all';
  let session = null;
  let feedMode = 'due'; // 'due' prioritizes spaced repetition; 'all' is a browsable library feed.
  let data = load();

  function demo() {
    const physics = uid(), maths = uid(), t = dateNow();
    const card = (deckId, type, front, back, steps = []) => ({
      id:uid(), deckId, type, front, back, steps,
      createdAt:t, updatedAt:t, dueAt:null, intervalDays:0, ease:2.5,
      repetitions:0, reviewedAt:null, lastRating:null, reviews:0
    });
    return {version:1, decks:[
      {id:physics,name:'Mechanics',subject:'Physics',createdAt:t,updatedAt:t},
      {id:maths,name:'Calculus',subject:'Mathematics',createdAt:t,updatedAt:t}
    ], cards:[
      card(physics,'flashcard','What is Newton’s second law?', '$F = ma$'),
      card(physics,'flashcard','What is the formula for kinetic energy?', '$E_k = \\frac{1}{2}mv^2$'),
      card(physics,'problem','A body starts at rest and accelerates at $2\\,\\mathrm{m/s^2}$ for $5\\,\\mathrm{s}$. Find its final speed.','The final speed is $10\\,\\mathrm{m/s}$.',['Start with $v = u + at$.','Substitute $u=0$, $a=2$, and $t=5$.','Calculate $v = 0 + 2\\times 5$.']),
      card(maths,'flashcard','What is the derivative of $x^n$?', '$\\frac{d}{dx}x^n = nx^{n-1}$'),
      card(maths,'flashcard','What is the derivative of $\\sin(x)$?', '$\\cos(x)$')
    ]};
  }

  // Install new built-in content once. Keep every existing local card and review.
  function installComplexPack(state) {
    const pack = window.LOOP_COMPLEX_PACK;
    if (!pack || !Array.isArray(pack.cards)) return false;
    const installed = Array.isArray(state.installedPacks) ? state.installedPacks : [];
    if (installed.includes(pack.key)) return false;
    const t = dateNow();
    if (!state.decks.some(d => d.id === pack.deck.id)) {
      state.decks.push({...pack.deck, createdAt:t, updatedAt:t});
    }
    pack.cards.forEach(item => {
      const id = pack.deck.id + '__' + item.key;
      if (state.cards.some(c => c.id === id)) return;
      state.cards.push({
        id, deckId:pack.deck.id, type:item.type, front:item.front, back:item.back,
        steps:Array.isArray(item.steps) ? item.steps : [],
        createdAt:t, updatedAt:t, dueAt:null, intervalDays:0,
        ease:2.5, repetitions:0, reviewedAt:null, lastRating:null, reviews:0
      });
    });
    state.installedPacks = [...installed,pack.key];
    return true;
  }

  function load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const candidate = JSON.parse(raw);
        if (candidate && candidate.version === 1 && Array.isArray(candidate.cards) && Array.isArray(candidate.decks)) {
          if (installComplexPack(candidate)) {
            try { localStorage.setItem(STORAGE_KEY, JSON.stringify(candidate)); }
            catch (e) { console.warn('New cards could not be saved to this device', e); }
          }
          return candidate;
        }
      }
    } catch (e) { console.warn('Local storage unavailable', e); }
    const first = demo();
    installComplexPack(first);
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(first)); } catch (e) { console.warn(e); }
    return first;
  }
  function save() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); return true; }
    catch (e) { toast('Could not save: device storage may be full. Export a backup.'); return false; }
  }
  function toast(message) {
    const node = $('#toast');
    clearTimeout(toastTimeout);
    node.textContent = message;
    node.classList.add('show');
    toastTimeout = setTimeout(() => node.classList.remove('show'), 3200);
  }
  function renderMath(root = view) {
    if (typeof window.renderMathInElement !== 'function') return;
    $$('.formula-body', root).forEach(el => {
      try { window.renderMathInElement(el, {throwOnError:false, strict:'ignore', delimiters:[
        {left:'$$',right:'$$',display:true}, {left:'\\[',right:'\\]',display:true},
        {left:'$',right:'$',display:false}, {left:'\\(',right:'\\)',display:false}
      ]}); } catch (err) { console.warn('Math rendering failed', err); }
    });
  }
  function deckOf(card) { return data.decks.find(d => d.id === card.deckId) || {name:'Unsorted',subject:'Other'}; }
  function due(card) { return card.dueAt === null || !Number.isFinite(Number(card.dueAt)) || Number(card.dueAt) <= dateNow(); }
  function dueCards(deck = 'all') {
    return data.cards.filter(c => (deck === 'all' || c.deckId === deck) && due(c))
      .sort((a,b) => (a.dueAt ?? 0) - (b.dueAt ?? 0) || a.createdAt - b.createdAt);
  }
  function countDue(deck='all') { return dueCards(deck).length; }
  function stats() {
    return {due:countDue(), total:data.cards.length, learned:data.cards.filter(c=>c.reviews>0).length};
  }
  function deckOptions(selected, includeAll=false) {
    return `${includeAll ? '<option value="all">All decks</option>' : ''}${data.decks.map(d=>`<option value="${escape(d.id)}" ${selected===d.id?'selected':''}>${escape(d.subject)} / ${escape(d.name)}</option>`).join('')}`;
  }
  function setNav(viewName) {
    activeView = viewName;
    document.body.classList.toggle('feed-mode', viewName === 'study');
    $$('[data-view]').forEach(el=>{
      el.classList.toggle('active', el.dataset.view === activeView);
      if (el.dataset.view === activeView) el.setAttribute('aria-current','page');
      else el.removeAttribute('aria-current');
    });
    $('#screen-name').textContent = {study:'Study',library:'Library',create:'Create cards',transfer:'Backup & transfer'}[viewName];
    $('#nav-due').textContent = countDue();
  }
  function go(viewName) {
    if (viewName === 'study' && activeView !== 'study') session = null;
    setNav(viewName);
    if (viewName==='study') renderStudy();
    else if (viewName==='library') renderLibrary();
    else if (viewName==='create') renderCreate();
    else renderTransfer();
    scrollTo({top:0,behavior:'instant'});
  }

  // Every due card lives in the DOM at once. Native scrolling (not fake touch
  // gestures or a Next button) drives navigation; rating is optional to advance.
  function newSession() {
    session = {
      ids: (feedMode === 'all' ? data.cards.filter(c => filterDeck === 'all' || c.deckId === filterDeck) : dueCards(filterDeck)).map(c => c.id),
      index: 0, states: {}
    };
  }
  function feedState(id) {
    return session.states[id] ||= {revealed:false, stepsShown:0, rated:false, completedRating:null, scratch:''};
  }
  function currentCard() { return session && data.cards.find(c => c.id === session.ids[session.index]); }

  function feedCardMarkup(card, index) {
    const state = feedState(card.id);
    const isProblem = card.type === 'problem';
    const steps = Array.isArray(card.steps) ? card.steps : [];
    const deck = deckOf(card);
    const shown = steps.slice(0, state.stepsShown);
    const question = `<div class="feed-question formula-body">${pretty(card.front)}</div>`;
    const stepContent = shown.length ? `<div class="feed-steps">${shown.map((t,i) => `<div class="feed-step"><span>STEP ${String(i+1).padStart(2,'0')}</span><div class="formula-body">${pretty(t)}</div></div>`).join('')}</div>` : '';
    const answerContent = state.revealed ? `<div class="feed-answer" aria-label="Answer"><span class="feed-answer-label">${isProblem ? 'FINAL SOLUTION' : 'THE ANSWER'}</span><div class="formula-body">${pretty(card.back)}</div></div>` : '';
    const actionLabel = isProblem && state.stepsShown < steps.length ? `Reveal step ${state.stepsShown+1} / ${steps.length}` : isProblem ? 'Reveal final solution' : 'Tap to reveal';
    let actions;
    if (state.rated) {
      actions = `<div class="feed-saved">✓ Saved as <strong>${escape(state.completedRating)}</strong> <span>Scroll for the next one ↑</span></div>`;
    } else if (state.revealed) {
      actions = `<div class="feed-rating-caption">How well did you remember?</div><div class="feed-ratings"><button data-rating="again" class="feed-rate again">Again</button><button data-rating="hard" class="feed-rate hard">Hard</button><button data-rating="good" class="feed-rate good">Good</button><button data-rating="easy" class="feed-rate easy">Easy</button></div>`;
    } else {
      actions = `<button class="feed-reveal" data-reveal="${escape(card.id)}">${state.stepsShown ? 'Continue solution' : actionLabel} <span>↗</span></button>`;
    }
    return `<div class="feed-slide-inner">
      <div class="feed-card-label"><span class="feed-subject">${escape(deck.subject)}</span><span class="feed-deck-name">${escape(deck.name)}</span><span class="feed-kind">${isProblem ? 'EXERCISE' : 'RECALL'}</span></div>
      <div class="feed-main">
        <div class="feed-prompt-heading">${isProblem ? 'TRY TO SOLVE' : 'THINK ABOUT IT'}</div>
        <div class="feed-recall" data-tap-reveal="${escape(card.id)}" role="button" tabindex="0" aria-label="${state.revealed ? 'Answer visible' : 'Reveal answer or next solution step'}">${question}</div>
        ${stepContent}${answerContent}
      </div>
      <div class="feed-controls">
        ${isProblem && !state.revealed && !state.rated ? `<details class="feed-notes"><summary>✎ Scratchpad (optional)</summary><textarea data-scratch="${escape(card.id)}" placeholder="Your approach / next step...">${escape(state.scratch)}</textarea></details>` : ''}
        ${actions}
        <div class="feed-swipe-cue"><span>↑</span> Swipe up for the next card <span class="feed-index">${String(index+1).padStart(2,'0')} / ${String(session.ids.length).padStart(2,'0')}</span></div>
      </div>
    </div>`;
  }

  function bindFeedSlide(slide) {
    const cardId = slide.dataset.cardId;
    const state = feedState(cardId);
    const reveal = () => {
      if (state.rated || state.revealed) return;
      const card = data.cards.find(c => c.id === cardId);
      if (!card) return;
      const steps = Array.isArray(card.steps) ? card.steps : [];
      if (card.type === 'problem' && state.stepsShown < steps.length) state.stepsShown++;
      else state.revealed = true;
      updateFeedSlide(cardId);
    };
    $$('[data-reveal]', slide).forEach(btn => btn.onclick = reveal);
    const tap = $('[data-tap-reveal]', slide);
    if(tap) {
      tap.onclick = reveal;
      tap.onkeydown = e => { if (e.key === 'Enter') { e.preventDefault(); reveal(); } };
    }
    $$('[data-rating]', slide).forEach(btn => btn.onclick = () => rate(btn.dataset.rating, cardId));
    const notes = $('[data-scratch]', slide);
    if(notes) notes.oninput = e => {state.scratch = e.target.value;};
  }
  function updateFeedSlide(id) {
    const slide = $$('.feed-slide', view).find(el => el.dataset.cardId === id);
    const card = data.cards.find(c => c.id === id);
    if (!slide || !card || !session) return;
    const notesWereOpen = !!$('details.feed-notes[open]', slide);
    slide.innerHTML = feedCardMarkup(card, session.ids.indexOf(id));
    if (notesWereOpen && $('details.feed-notes', slide)) $('details.feed-notes', slide).open = true;
    slide.classList.toggle('feed-answered', feedState(id).revealed);
    slide.classList.toggle('feed-reviewed', feedState(id).rated);
    bindFeedSlide(slide);
    renderMath(slide);
    updateFeedChrome();
  }
  function updateFeedChrome() {
    if (!session || activeView !== 'study') return;
    const rated = session.ids.filter(id => feedState(id).rated).length;
    const total = session.ids.length;
    const pos = $('#feed-position');
    if(pos) pos.textContent = `${Math.min(session.index + 1, total)} / ${total}`;
    const amount = $('#feed-rated-count');
    if(amount) amount.textContent = `${rated} reviewed`;
    const fill = $('#feed-progress-fill');
    if(fill) fill.style.width = `${total ? 100 * rated / total : 0}%`;
    $('#nav-due').textContent = countDue();
  }
  function scrollFeed(index, behavior = 'smooth') {
    if(!session) return;
    const target = $$('.feed-slide',view)[Math.max(0, Math.min(index, session.ids.length))];
    if(target) target.scrollIntoView({block:'start', behavior});
  }
  function renderStudy() {
    setNav('study');
    if (!session) newSession();
    const hasCards = session.ids.length > 0;
    const allAvailable = data.cards.some(c=>filterDeck==='all'||c.deckId===filterDeck);
    view.innerHTML = `<div class="feed-root">
      <div class="feed-top-overlay">
        <div class="feed-header-row"><div class="feed-wordmark">loop<span>.</span></div><div class="feed-mode-switch"><button data-feed-mode="due" class="${feedMode==='due'?'active':''}">For you</button><button data-feed-mode="all" class="${feedMode==='all'?'active':''}">Explore</button></div><span class="feed-counter" id="feed-position">1 / ${session.ids.length}</span></div>
        <div class="feed-filter-row"><select id="study-deck" aria-label="Choose deck">${deckOptions(filterDeck,true)}</select><span class="feed-review-count" id="feed-rated-count">0 reviewed</span></div>
        <div class="feed-progress-line"><div id="feed-progress-fill"></div></div>
      </div>
      <div class="feed-scroller" id="feed-scroller" aria-label="Vertical study feed" tabindex="0">
        ${hasCards ? session.ids.map((id,i) => { const card = data.cards.find(c=>c.id===id);return card ? `<article class="feed-slide feed-${card.type==='problem'?'problem':'concept'}" data-card-id="${escape(card.id)}" aria-label="Study card ${i+1} of ${session.ids.length}">${feedCardMarkup(card,i)}</article>` : ''; }).join('') : `<section class="feed-slide feed-finish"><div class="feed-empty"><span class="feed-sparkle">✦</span><h1>${allAvailable ? 'All caught up.' : 'Make something to study.'}</h1><p>${allAvailable ? 'Nothing due right now. Explore your saved cards or add a new one.' : 'Create a few math or physics cards, then they will appear here.'}</p><button class="feed-reveal" id="empty-action">${allAvailable ? 'Explore all cards' : 'Create a card'} ↗</button></div></section>`}
        ${hasCards ? `<section class="feed-slide feed-finish" id="feed-end"><div class="feed-empty"><span class="feed-sparkle">✦</span><h1>End of the feed.</h1><p>Skipped cards remain due. Review the ones you want to remember; scrolling alone never counts as an answer.</p><div class="feed-end-actions"><button id="feed-restart">↺ Start again</button><button id="feed-browse">Explore cards →</button></div></div></section>` : ''}
      </div>
    </div>`;
    const deckSelect = $('#study-deck');
    deckSelect.value=filterDeck;
    deckSelect.onchange=e=>{filterDeck=e.target.value;newSession();renderStudy();};
    $$('[data-feed-mode]', view).forEach(btn=>btn.onclick=()=>{feedMode=btn.dataset.feedMode;newSession();renderStudy();});
    if (!hasCards) {
      $('#empty-action').onclick=()=>{if(allAvailable){feedMode='all';newSession();renderStudy();}else go('create');};
    } else {
      $$('.feed-slide[data-card-id]',view).forEach(slide=>bindFeedSlide(slide));
      $('#feed-restart').onclick=()=>{session.index=0;scrollFeed(0);};
      $('#feed-browse').onclick=()=>{feedMode='all';newSession();renderStudy();};
    }
    const scroller=$('#feed-scroller');
    let scrollTick = false;
    scroller.addEventListener('scroll',()=>{
      if(scrollTick) return;
      scrollTick=true;
      requestAnimationFrame(()=>{
        const panels = $$('.feed-slide',scroller);
        if(panels.length) session.index = Math.min(session.ids.length,Math.max(0,Math.round(scroller.scrollTop / (panels[0].offsetHeight || scroller.clientHeight))));
        updateFeedChrome();
        scrollTick=false;
      });
    },{passive:true});
    updateFeedChrome();
    renderMath();
  }
  function rate(rating, cardId = currentCard()?.id) {
    if (!session || !cardId) return;
    const state = feedState(cardId);
    if (!state.revealed || state.rated) return;
    const card = data.cards.find(c=>c.id===cardId);if(!card)return;
    const i=Number(card.intervalDays)||0, reps=Number(card.repetitions)||0, ease=Number(card.ease)||2.5;
    const t=dateNow();let newInterval, newEase=ease, newReps=reps;
    if(rating==='again'){newInterval=10/(24*60);newEase=Math.max(1.3,ease-.2);newReps=0;}
    else if(rating==='hard'){newInterval=Math.max(1,i*1.2);newEase=Math.max(1.3,ease-.15);newReps=reps+1;}
    else if(rating==='good'){newInterval=reps===0?1:reps===1?3:Math.max(1,i*ease);newReps=reps+1;}
    else if(rating==='easy'){newInterval=reps===0?4:reps===1?7:Math.max(4,i*ease*1.3);newEase=ease+.15;newReps=reps+1;}
    else return;
    card.intervalDays=newInterval;card.ease=newEase;card.repetitions=newReps;
    card.dueAt=t+newInterval*DAY;card.reviewedAt=t;card.lastRating=rating;card.reviews=(Number(card.reviews)||0)+1;
    save();state.rated=true;state.completedRating=rating;updateFeedSlide(cardId);
  }
  function next() { scrollFeed((session?.index || 0) + 1); }
  function previous() { scrollFeed((session?.index || 0) - 1); }

  function renderLibrary() {
    setNav('library');
    const s=stats();
    view.innerHTML=`<div class="section-head"><div><div class="eyebrow">YOUR COLLECTION</div><h1 class="page-title">Library<span style="color:var(--primary)">.</span></h1><p class="lead muted" style="margin:0">Organize your exercises and concepts into decks.</p></div><button class="btn primary" id="new-deck">+ New deck</button></div>
    <div class="stats"><div class="stat"><div class="stat-number">${data.decks.length}</div><div class="stat-caption">Decks</div></div><div class="stat"><div class="stat-number">${s.total}</div><div class="stat-caption">Cards</div></div><div class="stat"><div class="stat-number">${s.due}</div><div class="stat-caption">Due now</div></div></div>
    <div class="card-list">${data.decks.map(d=>{const cs=data.cards.filter(c=>c.deckId===d.id);return `<div class="deck-card"><div class="deck-symbol">${d.subject.toLowerCase().includes('phys')?'⚛':'∑'}</div><div class="deck-info"><strong>${escape(d.name)}</strong><small>${escape(d.subject)} · ${cs.length} cards · ${cs.filter(due).length} due</small></div><div class="deck-actions"><button class="link-button" data-practice="${escape(d.id)}">Study</button><button class="link-button" data-edit-deck="${escape(d.id)}">Edit</button></div></div>`}).join('')||'<p class="empty-note">No decks yet. Create one to get started.</p>'}</div>
    <div class="row" style="margin-top:32px"><h2 style="font-size:18px;margin:0">Your cards</h2><button class="btn" id="library-add">+ Add card</button></div><div class="filters"><button class="filter-btn ${libraryDeck==='all'?'active':''}" data-library-filter="all">All</button>${data.decks.map(d=>`<button class="filter-btn ${libraryDeck===d.id?'active':''}" data-library-filter="${escape(d.id)}">${escape(d.name)}</button>`).join('')}</div><div class="card-list">${data.cards.filter(c=>libraryDeck==='all'||c.deckId===libraryDeck).map(c=>`<div class="list-card"><div class="deck-info"><strong class="formula-body">${pretty(c.front)}</strong><small>${escape(deckOf(c).subject)} / ${escape(deckOf(c).name)} · ${c.type==='problem'?'Exercise':'Recall'} · ${c.reviews?'Reviewed '+c.reviews+' time(s)':'New'} · ${c.dueAt&&!due(c)?'Next '+niceDate(c.dueAt):'Due now'}</small></div><div class="deck-actions"><button class="link-button" data-edit-card="${escape(c.id)}">Edit</button><button class="link-button" data-delete-card="${escape(c.id)}" style="color:var(--danger)">Delete</button></div></div>`).join('')||'<p class="empty-note">No cards in this deck yet.</p>'}</div>`;
    $('#new-deck').onclick=()=>openDeckModal();
    $('#library-add').onclick=()=>go('create');
    $$('[data-practice]').forEach(el=>el.onclick=()=>{filterDeck=el.dataset.practice;session=null;go('study');});
    $$('[data-edit-deck]').forEach(el=>el.onclick=()=>openDeckModal(el.dataset.editDeck));
    $$('[data-library-filter]').forEach(el=>el.onclick=()=>{libraryDeck=el.dataset.libraryFilter;renderLibrary();});
    $$('[data-edit-card]').forEach(el=>el.onclick=()=>{go('create');loadCardEditor(el.dataset.editCard);});
    $$('[data-delete-card]').forEach(el=>el.onclick=()=>{
      const card=data.cards.find(c=>c.id===el.dataset.deleteCard);if(!card)return;
      if(confirm('Delete this card? This cannot be undone unless you have a backup.')) {data.cards=data.cards.filter(c=>c.id!==card.id);save();session=null;renderLibrary();toast('Card deleted.');}
    });
    renderMath();
  }
  function openDeckModal(id=null) {
    const d=data.decks.find(x=>x.id===id);
    const form=$('#modal-form');
    form.innerHTML=`<div class="row"><h2>${d?'Edit deck':'New deck'}</h2><button class="icon-button" id="close-modal" type="button" aria-label="Close">×</button></div><label for="deck-subject">Subject</label><input id="deck-subject" required maxlength="80" placeholder="Physics" value="${escape(d?.subject||'')}"><label for="deck-name">Deck name</label><input id="deck-name" required maxlength="120" placeholder="Electromagnetism" value="${escape(d?.name||'')}"><div class="btn-row"><button class="btn primary" type="submit">${d?'Save changes':'Create deck'}</button>${d?'<button type="button" class="btn danger" id="delete-deck">Delete deck</button>':''}</div>`;
    $('#modal').showModal();$('#close-modal').onclick=()=>$('#modal').close();
    form.onsubmit=e=>{e.preventDefault();const subject=$('#deck-subject').value.trim(),name=$('#deck-name').value.trim();if(!subject||!name)return;
      if(d){d.name=name;d.subject=subject;d.updatedAt=dateNow();}else{data.decks.push({id:uid(),subject,name,createdAt:dateNow(),updatedAt:dateNow()});}
      save();$('#modal').close();session=null;renderLibrary();toast(d?'Deck updated.':'Deck created.');};
    if(d)$('#delete-deck').onclick=()=>{const n=data.cards.filter(c=>c.deckId===d.id).length;if(confirm(`Delete “${d.name}” and its ${n} cards? This cannot be undone without a backup.`)){
      data.cards=data.cards.filter(c=>c.deckId!==d.id);data.decks=data.decks.filter(x=>x.id!==d.id);$('#modal').close();session=null;filterDeck='all';libraryDeck='all';save();renderLibrary();toast('Deck deleted.');
    }};
  }

  let editCardId=null;
  function renderCreate() {
    setNav('create');
    const hasDecks=data.decks.length>0;
    view.innerHTML=`<div class="section-head"><div><div class="eyebrow">FAST CAPTURE</div><h1 class="page-title">Make cards<span style="color:var(--primary)">.</span></h1><p class="lead muted" style="margin:0">Start simple. One question or one problem at a time.</p></div></div>
    <div class="grid-two"><section class="panel"><div class="row"><h2 id="editor-title">New card</h2><button class="link-button" id="create-deck">+ Deck</button></div>
    <form id="card-form"><label for="card-deck">Deck</label><select id="card-deck" ${!hasDecks?'disabled':''}>${deckOptions(data.decks[0]?.id)}</select>
    <label for="card-type">Card type</label><select id="card-type"><option value="flashcard">Question / answer</option><option value="problem">Exercise / worked solution</option></select>
    <label for="card-front">Question or exercise</label><textarea id="card-front" required maxlength="10000" placeholder="What is the formula for gravitational potential energy?"></textarea>
    <label for="card-back">Answer or final solution</label><textarea id="card-back" required maxlength="10000" placeholder="$E_p = mgh$"></textarea>
    <div id="steps-group" class="hide"><label for="card-steps">Solution steps</label><textarea id="card-steps" maxlength="18000" placeholder="Write one step per line.\nStart with conservation of energy.\nRearrange the equation.\nSubstitute the values."></textarea><p class="form-hint" style="margin-top:-10px">Each line becomes a separately revealable hint. Try the next step yourself before tapping.</p></div>
    <p class="form-hint">Math notation: write <code>$E=mc^2$</code> to display an equation.</p>
    <div class="btn-row"><button class="btn primary" type="submit" ${!hasDecks?'disabled':''} id="save-card">Save card</button><button class="btn ghost hide" type="button" id="cancel-edit">Cancel editing</button></div></form></section>
    <section class="panel"><h2>Bulk cards from notes</h2><p class="mini" style="line-height:1.6">Paste short structured notes. This basic, offline generator recognizes one term and explanation per line; it is <strong>not AI</strong>.</p><div class="code-sample">Momentum :: Mass × velocity\nVelocity :: Displacement / time\nQ: What is $\\frac{d}{dx}x^2$? | A: $2x$</div>
    <label for="notes" style="margin-top:19px">Your notes</label><textarea id="notes" rows="6" placeholder="Concept :: Explanation\nAnother concept :: Another explanation"></textarea>
    <div class="btn-row"><button class="btn" id="preview-notes" type="button">Preview cards</button><button class="btn ghost" id="copy-ai-prompt" type="button">Copy AI prompt</button></div>
    <div id="notes-preview" style="margin-top:16px"></div></section></div>`;
    editCardId=null;
    $('#create-deck').onclick=()=>{openDeckModal();const form=$('#modal-form'),original=form.onsubmit;form.onsubmit=e=>{original(e);if(!$('#modal').open)go('create');};};
    $('#card-type').onchange=()=>$('#steps-group').classList.toggle('hide',$('#card-type').value!=='problem');
    $('#card-form').onsubmit=e=>{e.preventDefault();
      const deckId=$('#card-deck').value,type=$('#card-type').value,front=$('#card-front').value.trim(),back=$('#card-back').value.trim();
      if(!data.decks.some(d=>d.id===deckId)){toast('Create a deck first.');return;}
      if(!front||!back){toast('Question and answer are required.');return;}
      const steps=type==='problem'?$('#card-steps').value.split('\n').map(x=>x.trim()).filter(Boolean):[];
      const existing=data.cards.find(c=>c.id===editCardId);
      if(existing){Object.assign(existing,{deckId,type,front,back,steps,updatedAt:dateNow()});}
      else {data.cards.push({id:uid(),deckId,type,front,back,steps,createdAt:dateNow(),updatedAt:dateNow(),dueAt:null,intervalDays:0,ease:2.5,repetitions:0,reviewedAt:null,lastRating:null,reviews:0});}
      save();session=null;const msg=existing?'Card updated.':'Card saved!';renderCreate();$('#card-deck').value=deckId;toast(msg);
    };
    $('#cancel-edit').onclick=()=>renderCreate();
    $('#preview-notes').onclick=previewNotes;
    $('#copy-ai-prompt').onclick=copyAIPrompt;
  }
  function loadCardEditor(id) {
    const card=data.cards.find(c=>c.id===id);if(!card)return;
    editCardId=card.id;
    $('#editor-title').textContent='Edit card';$('#save-card').textContent='Save changes';$('#cancel-edit').classList.remove('hide');
    $('#card-deck').value=card.deckId;$('#card-type').value=card.type;$('#card-front').value=card.front;
    $('#card-back').value=card.back;$('#card-steps').value=(card.steps||[]).join('\n');
    $('#steps-group').classList.toggle('hide',card.type!=='problem');scrollTo({top:0,behavior:'smooth'});
  }
  function parseNotes(raw) {
    return raw.split('\n').map(line=>line.trim()).filter(Boolean).map(line=>{
      const qa=line.match(/^Q:\s*(.*?)\s*\|\s*A:\s*(.+)$/i);
      if(qa)return {front:qa[1].trim(),back:qa[2].trim()};
      const delimiter=line.includes('::')?'::':line.includes(' → ')?' → ':line.includes(' : ')?' : ':null;
      if(!delimiter)return null;
      const at=line.indexOf(delimiter),front=line.slice(0,at).trim(),back=line.slice(at+delimiter.length).trim();
      return front&&back?{front:(/\?$/.test(front)||/^(what|why|how|when|where|which|calculate|derive|state|prove|find|explain)\b/i.test(front)?front:`Explain: ${front}`),back}:null;
    }).filter(Boolean).slice(0,100);
  }
  function previewNotes() {
    const cards=parseNotes($('#notes').value);
    const panel=$('#notes-preview');
    if(!cards.length){panel.innerHTML='<p class="small-note">No cards detected. Try one line per card with <code>Concept :: Explanation</code>.</p>';return;}
    panel.innerHTML=`<div class="callout"><strong>${cards.length} cards detected</strong><br>These are basic recall cards generated from your structured lines.</div>${cards.slice(0,4).map(c=>`<div class="small-note" style="padding:10px 0;border-bottom:1px solid var(--line)"><strong>${escape(c.front)}</strong><br>${escape(c.back)}</div>`).join('')}${cards.length>4?'<p class="mini">…and more</p>':''}<button class="btn primary full" id="import-notes" style="margin-top:12px">Add ${cards.length} cards to selected deck</button>`;
    $('#import-notes').onclick=()=>{
      const deckId=$('#card-deck').value;if(!data.decks.some(d=>d.id===deckId)){toast('Create a deck first.');return;}
      const t=dateNow();cards.forEach(c=>data.cards.push({...c,id:uid(),deckId,type:'flashcard',steps:[],createdAt:t,updatedAt:t,dueAt:null,intervalDays:0,ease:2.5,repetitions:0,reviewedAt:null,lastRating:null,reviews:0}));
      save();session=null;$('#notes').value='';panel.innerHTML='';toast(`${cards.length} cards added. Ready to study!`);
    };
  }
  async function copyAIPrompt() {
    const notes=$('#notes').value.trim();
    if(!notes){toast('Paste some class notes first.');return;}
    const prompt=`Turn my math/physics class notes into concise active-recall flashcards. Use only statements supported by my notes; flag uncertainties rather than inventing facts. Make each card test one thing. Use LaTeX between $...$ for formulas. Output ONLY one card per line in the format Question :: Answer (no numbering, no code block, no extra commentary). Make about 5-15 useful cards, unless the notes are short. Here are my notes:\n\n${notes}`;
    try{await navigator.clipboard.writeText(prompt);toast('Prompt copied. Paste it into ChatGPT, then paste the resulting lines here.');}
    catch(e){const form=$('#modal-form');form.innerHTML='<div class="row"><h2>Copy this prompt</h2><button type="button" class="icon-button" id="close-modal">×</button></div><textarea readonly id="prompt-output" style="min-height:280px"></textarea>';$('#modal').showModal();$('#prompt-output').value=prompt;$('#prompt-output').select();$('#close-modal').onclick=()=>$('#modal').close();}
  }

  function renderTransfer() {
    setNav('transfer');
    view.innerHTML=`<div class="section-head"><div><div class="eyebrow">YOUR DATA, YOUR CONTROL</div><h1 class="page-title">Backup & transfer<span style="color:var(--primary)">.</span></h1><p class="lead muted" style="margin:0">No account and no cloud yet. Your cards and review progress live on this device.</p></div></div>
    <div class="callout"><strong>Important:</strong> PC and phone do not sync automatically in version 0.1. Use Export on one device and Import on the other. Keep backups — clearing browser/app data can erase local progress.</div>
    <div class="grid-two"><section class="panel"><h2>1. Export a backup</h2><p class="small-note">Saves all your decks, cards, and review schedules to one JSON file. Keep it private if your notes are private.</p><button class="btn primary" id="export">↓ Export my cards</button><p class="mini">${data.decks.length} decks · ${data.cards.length} cards</p></section>
    <section class="panel"><h2>2. Import a backup</h2><p class="small-note">Choose a file exported from Loop. Matching cards are merged; whichever review progress is newer is kept. Imported decks and cards are added without deleting your current data.</p><div class="upload"><button class="btn full" type="button">↑ Choose JSON backup</button><input aria-label="Import JSON backup" id="import-file" type="file" accept=".json,application/json"></div><p class="mini">For your first transfer: export on PC, send file to iPhone via iCloud Drive / AirDrop / email, then import here.</p></section></div>
    <section class="panel" style="margin-top:17px"><h2>Getting this onto your iPhone</h2><p class="small-note">Publish the app files to a free GitHub Pages site, open the website in Safari on iPhone, then use <strong>Share → Add to Home Screen</strong>. The app icon then launches in its own window. GitHub hosts only the app code; your cards are not uploaded to the public repository.</p><p class="small-note">The full steps are in the included README file. Hosting is free for a public repository.</p></section>`;
    $('#export').onclick=exportData;
    $('#import-file').onchange=async e=>{
      const file=e.target.files?.[0];if(!file)return;
      if(file.size>5_000_000){toast('File too large (5 MB max).');return;}
      try{const parsed=JSON.parse(await file.text());const counts=mergeData(parsed);session=null;renderTransfer();toast(`Imported ${counts.decks} new decks and ${counts.cards} new cards.`);}
      catch(err){console.warn(err);toast('Import failed: '+(err.message||'Invalid backup.'));}
    };
  }
  function exportData() {
    const blob=new Blob([JSON.stringify({...data,exportedAt:dateNow()},null,2)],{type:'application/json'});
    const url=URL.createObjectURL(blob),link=document.createElement('a');
    link.href=url;link.download=`loop-backup-${new Date().toISOString().slice(0,10)}.json`;
    document.body.append(link);link.click();link.remove();setTimeout(()=>URL.revokeObjectURL(url),60_000);
    toast('Backup created. Save the file somewhere safe.');
  }
  const validStr=(v,max=10000)=>typeof v==='string'&&v.length<=max;
  function mergeData(candidate) {
    if(!candidate||candidate.version!==1||!Array.isArray(candidate.decks)||!Array.isArray(candidate.cards))throw Error('Not a Loop v0.1 backup.');
    if(candidate.decks.length>300||candidate.cards.length>5000)throw Error('Too many decks/cards.');
    if(!candidate.decks.every(d=>validStr(d.id,150)&&validStr(d.name,120)&&validStr(d.subject,80)))throw Error('Invalid decks.');
    const ids=new Set(candidate.decks.map(d=>d.id));
    if(!candidate.cards.every(c=>validStr(c.id,150)&&ids.has(c.deckId)&&validStr(c.front)&&validStr(c.back)&&['flashcard','problem'].includes(c.type)&&Array.isArray(c.steps)&&(c.steps.length<=200)&&c.steps.every(s=>validStr(s,2000))))throw Error('Invalid cards.');
    let addedDecks=0,addedCards=0;
    candidate.decks.forEach(d=>{const existing=data.decks.find(x=>x.id===d.id);if(!existing){data.decks.push({...d});addedDecks++;}else if((d.updatedAt||0)>(existing.updatedAt||0)){Object.assign(existing,{name:d.name,subject:d.subject,updatedAt:d.updatedAt});}});
    candidate.cards.forEach(c=>{
      const existing=data.cards.find(x=>x.id===c.id);
      if(!existing){data.cards.push({...c});addedCards++;return;}
      if((c.updatedAt||0)>(existing.updatedAt||0)){
        Object.assign(existing,{deckId:c.deckId,type:c.type,front:c.front,back:c.back,steps:c.steps,updatedAt:c.updatedAt});
      }
      if((c.reviewedAt||0)>(existing.reviewedAt||0)){
        ['dueAt','intervalDays','ease','repetitions','reviewedAt','lastRating','reviews'].forEach(k=>{existing[k]=c[k];});
      }
    });
    save();return {decks:addedDecks,cards:addedCards};
  }
  function help() {
    const form=$('#modal-form');form.innerHTML=`<div class="row"><h2>How Loop works</h2><button type="button" class="icon-button" id="close-modal">×</button></div><p class="small-note"><strong>Study:</strong> scroll vertically like a feed. Tap the question to reveal an answer, then rate it if you wish. Skipped cards remain due.</p><p class="small-note"><strong>Exercises:</strong> try solving on paper, optionally write in the scratchpad, reveal steps one at a time, then see the final answer.</p><p class="small-note"><strong>Creating cards:</strong> write a question and answer. Enter formulas between dollar signs, such as <code>$F=ma$</code>.</p><p class="small-note"><strong>Import/Export:</strong> manually transfer a JSON backup from one device to another. No cloud syncing in v0.1.</p><p class="small-note"><strong>Review intervals:</strong> a simple SM-2-style scheduler, not FSRS yet. Rating “Again” brings the card back in about 10 minutes.</p><button type="button" class="btn primary" id="help-close">Got it</button>`;
    $('#modal').showModal();$('#close-modal').onclick=$('#help-close').onclick=()=>$('#modal').close();
  }
  $$('[data-view]').forEach(el=>el.addEventListener('click',()=>go(el.dataset.view)));
  $('#help-btn').onclick=help;
  document.addEventListener('keydown',e=>{
    const target=e.target;
    if(target.closest('input,textarea,select,dialog')||activeView!=='study')return;
    if(e.key===' '){e.preventDefault();const slide=$$('.feed-slide',view)[session?.index];$('[data-reveal]',slide)?.click();}
    else if(e.key==='ArrowDown'||e.key==='ArrowUp'){e.preventDefault();e.key==='ArrowDown'?next():previous();}
    else if(['1','2','3','4'].includes(e.key)){
      const rating=['again','hard','good','easy'][Number(e.key)-1];
      $(`[data-rating="${rating}"]`, $$(".feed-slide",view)[session?.index])?.click();
    }
  });
  if('serviceWorker' in navigator && ['http:','https:'].includes(location.protocol))navigator.serviceWorker.register('./sw.js').catch(err=>console.warn('Offline caching unavailable',err));
  // KaTeX is optional and loaded from a CDN. Retry typesetting once it's ready.
  window.addEventListener('load',()=>renderMath());
  go('study');
})();