# Loop — personal study app v0.1

Free, local-first maths/physics spaced repetition. It is an installable web app, not an App Store app. No account, API key, server, or subscription required.

## Features

- Make/edit/delete decks, flashcards, and step-by-step exercise cards.
- Study by reveal, rate (Again/Hard/Good/Easy), then swipe up.
- A simple SM-2-style review scheduler (not FSRS yet).
- Render LaTeX inside `$...$` when the KaTeX CDN has loaded.
- Turn structured notes like `Momentum :: Mass × velocity` into cards offline.
- Copy a prompt for ChatGPT to turn unstructured notes into `Question :: Answer` lines, then bulk import them here.
- Export/import JSON backups to carry cards and progress between devices.

Not yet included: automatic cloud sync, automatic AI inside app, photo/PDF problem sheets, native App Store distribution.

## Try on a PC

Unzip and double-click `index.html` in a browser. If you have Python, you can alternatively run `python -m http.server 8000` in this folder, then visit http://localhost:8000. Offline caching works when served over HTTPS or localhost, not `file://`.

## Get it onto iPhone at $0 (GitHub Pages)

1. Create a free account at https://github.com if necessary.
2. Create a **public** repository called `loop-study`.
3. Use GitHub's **Add file → Upload files** to upload the *contents* of this folder, including the `icons` subfolder, into the repository root. **Never upload personal backups or class notes.**
4. Open **Settings → Pages**. Choose **Deploy from a branch**, `main`, `/(root)`, Save.
5. Open the URL shown in Pages settings, normally `https://YOUR-USERNAME.github.io/loop-study/`, in **Safari on iPhone**.
6. In Safari: **Share → Add to Home Screen**, keep *Open as Web App* enabled, tap **Add**.

Your public repository hosts only the app code, not your card data.

## Transfer your cards: PC → iPhone

1. Make cards on PC. Choose **Backup & transfer → Export my cards**.
2. Send the downloaded `.json` file to iPhone using iCloud Drive, AirDrop from a Mac, email, etc.
3. On iPhone: open Loop → **Transfer → Choose JSON backup** and select it from Files.
4. Matching cards are merged and the newer review state is kept. To bring progress back to PC, export from iPhone and import on PC.

**This is manual transfer, NOT live syncing.** Backup both devices before merging. Deleted cards can reappear if imported again from an old file.

## Notes → cards

In **Create**, paste one item per line:

```text
Momentum :: Mass × velocity
Velocity :: Displacement / time
Q: What is the derivative of $x^2$? | A: $2x$
```

Choose **Preview cards → Add cards**. For unstructured notes, choose **Copy AI prompt** and paste it into ChatGPT; paste its returned `Question :: Answer` lines back into the notes box. Check any AI-generated math for correctness.

## Privacy, costs and limitations

- Cards/progress are stored in `localStorage` on each device. Clearing app/browser data can erase them. **Export backups regularly.**
- No database, analytics, or paid API. KaTeX code is requested from jsDelivr CDN; card contents are not sent to that CDN.
- Offline shell is cached after an online visit; formula rendering can require an internet connection until CDN resources are cached.
- Free public GitHub Pages hosting and iPhone Home Screen installation require no Apple Developer membership.

Next step after trying the prototype: free-tier cloud sync, then improved note-to-card creation and exercise imports.

## Version 0.2 — vertical feed

The **Study** tab is now a true full-screen scroll-snapping feed. Swipe/scroll up to the next question or down to revisit any earlier question; there is no mandatory Next button. Tap a question (or the bottom button) to reveal an answer; exercises can reveal their steps sequentially. Rating is optional for navigation, and skipping a card **never** changes its review schedule. **For you** shows due cards; **Explore** scrolls all saved cards. The app still stores your cards only in your browser, with manual JSON import/export for transfer.

## v0.3 — photo slideshow feed

The phone opens into a full-height TikTok-style photo feed, without the bottom tab bar. Each question/exercise is now a slideshow post:

- **Swipe up/down** to move between posts.
- **Swipe left/right** within a post to see step-by-step hints and the answer (or use the right-side Next control).
- **Rate** appears on the final answer slide; tapping it opens a small panel rather than cluttering the feed with review buttons.
- **Loop logo** opens the personal studio menu for Library, Create, and Backup; the magnifying-glass icon opens deck filters.

The desktop sidebar is retained for card management. All cards, including the complex-numbers deck, and existing local review progress are preserved by the upgrade. No new account or paid API is needed.