/* Original revision content aligned with the public MPSI chapter outlines; not copied from any textbook. */
window.LOOP_MPSI_PACKS = [
  {
    "key": "mpsi-logique-v1",
    "deck": {
      "id": "loop-mpsi-logique-v1",
      "name": "01 · Logique et raisonnements",
      "subject": "Mathématiques · MPSI"
    },
    "cards": [
      {
        "key": "001",
        "type": "flashcard",
        "front": "Qu'est-ce qu'une proposition mathématique ?",
        "back": "Un énoncé auquel on peut attribuer une valeur de vérité : vrai ou faux."
      },
      {
        "key": "002",
        "type": "flashcard",
        "front": "Que signifie $P\\land Q$ ?",
        "back": "$P\\land Q$ est vraie si et seulement si $P$ et $Q$ sont toutes deux vraies."
      },
      {
        "key": "003",
        "type": "flashcard",
        "front": "Que signifie $P\\lor Q$ ?",
        "back": "$P\\lor Q$ est vraie dès qu'au moins une des propositions est vraie (ou inclusif)."
      },
      {
        "key": "004",
        "type": "flashcard",
        "front": "Quand $P\\Rightarrow Q$ est-elle fausse ?",
        "back": "Seulement si $P$ est vraie et $Q$ est fausse."
      },
      {
        "key": "005",
        "type": "flashcard",
        "front": "Comment réécrire $P\\Rightarrow Q$ avec $\\neg$ et $\\lor$ ?",
        "back": "$P\\Rightarrow Q\\iff (\\neg P)\\lor Q$."
      },
      {
        "key": "006",
        "type": "flashcard",
        "front": "Qu'est-ce qu'une équivalence $P\\Leftrightarrow Q$ ?",
        "back": "Les deux implications $P\\Rightarrow Q$ et $Q\\Rightarrow P$ sont vraies."
      },
      {
        "key": "007",
        "type": "flashcard",
        "front": "Quelle est la négation de $P\\land Q$ ?",
        "back": "$\\neg(P\\land Q)\\iff (\\neg P)\\lor(\\neg Q)$ (De Morgan)."
      },
      {
        "key": "008",
        "type": "flashcard",
        "front": "Quelle est la négation de $P\\lor Q$ ?",
        "back": "$\\neg(P\\lor Q)\\iff (\\neg P)\\land(\\neg Q)$ (De Morgan)."
      },
      {
        "key": "009",
        "type": "flashcard",
        "front": "Quelle est la négation de $P\\Rightarrow Q$ ?",
        "back": "$P\\land\\neg Q$ : un contre-exemple vérifiant $P$ sans vérifier $Q$."
      },
      {
        "key": "010",
        "type": "flashcard",
        "front": "Quelle est la contraposée de $P\\Rightarrow Q$ ?",
        "back": "$\\neg Q\\Rightarrow\\neg P$. Elle est logiquement équivalente à l'implication initiale."
      },
      {
        "key": "011",
        "type": "flashcard",
        "front": "La réciproque de $P\\Rightarrow Q$ est-elle automatique ?",
        "back": "Non. La réciproque $Q\\Rightarrow P$ peut être fausse."
      },
      {
        "key": "012",
        "type": "flashcard",
        "front": "Quelle différence entre condition nécessaire et suffisante ?",
        "back": "$P\\Rightarrow Q$ : $P$ est suffisante pour $Q$, et $Q$ nécessaire pour $P$."
      },
      {
        "key": "013",
        "type": "flashcard",
        "front": "Qu'est-ce qu'une tautologie ?",
        "back": "Une proposition toujours vraie, quelles que soient les valeurs de vérité des variables."
      },
      {
        "key": "014",
        "type": "flashcard",
        "front": "Qu'est-ce qu'une contradiction ?",
        "back": "Une proposition toujours fausse, par exemple $P\\land\\neg P$."
      },
      {
        "key": "015",
        "type": "flashcard",
        "front": "Qu'est-ce que le tiers exclu ?",
        "back": "$P\\lor\\neg P$ est toujours vraie en logique classique."
      },
      {
        "key": "016",
        "type": "flashcard",
        "front": "Que signifie $\\forall x\\in E,\\ P(x)$ ?",
        "back": "Pour chaque élément $x$ de $E$, la propriété $P(x)$ est vraie."
      },
      {
        "key": "017",
        "type": "flashcard",
        "front": "Que signifie $\\exists x\\in E,\\ P(x)$ ?",
        "back": "Au moins un élément de $E$ vérifie $P$."
      },
      {
        "key": "018",
        "type": "flashcard",
        "front": "Que signifie $\\exists!x\\in E,\\ P(x)$ ?",
        "back": "Il existe un unique élément de $E$ vérifiant $P$ (existence + unicité)."
      },
      {
        "key": "019",
        "type": "flashcard",
        "front": "Négation de $\\forall x\\in E,\\ P(x)$ ?",
        "back": "$\\exists x\\in E,\\neg P(x)$."
      },
      {
        "key": "020",
        "type": "flashcard",
        "front": "Négation de $\\exists x\\in E,\\ P(x)$ ?",
        "back": "$\\forall x\\in E,\\neg P(x)$."
      },
      {
        "key": "021",
        "type": "flashcard",
        "front": "Les quantificateurs $\\forall x\\exists y$ et $\\exists y\\forall x$ sont-ils interchangeables ?",
        "back": "Non. Le premier autorise $y$ à dépendre de $x$ ; le second impose un même $y$ pour tous les $x$."
      },
      {
        "key": "022",
        "type": "problem",
        "front": "Nier : $\\forall x\\in\\mathbb R,\\exists y\\in\\mathbb R,\\ x<y$.",
        "back": "$\\exists x\\in\\mathbb R,\\forall y\\in\\mathbb R,\\ x\\ge y$.",
        "steps": [
          "On échange $\\forall$ et $\\exists$.",
          "On nie $x<y$ en $x\\ge y$."
        ]
      },
      {
        "key": "023",
        "type": "flashcard",
        "front": "Quelle est la structure d'une preuve directe de $P\\Rightarrow Q$ ?",
        "back": "Supposer $P$ puis déduire $Q$ par des arguments valides."
      },
      {
        "key": "024",
        "type": "flashcard",
        "front": "Quel est le principe d'une preuve par contraposée ?",
        "back": "Pour établir $P\\Rightarrow Q$, supposer $\\neg Q$ et prouver $\\neg P$."
      },
      {
        "key": "025",
        "type": "flashcard",
        "front": "Quel est le principe d'une preuve par l'absurde ?",
        "back": "Supposer la négation de l'énoncé et aboutir à une contradiction."
      },
      {
        "key": "026",
        "type": "flashcard",
        "front": "Comment montrer qu'un énoncé universel est faux ?",
        "back": "Donner un contre-exemple précis dans le domaine indiqué."
      },
      {
        "key": "027",
        "type": "flashcard",
        "front": "Comment prouver une propriété de type $A\\Leftrightarrow B$ ?",
        "back": "Prouver séparément $A\\Rightarrow B$ puis $B\\Rightarrow A$."
      },
      {
        "key": "028",
        "type": "flashcard",
        "front": "Que faut-il montrer pour une preuve d'unicité ?",
        "back": "Si $x$ et $y$ vérifient tous deux la propriété, alors $x=y$."
      },
      {
        "key": "029",
        "type": "flashcard",
        "front": "Comment fonctionne la disjonction des cas ?",
        "back": "Découper en cas couvrant toutes les possibilités, puis démontrer la conclusion dans chacun."
      },
      {
        "key": "030",
        "type": "flashcard",
        "front": "Quelles sont les deux étapes d'une récurrence simple ?",
        "back": "Initialisation au premier rang, puis hérédité $P(n)\\Rightarrow P(n+1)$."
      },
      {
        "key": "031",
        "type": "flashcard",
        "front": "Qu'apporte la récurrence forte ?",
        "back": "Pour prouver $P(n+1)$, on peut supposer vraies toutes les propriétés des rangs précédents."
      },
      {
        "key": "032",
        "type": "flashcard",
        "front": "Qu'est-ce qu'une récurrence à deux pas ?",
        "back": "Initialiser deux rangs puis montrer $P(n)\\land P(n+1)\\Rightarrow P(n+2)$."
      },
      {
        "key": "033",
        "type": "flashcard",
        "front": "Piège classique dans une preuve par récurrence ?",
        "back": "Oublier l'initialisation, le domaine des rangs ou utiliser $P(n+1)$ dans l'hérédité."
      },
      {
        "key": "034",
        "type": "flashcard",
        "front": "Vrai ou faux : $x^2=4\\Rightarrow x=2$ dans $\\mathbb R$ ?",
        "back": "Faux : $x=-2$ est un contre-exemple."
      },
      {
        "key": "035",
        "type": "problem",
        "front": "Prouve : si $n^2$ est pair, alors $n$ est pair.",
        "back": "Si $n$ était impair, $n=2k+1$, donc $n^2=4k(k+1)+1$ serait impair.",
        "steps": [
          "Utiliser la contraposée : $n$ impair implique $n^2$ impair.",
          "Écrire $n=2k+1$ et développer."
        ]
      },
      {
        "key": "036",
        "type": "problem",
        "front": "Prouve : pour $x\\in\\mathbb R$, $x^2=0\\Leftrightarrow x=0$.",
        "back": "$x^2=0\\Rightarrow x=0$ (produit nul), et $x=0\\Rightarrow x^2=0$.",
        "steps": [
          "Démontrer les deux implications.",
          "Utiliser que $\\mathbb R$ n'a pas de diviseurs de zéro."
        ]
      },
      {
        "key": "037",
        "type": "flashcard",
        "front": "Nier : « tout réel positif possède une racine carrée positive ».",
        "back": "« Il existe un réel $x\\ge0$ qui n'admet aucune racine carrée $y\\ge0$. »"
      },
      {
        "key": "038",
        "type": "problem",
        "front": "Montre par récurrence : $\\sum_{k=1}^n k=\\frac{n(n+1)}2$.",
        "back": "Après ajout de $n+1$ : $\\frac{n(n+1)}2+(n+1)=\\frac{(n+1)(n+2)}2$.",
        "steps": [
          "Initialiser à $n=1$.",
          "Supposer la formule au rang $n$.",
          "Ajouter le terme $n+1$ et factoriser."
        ]
      },
      {
        "key": "039",
        "type": "problem",
        "front": "Prouve : pour $n\\ge1$, $2^n\\ge n+1$.",
        "back": "Au rang $n+1$, $2^{n+1}\\ge2(n+1)\\ge n+2$ pour $n\\ge0$.",
        "steps": [
          "Initialiser à $n=1$.",
          "Multiplier l'hypothèse $2^n\\ge n+1$ par $2$.",
          "Comparer $2n+2$ avec $n+2$."
        ]
      },
      {
        "key": "040",
        "type": "problem",
        "front": "Montre que $\\sqrt2$ est irrationnel.",
        "back": "Si $\\sqrt2=p/q$ irréductible, alors $p^2=2q^2$ rend $p$, puis $q$ pairs : contradiction.",
        "steps": [
          "Supposer $\\sqrt2=p/q$ avec $p,q$ entiers premiers entre eux.",
          "De $p^2$ pair, déduire $p$ pair.",
          "Conclure que $q$ est pair, contradiction."
        ]
      },
      {
        "key": "041",
        "type": "flashcard",
        "front": "Quand peut-on affirmer « donc » entre deux étapes d'un calcul ?",
        "back": "Quand la seconde propriété découle logiquement de la première ; une implication n'est pas toujours une équivalence."
      },
      {
        "key": "042",
        "type": "flashcard",
        "front": "Pour résoudre une équation, pourquoi vérifier les solutions trouvées ?",
        "back": "Certaines transformations (mise au carré, multiplication par zéro) peuvent ajouter des solutions parasites."
      },
      {
        "key": "043",
        "type": "flashcard",
        "front": "Différence entre « si » et « si et seulement si » ?",
        "back": "« Si » exprime une implication ; « si et seulement si » une équivalence (deux implications)."
      },
      {
        "key": "044",
        "type": "flashcard",
        "front": "Les négations : $\\neg\\neg P$ et $P$ ?",
        "back": "En logique classique, $\\neg\\neg P\\iff P$."
      },
      {
        "key": "045",
        "type": "flashcard",
        "front": "Que signifie une famille $\\big(P_i\\big)_{i\\in I}$ de propriétés ?",
        "back": "Une propriété $P_i$ associée à chaque indice $i\\in I$ ; $I$ est l'ensemble d'indices."
      },
      {
        "key": "046",
        "type": "problem",
        "front": "Exercice : identifier l'erreur dans « $x^2=9\\Leftrightarrow x=3$ ».",
        "back": "Il manque $x=-3$. La bonne équivalence est $x^2=9\\Leftrightarrow x\\in\\{-3,3\\}$.",
        "steps": [
          "Le carré d'un réel ne distingue pas son signe.",
          "Factoriser $x^2-9=(x-3)(x+3)$."
        ]
      }
    ]
  },
  {
    "key": "mpsi-ensembles-v1",
    "deck": {
      "id": "loop-mpsi-ensembles-v1",
      "name": "02 · Ensembles, applications, relations",
      "subject": "Mathématiques · MPSI"
    },
    "cards": [
      {
        "key": "001",
        "type": "flashcard",
        "front": "Différence entre $x\\in A$ et $A\\subseteq B$ ?",
        "back": "$x\\in A$ : appartenance d'un élément. $A\\subseteq B$ : inclusion de deux ensembles."
      },
      {
        "key": "002",
        "type": "flashcard",
        "front": "Que signifie $A\\subseteq B$ ?",
        "back": "$\\forall x,\\ x\\in A\\Rightarrow x\\in B$."
      },
      {
        "key": "003",
        "type": "flashcard",
        "front": "Comment montrer $A=B$ ?",
        "back": "Montrer les deux inclusions $A\\subseteq B$ et $B\\subseteq A$."
      },
      {
        "key": "004",
        "type": "flashcard",
        "front": "Qu'est-ce que l'ensemble vide $\\varnothing$ ?",
        "back": "L'ensemble ne contenant aucun élément ; $\\varnothing\\subseteq A$ pour tout $A$."
      },
      {
        "key": "005",
        "type": "flashcard",
        "front": "Définir la réunion $A\\cup B$.",
        "back": "$\\{x\\mid x\\in A\\ \\text{ou}\\ x\\in B\\}$."
      },
      {
        "key": "006",
        "type": "flashcard",
        "front": "Définir l'intersection $A\\cap B$.",
        "back": "$\\{x\\mid x\\in A\\ \\text{et}\\ x\\in B\\}$."
      },
      {
        "key": "007",
        "type": "flashcard",
        "front": "Définir la différence $A\\setminus B$.",
        "back": "$\\{x\\in A\\mid x\\notin B\\}$."
      },
      {
        "key": "008",
        "type": "flashcard",
        "front": "Quand $A$ et $B$ sont-ils disjoints ?",
        "back": "Quand $A\\cap B=\\varnothing$."
      },
      {
        "key": "009",
        "type": "flashcard",
        "front": "Quel est le complémentaire de $A$ dans $E$ ?",
        "back": "$E\\setminus A$, aussi noté $A^c$ si l'univers $E$ est fixé."
      },
      {
        "key": "010",
        "type": "flashcard",
        "front": "Formule de De Morgan pour les complémentaires de réunions ?",
        "back": "$(A\\cup B)^c=A^c\\cap B^c$, dans un univers fixé."
      },
      {
        "key": "011",
        "type": "flashcard",
        "front": "Formule de De Morgan pour les complémentaires d'intersections ?",
        "back": "$(A\\cap B)^c=A^c\\cup B^c$, dans un univers fixé."
      },
      {
        "key": "012",
        "type": "flashcard",
        "front": "Distribuer $A\\cap(B\\cup C)$.",
        "back": "$(A\\cap B)\\cup(A\\cap C)$."
      },
      {
        "key": "013",
        "type": "flashcard",
        "front": "Distribuer $A\\cup(B\\cap C)$.",
        "back": "$(A\\cup B)\\cap(A\\cup C)$."
      },
      {
        "key": "014",
        "type": "flashcard",
        "front": "Qu'est-ce que la différence symétrique $A\\triangle B$ ?",
        "back": "$(A\\setminus B)\\cup(B\\setminus A)$ : les éléments d'un seul des deux ensembles."
      },
      {
        "key": "015",
        "type": "flashcard",
        "front": "Définir l'ensemble des parties $\\mathcal P(E)$.",
        "back": "L'ensemble de tous les sous-ensembles de $E$, y compris $\\varnothing$ et $E$."
      },
      {
        "key": "016",
        "type": "flashcard",
        "front": "Si $E$ a $n$ éléments, combien de parties possède-t-il ?",
        "back": "$|\\mathcal P(E)|=2^n$ pour $E$ fini."
      },
      {
        "key": "017",
        "type": "flashcard",
        "front": "Différence entre $\\varnothing$ et $\\{\\varnothing\\}$ ?",
        "back": "$\\varnothing$ a 0 élément ; $\\{\\varnothing\\}$ en a 1."
      },
      {
        "key": "018",
        "type": "flashcard",
        "front": "Qu'est-ce que le produit cartésien $A\\times B$ ?",
        "back": "L'ensemble des couples ordonnés $(a,b)$ avec $a\\in A$ et $b\\in B$."
      },
      {
        "key": "019",
        "type": "flashcard",
        "front": "Cardinal d'un produit cartésien fini ?",
        "back": "$|A\\times B|=|A|\\,|B|$."
      },
      {
        "key": "020",
        "type": "flashcard",
        "front": "Définir une partition d'un ensemble $E$.",
        "back": "Une famille de parties non vides, deux à deux disjointes, dont la réunion est $E$."
      },
      {
        "key": "021",
        "type": "flashcard",
        "front": "Quelle est la formule de $|A\\cup B|$ pour deux ensembles finis ?",
        "back": "$|A\\cup B|=|A|+|B|-|A\\cap B|$."
      },
      {
        "key": "022",
        "type": "flashcard",
        "front": "Que signifie $f:A\\to B$ ?",
        "back": "À chaque $a\\in A$, $f$ associe un unique élément $f(a)\\in B$."
      },
      {
        "key": "023",
        "type": "flashcard",
        "front": "Différence entre ensemble de départ et ensemble d'arrivée ?",
        "back": "Dans $f:A\\to B$, $A$ est le domaine de départ, $B$ le codomaine (arrivée)."
      },
      {
        "key": "024",
        "type": "flashcard",
        "front": "Qu'est-ce que l'image d'un sous-ensemble $X\\subseteq A$ par $f$ ?",
        "back": "$f(X)=\\{f(x)\\mid x\\in X\\}\\subseteq B$."
      },
      {
        "key": "025",
        "type": "flashcard",
        "front": "Qu'est-ce que l'image réciproque $f^{-1}(Y)$ d'une partie $Y\\subseteq B$ ?",
        "back": "$\\{x\\in A\\mid f(x)\\in Y\\}$ ; toujours définie, même si $f$ n'est pas bijective."
      },
      {
        "key": "026",
        "type": "flashcard",
        "front": "Définir l'injectivité de $f:A\\to B$.",
        "back": "$\\forall x,y\\in A,\\ f(x)=f(y)\\Rightarrow x=y$."
      },
      {
        "key": "027",
        "type": "flashcard",
        "front": "Définir la surjectivité de $f:A\\to B$.",
        "back": "$\\forall b\\in B,\\exists a\\in A,\\ f(a)=b$."
      },
      {
        "key": "028",
        "type": "flashcard",
        "front": "Définir la bijectivité de $f:A\\to B$.",
        "back": "Tout $b\\in B$ a un unique antécédent dans $A$ ; injective et surjective."
      },
      {
        "key": "029",
        "type": "flashcard",
        "front": "Quand l'application réciproque $f^{-1}:B\\to A$ existe-t-elle ?",
        "back": "Si et seulement si $f$ est bijective."
      },
      {
        "key": "030",
        "type": "flashcard",
        "front": "Image directe : $f(X\\cup Y)$ ?",
        "back": "$f(X\\cup Y)=f(X)\\cup f(Y)$ pour toute application."
      },
      {
        "key": "031",
        "type": "flashcard",
        "front": "Image directe : $f(X\\cap Y)$ ?",
        "back": "Toujours $f(X\\cap Y)\\subseteq f(X)\\cap f(Y)$ ; égalité si $f$ injective."
      },
      {
        "key": "032",
        "type": "flashcard",
        "front": "Image réciproque d'une réunion ?",
        "back": "$f^{-1}(U\\cup V)=f^{-1}(U)\\cup f^{-1}(V)$."
      },
      {
        "key": "033",
        "type": "flashcard",
        "front": "Image réciproque d'une intersection ?",
        "back": "$f^{-1}(U\\cap V)=f^{-1}(U)\\cap f^{-1}(V)$."
      },
      {
        "key": "034",
        "type": "flashcard",
        "front": "Image réciproque d'un complémentaire ?",
        "back": "$f^{-1}(B\\setminus U)=A\\setminus f^{-1}(U)$ pour $f:A\\to B$."
      },
      {
        "key": "035",
        "type": "flashcard",
        "front": "Que vaut $f^{-1}(f(X))$ en général ?",
        "back": "$X\\subseteq f^{-1}(f(X))$ ; égalité pour tout $X$ si $f$ injective."
      },
      {
        "key": "036",
        "type": "flashcard",
        "front": "Que vaut $f(f^{-1}(Y))$ en général ?",
        "back": "$f(f^{-1}(Y))=Y\\cap f(A)$ ; égalité pour tout $Y$ si $f$ surjective."
      },
      {
        "key": "037",
        "type": "flashcard",
        "front": "Composition : domaine de $g\\circ f$ ?",
        "back": "Si $f:A\\to B$ et $g:B\\to C$, alors $g\\circ f:A\\to C$ et $(g\\circ f)(x)=g(f(x))$."
      },
      {
        "key": "038",
        "type": "flashcard",
        "front": "Si $f$ et $g$ sont injectives, $g\\circ f$ l'est-elle ?",
        "back": "Oui. Même conclusion pour la surjectivité et la bijectivité si les deux le sont."
      },
      {
        "key": "039",
        "type": "flashcard",
        "front": "Qu'est-ce que l'identité $\\mathrm{id}_A$ ?",
        "back": "$\\mathrm{id}_A:A\\to A$, $x\\mapsto x$."
      },
      {
        "key": "040",
        "type": "flashcard",
        "front": "Comment caractériser une bijection par une réciproque ?",
        "back": "Il existe $g:B\\to A$ tel que $g\\circ f=\\mathrm{id}_A$ et $f\\circ g=\\mathrm{id}_B$."
      },
      {
        "key": "041",
        "type": "flashcard",
        "front": "Qu'est-ce qu'une relation binaire sur $E$ ?",
        "back": "Un sous-ensemble de $E\\times E$, noté par exemple $x\\mathcal R y$."
      },
      {
        "key": "042",
        "type": "flashcard",
        "front": "Définir réflexivité, symétrie et transitivité.",
        "back": "Réflexive : $xRx$. Symétrique : $xRy\\Rightarrow yRx$. Transitive : $xRy\\land yRz\\Rightarrow xRz$."
      },
      {
        "key": "043",
        "type": "flashcard",
        "front": "Définir antisymétrie.",
        "back": "$xRy$ et $yRx$ impliquent $x=y$."
      },
      {
        "key": "044",
        "type": "flashcard",
        "front": "Définir une relation d'équivalence.",
        "back": "Une relation réflexive, symétrique et transitive."
      },
      {
        "key": "045",
        "type": "flashcard",
        "front": "Définir une relation d'ordre (large).",
        "back": "Une relation réflexive, antisymétrique et transitive."
      },
      {
        "key": "046",
        "type": "flashcard",
        "front": "Quelle différence entre ordre total et partiel ?",
        "back": "Ordre total : deux éléments quelconques sont comparables. Ordre partiel : ce n'est pas exigé."
      },
      {
        "key": "047",
        "type": "flashcard",
        "front": "Qu'est-ce qu'une classe d'équivalence de $x$ ?",
        "back": "$[x]=\\{y\\in E\\mid y\\sim x\\}$ ; les classes forment une partition de $E$."
      },
      {
        "key": "048",
        "type": "flashcard",
        "front": "Quelle différence entre minimum et élément minimal dans un ordre ?",
        "back": "Un minimum est $\\le$ à tous ; un élément minimal n'a aucun élément strictement plus petit."
      },
      {
        "key": "049",
        "type": "problem",
        "front": "Montre que $f(x)=x^2$ sur $\\mathbb R$ n'est pas injective.",
        "back": "$f(1)=f(-1)=1$ alors que $1\\ne-1$.",
        "steps": [
          "Chercher deux réels distincts ayant le même carré."
        ]
      },
      {
        "key": "050",
        "type": "problem",
        "front": "Quel est l'ensemble image de $f:x\\mapsto x^2$ sur $\\mathbb R$ ?",
        "back": "$f(\\mathbb R)=[0,+\\infty[$.",
        "steps": [
          "Un carré est toujours positif ou nul.",
          "Tout réel $y\\ge0$ est l'image de $\\sqrt y$."
        ]
      },
      {
        "key": "051",
        "type": "problem",
        "front": "Soient $A=\\{1,2,3\\}$ et $B=\\{3,4\\}$. Calculer $A\\triangle B$.",
        "back": "$\\{1,2,4\\}$.",
        "steps": [
          "Calculer les éléments présents dans exactement un des ensembles."
        ]
      },
      {
        "key": "052",
        "type": "problem",
        "front": "Démontrer $A\\setminus(B\\cup C)=(A\\setminus B)\\cap(A\\setminus C)$.",
        "back": "Un $x$ appartient au premier ssi $x\\in A$, $x\\notin B$ et $x\\notin C$.",
        "steps": [
          "Raisonner élément par élément.",
          "Nier l'appartenance à $B\\cup C$ (De Morgan)."
        ]
      },
      {
        "key": "053",
        "type": "problem",
        "front": "Relation sur $\\mathbb Z$ : $a\\sim b\\iff 3\\mid(a-b)$. Quel type ?",
        "back": "Une relation d'équivalence (congruence modulo $3$).",
        "steps": [
          "Réflexivité : $3\\mid(a-a)$.",
          "Symétrie : si $3\\mid(a-b)$ alors $3\\mid(b-a)$.",
          "Transitivité via $(a-c)=(a-b)+(b-c)$."
        ]
      },
      {
        "key": "054",
        "type": "flashcard",
        "front": "Si $A\\subseteq B$, que deviennent $A\\cup B$ et $A\\cap B$ ?",
        "back": "$A\\cup B=B$ et $A\\cap B=A$."
      },
      {
        "key": "055",
        "type": "flashcard",
        "front": "Un ensemble fini $A$ a $m$ éléments et $B$ en a $n$. Combien d'applications $A\\to B$ ?",
        "back": "$n^m$ (avec $0^0=1$ pour l'application vide, selon convention)."
      },
      {
        "key": "056",
        "type": "flashcard",
        "front": "Combien d'injections d'un ensemble de $m$ éléments vers un ensemble de $n$ ($m\\le n$) ?",
        "back": "$\\frac{n!}{(n-m)!}$."
      }
    ]
  },
  {
    "key": "mpsi-calcul-algebrique-v1",
    "deck": {
      "id": "loop-mpsi-calcul-algebrique-v1",
      "name": "03 · Sommes, produits, binôme",
      "subject": "Mathématiques · MPSI"
    },
    "cards": [
      {
        "key": "001",
        "type": "flashcard",
        "front": "Que représente $\\sum_{k=p}^n a_k$ ?",
        "back": "$a_p+a_{p+1}+\\cdots+a_n$ si $p\\le n$."
      },
      {
        "key": "002",
        "type": "flashcard",
        "front": "Que représente $\\prod_{k=p}^n a_k$ ?",
        "back": "$a_p a_{p+1}\\cdots a_n$ si $p\\le n$."
      },
      {
        "key": "003",
        "type": "flashcard",
        "front": "Quelles sont les conventions pour une somme et un produit vides ?",
        "back": "$\\sum_{k\\in\\varnothing}a_k=0$ et $\\prod_{k\\in\\varnothing}a_k=1$."
      },
      {
        "key": "004",
        "type": "flashcard",
        "front": "Linéarité d'une somme finie ?",
        "back": "$\\sum(\\lambda a_k+\\mu b_k)=\\lambda\\sum a_k+\\mu\\sum b_k$."
      },
      {
        "key": "005",
        "type": "flashcard",
        "front": "Peut-on distribuer un produit sur une somme terme à terme ?",
        "back": "En général non : $\\prod(a_k+b_k)\\ne\\prod a_k+\\prod b_k$."
      },
      {
        "key": "006",
        "type": "flashcard",
        "front": "Factoriser $\\prod_{k=1}^n(a_k b_k)$.",
        "back": "$\\left(\\prod_{k=1}^n a_k\\right)\\left(\\prod_{k=1}^n b_k\\right)$."
      },
      {
        "key": "007",
        "type": "flashcard",
        "front": "Comment décaler l'indice dans $\\sum_{k=0}^n a_{k+1}$ ?",
        "back": "$\\sum_{j=1}^{n+1}a_j$ avec $j=k+1$."
      },
      {
        "key": "008",
        "type": "flashcard",
        "front": "Pourquoi les bornes doivent-elles changer lors d'une réindexation ?",
        "back": "Pour que la nouvelle somme parcoure exactement les anciens termes, ni plus ni moins."
      },
      {
        "key": "009",
        "type": "flashcard",
        "front": "Quelle est la formule de la somme d'une suite arithmétique ?",
        "back": "$\\sum_{k=0}^{n-1}(a+kr)=\\frac n2(2a+(n-1)r)$."
      },
      {
        "key": "010",
        "type": "flashcard",
        "front": "Combien vaut $\\sum_{k=1}^n k$ ?",
        "back": "$\\frac{n(n+1)}{2}$."
      },
      {
        "key": "011",
        "type": "flashcard",
        "front": "Combien vaut $\\sum_{k=1}^n k^2$ ?",
        "back": "$\\frac{n(n+1)(2n+1)}6$."
      },
      {
        "key": "012",
        "type": "flashcard",
        "front": "Combien vaut $\\sum_{k=1}^n k^3$ ?",
        "back": "$\\left(\\frac{n(n+1)}2\\right)^2$."
      },
      {
        "key": "013",
        "type": "flashcard",
        "front": "Écrire la somme géométrique $\\sum_{k=0}^n q^k$ pour $q\\ne1$.",
        "back": "$\\frac{1-q^{n+1}}{1-q}$."
      },
      {
        "key": "014",
        "type": "flashcard",
        "front": "Et si $q=1$, quelle est la somme $\\sum_{k=0}^n q^k$ ?",
        "back": "$n+1$."
      },
      {
        "key": "015",
        "type": "flashcard",
        "front": "Quelle est la somme $\\sum_{k=p}^n q^k$ pour $q\\ne1$ ?",
        "back": "$q^p\\frac{1-q^{n-p+1}}{1-q}$."
      },
      {
        "key": "016",
        "type": "flashcard",
        "front": "Quelle est l'identité télescopique pour les sommes ?",
        "back": "$\\sum_{k=p}^n(u_{k+1}-u_k)=u_{n+1}-u_p$."
      },
      {
        "key": "017",
        "type": "flashcard",
        "front": "Quelle est l'identité télescopique pour les produits ?",
        "back": "$\\prod_{k=p}^n\\frac{u_{k+1}}{u_k}=\\frac{u_{n+1}}{u_p}$ si chaque dénominateur est non nul."
      },
      {
        "key": "018",
        "type": "flashcard",
        "front": "Décomposer $\\frac1{k(k+1)}$ en éléments simples.",
        "back": "$\\frac1k-\\frac1{k+1}$ pour $k\\ge1$."
      },
      {
        "key": "019",
        "type": "problem",
        "front": "Que vaut $\\sum_{k=1}^n\\frac1{k(k+1)}$ ?",
        "back": "$1-\\frac1{n+1}=\\frac n{n+1}$.",
        "steps": [
          "Écrire chaque terme comme $\\frac1k-\\frac1{k+1}$.",
          "Sommer et éliminer les termes intermédiaires."
        ]
      },
      {
        "key": "020",
        "type": "flashcard",
        "front": "Que vaut $\\sum_{k=0}^n(-1)^k$ ?",
        "back": "$\\frac{1+(-1)^n}{2}$ : $1$ si $n$ pair, $0$ si $n$ impair."
      },
      {
        "key": "021",
        "type": "flashcard",
        "front": "Quel lien entre $\\sum_{k=1}^n k(k+1)$ et les sommes usuelles ?",
        "back": "$\\sum k(k+1)=\\sum k^2+\\sum k$."
      },
      {
        "key": "022",
        "type": "flashcard",
        "front": "Définir la factorielle $n!$.",
        "back": "$n!=1\\cdot2\\cdots n$ pour $n\\ge1$ et $0!=1$."
      },
      {
        "key": "023",
        "type": "flashcard",
        "front": "Relation de récurrence de la factorielle ?",
        "back": "$(n+1)!=(n+1)n!$ pour $n\\ge0$."
      },
      {
        "key": "024",
        "type": "flashcard",
        "front": "Calculer $\\prod_{k=1}^n k$.",
        "back": "$n!$."
      },
      {
        "key": "025",
        "type": "flashcard",
        "front": "Calculer $\\prod_{k=1}^n(k+1)$.",
        "back": "$(n+1)!$ (pour $n\\ge1$)."
      },
      {
        "key": "026",
        "type": "problem",
        "front": "Produit télescopique : $\\prod_{k=1}^n\\frac{k+1}{k}$ ?",
        "back": "$n+1$.",
        "steps": [
          "Faire apparaître $\\frac21\\times\\frac32\\times\\cdots\\times\\frac{n+1}{n}$.",
          "Simplifier tous les facteurs intermédiaires."
        ]
      },
      {
        "key": "027",
        "type": "flashcard",
        "front": "Définition de $\\binom nk$ pour $0\\le k\\le n$.",
        "back": "$\\binom nk=\\frac{n!}{k!(n-k)!}$."
      },
      {
        "key": "028",
        "type": "flashcard",
        "front": "Interprétation combinatoire de $\\binom nk$ ?",
        "back": "Nombre de sous-ensembles de $k$ éléments choisis parmi $n$ éléments distincts."
      },
      {
        "key": "029",
        "type": "flashcard",
        "front": "Symétrie des coefficients binomiaux ?",
        "back": "$\\binom nk=\\binom n{n-k}$."
      },
      {
        "key": "030",
        "type": "flashcard",
        "front": "Relation de Pascal ?",
        "back": "$\\binom nk=\\binom{n-1}{k-1}+\\binom{n-1}k$ pour $1\\le k\\le n-1$."
      },
      {
        "key": "031",
        "type": "flashcard",
        "front": "Que valent $\\binom n0$ et $\\binom nn$ ?",
        "back": "Tous deux valent $1$."
      },
      {
        "key": "032",
        "type": "flashcard",
        "front": "Que valent $\\binom n1$ et $\\binom n{n-1}$ pour $n\\ge1$ ?",
        "back": "Tous deux valent $n$."
      },
      {
        "key": "033",
        "type": "flashcard",
        "front": "Rapport de deux coefficients binomiaux voisins ?",
        "back": "$\\frac{\\binom n{k+1}}{\\binom nk}=\\frac{n-k}{k+1}$ pour $0\\le k<n$."
      },
      {
        "key": "034",
        "type": "flashcard",
        "front": "Formule du binôme de Newton ?",
        "back": "$(a+b)^n=\\sum_{k=0}^n\\binom nk a^{n-k}b^k$ pour $n\\in\\mathbb N$."
      },
      {
        "key": "035",
        "type": "flashcard",
        "front": "Développer $(a-b)^n$ avec Newton.",
        "back": "$\\sum_{k=0}^n(-1)^k\\binom nk a^{n-k}b^k$."
      },
      {
        "key": "036",
        "type": "flashcard",
        "front": "Somme des coefficients binomiaux $\\sum_{k=0}^n\\binom nk$ ?",
        "back": "$2^n$."
      },
      {
        "key": "037",
        "type": "flashcard",
        "front": "Somme alternée $\\sum_{k=0}^n(-1)^k\\binom nk$ pour $n\\ge1$ ?",
        "back": "$0$, en appliquant $(1-1)^n$."
      },
      {
        "key": "038",
        "type": "flashcard",
        "front": "Somme des coefficients binomiaux de rang pair pour $n\\ge1$ ?",
        "back": "$\\sum_{k\\text{ pair}}\\binom nk=2^{n-1}$."
      },
      {
        "key": "039",
        "type": "flashcard",
        "front": "Somme des coefficients binomiaux de rang impair pour $n\\ge1$ ?",
        "back": "$\\sum_{k\\text{ impair}}\\binom nk=2^{n-1}$."
      },
      {
        "key": "040",
        "type": "flashcard",
        "front": "Somme pondérée $\\sum_{k=0}^n k\\binom nk$ ($n\\ge1$) ?",
        "back": "$n2^{n-1}$."
      },
      {
        "key": "041",
        "type": "flashcard",
        "front": "Identité $k\\binom nk$ ?",
        "back": "$k\\binom nk=n\\binom{n-1}{k-1}$ pour $1\\le k\\le n$."
      },
      {
        "key": "042",
        "type": "flashcard",
        "front": "Vandermonde : calculer $\\sum_k\\binom rk\\binom s{n-k}$.",
        "back": "$\\binom{r+s}n$ avec $\\binom ab=0$ si $b\\notin[0,a]$."
      },
      {
        "key": "043",
        "type": "flashcard",
        "front": "Somme double rectangulaire : échanger l'ordre de sommation ?",
        "back": "$\\sum_{i=1}^m\\sum_{j=1}^n a_{ij}=\\sum_{j=1}^n\\sum_{i=1}^m a_{ij}$ (sommes finies)."
      },
      {
        "key": "044",
        "type": "flashcard",
        "front": "Somme double triangulaire : décrire $1\\le j\\le i\\le n$ dans l'autre ordre ?",
        "back": "$\\sum_{i=1}^n\\sum_{j=1}^i a_{ij}=\\sum_{j=1}^n\\sum_{i=j}^n a_{ij}$."
      },
      {
        "key": "045",
        "type": "flashcard",
        "front": "Que vaut $\\sum_{1\\le i<j\\le n}1$ ?",
        "back": "$\\binom n2=\\frac{n(n-1)}2$."
      },
      {
        "key": "046",
        "type": "flashcard",
        "front": "Développer $\\left(\\sum_{i=1}^n a_i\\right)\\left(\\sum_{j=1}^m b_j\\right)$.",
        "back": "$\\sum_{i=1}^n\\sum_{j=1}^m a_i b_j$."
      },
      {
        "key": "047",
        "type": "flashcard",
        "front": "Formule du carré d'une somme finie ?",
        "back": "$\\left(\\sum_i a_i\\right)^2=\\sum_i a_i^2+2\\sum_{i<j}a_i a_j$."
      },
      {
        "key": "048",
        "type": "flashcard",
        "front": "Quelle est l'identité $a^n-b^n$ ?",
        "back": "$a^n-b^n=(a-b)\\sum_{k=0}^{n-1}a^{n-1-k}b^k$, $n\\ge1$."
      },
      {
        "key": "049",
        "type": "flashcard",
        "front": "Factorisation de $a^3+b^3$ ?",
        "back": "$(a+b)(a^2-ab+b^2)$."
      },
      {
        "key": "050",
        "type": "problem",
        "front": "Calculer $\\sum_{k=0}^4 2^k$.",
        "back": "$1+2+4+8+16=31$.",
        "steps": [          "Identifier une suite géométrique de raison $2$.",
          "Appliquer $\\frac{2^5-1}{2-1}$."
        ]
      },
      {
        "key": "051",
        "type": "problem",
        "front": "Calculer $\\sum_{k=1}^n(2k-1)$.",
        "back": "$n^2$.",
        "steps": [
          "Écrire $\\sum(2k-1)=2\\sum k-n$.",
          "Remplacer $\\sum k$ par $\\frac{n(n+1)}2$."
        ]
      },
      {
        "key": "052",
        "type": "problem",
        "front": "Calculer $\\sum_{k=1}^n (3k^2+2k)$.",
        "back": "$\\frac{n(n+1)(2n+3)}2$.",
        "steps": [
          "Séparer $3\\sum k^2+2\\sum k$.",
          "Utiliser les formules usuelles puis factoriser."
        ]
      },
      {
        "key": "053",
        "type": "problem",
        "front": "Calculer $\\binom{8}{3}$.",
        "back": "$56$.",
        "steps": [
          "Calculer $\\frac{8\\cdot7\\cdot6}{3\\cdot2\\cdot1}$."
        ]
      },
      {
        "key": "054",
        "type": "problem",
        "front": "Déterminer le coefficient de $x^3$ dans $(1+2x)^5$.",
        "back": "$\\binom53\\,2^3=80$.",
        "steps": [
          "Sélectionner $k=3$ dans le binôme de Newton.",
          "Évaluer $\\binom53\\cdot 2^3$."
        ]
      },
      {
        "key": "055",
        "type": "problem",
        "front": "Prouver $\\sum_{k=0}^n\\binom nk=2^n$.",
        "back": "Développer $(1+1)^n$ par la formule du binôme.",
        "steps": [
          "Remplacer $a=b=1$ dans Newton."
        ]
      },
      {
        "key": "056",
        "type": "problem",
        "front": "Pourquoi $\\sum_{k=0}^n k\\binom nk=n2^{n-1}$ ?",
        "back": "Dériver $(1+x)^n=\\sum_k\\binom nkx^k$, puis prendre $x=1$.",
        "steps": [
          "Dériver les deux membres par rapport à $x$.",
          "Multiplier par $x$ et poser $x=1$."
        ]
      },
      {
        "key": "057",
        "type": "problem",
        "front": "Calculer $\\sum_{1\\le i<j\\le n}(a_i+a_j)$.",
        "back": "$(n-1)\\sum_{i=1}^n a_i$.",
        "steps": [
          "Chaque $a_i$ figure une fois avec chacun des $n-1$ autres indices."
        ]
      },
      {
        "key": "058",
        "type": "problem",
        "front": "Que vaut $\\prod_{k=1}^n(1+\\frac1k)$ ?",
        "back": "$n+1$.",
        "steps": [
          "Réécrire $1+\\frac1k=\\frac{k+1}{k}$.",
          "Le produit est télescopique."
        ]
      },
      {
        "key": "059",
        "type": "flashcard",
        "front": "Quel est le principe du pivot de Gauss ?",
        "back": "Éliminer successivement les inconnues par opérations élémentaires sur les lignes, puis remonter le système."
      },
      {
        "key": "060",
        "type": "flashcard",
        "front": "Quelles opérations sur les lignes conservent les solutions d'un système ?",
        "back": "Échanger deux lignes, multiplier une ligne par un scalaire non nul, ou lui ajouter un multiple d'une autre."
      },
      {
        "key": "061",
        "type": "problem",
        "front": "Résoudre $\\begin{cases}x+y=5\\\\x-y=1\\end{cases}$.",
        "back": "$x=3$ et $y=2$.",
        "steps": [
          "Ajouter les deux équations : $2x=6$.",
          "Substituer $x=3$ dans $x+y=5$."
        ]
      },
      {
        "key": "062",
        "type": "problem",
        "front": "Somme télescopique : $\\sum_{k=1}^n(\\sqrt{k+1}-\\sqrt k)$ ?",
        "back": "$\\sqrt{n+1}-1$.",
        "steps": [
          "Les termes intermédiaires s'annulent deux à deux."
        ]
      },
      {
        "key": "063",
        "type": "flashcard",
        "front": "Quelle différence entre $\\sum_{i=1}^n\\sum_{j=1}^i$ et $\\sum_{i,j=1}^n$ ?",
        "back": "La première somme parcourt un triangle d'indices, la seconde un carré d'indices."
      },
      {
        "key": "064",
        "type": "flashcard",
        "front": "Combien vaut $\\sum_{k=0}^n\\binom nk x^k$ ?",
        "back": "$(1+x)^n$."
      }
    ]
  },
  {
    "key": "mpsi-trigonometrie-v1",
    "deck": {
      "id": "loop-mpsi-trigonometrie-v1",
      "name": "04 · Trigonométrie",
      "subject": "Mathématiques · MPSI"
    },
    "cards": [
      {
        "key": "001",
        "type": "flashcard",
        "front": "Comment définir $\\cos x$ et $\\sin x$ sur le cercle unité ?",
        "back": "Le point du cercle d'angle orienté $x$ a pour coordonnées $(\\cos x,\\sin x)$."
      },
      {
        "key": "002",
        "type": "flashcard",
        "front": "Quelle est l'identité fondamentale de trigonométrie ?",
        "back": "$\\cos^2x+\\sin^2x=1$ pour tout réel $x$."
      },
      {
        "key": "003",
        "type": "flashcard",
        "front": "Périodes de $\\sin$, $\\cos$ et $\\tan$ ?",
        "back": "$\\sin$ et $\\cos$ ont période $2\\pi$ ; $\\tan$ a période $\\pi$ sur son domaine."
      },
      {
        "key": "004",
        "type": "flashcard",
        "front": "Parité des fonctions trigonométriques ?",
        "back": "$\\cos(-x)=\\cos x$ ; $\\sin(-x)=-\\sin x$ ; $\\tan(-x)=-\\tan x$."
      },
      {
        "key": "005",
        "type": "flashcard",
        "front": "Domaine de définition de $\\tan x$ ?",
        "back": "$\\mathbb R\\setminus\\{\\frac\\pi2+k\\pi\\mid k\\in\\mathbb Z\\}$."
      },
      {
        "key": "006",
        "type": "flashcard",
        "front": "Exprimer $\\tan x$ à l'aide de $\\sin$ et $\\cos$.",
        "back": "$\\tan x=\\frac{\\sin x}{\\cos x}$ lorsque $\\cos x\\ne0$."
      },
      {
        "key": "007",
        "type": "flashcard",
        "front": "Donner $\\sin(x+y)$.",
        "back": "$\\sin x\\cos y+\\cos x\\sin y$."
      },
      {
        "key": "008",
        "type": "flashcard",
        "front": "Donner $\\cos(x+y)$.",
        "back": "$\\cos x\\cos y-\\sin x\\sin y$."
      },
      {
        "key": "009",
        "type": "flashcard",
        "front": "Donner $\\sin(x-y)$.",
        "back": "$\\sin x\\cos y-\\cos x\\sin y$."
      },
      {
        "key": "010",
        "type": "flashcard",
        "front": "Donner $\\cos(x-y)$.",
        "back": "$\\cos x\\cos y+\\sin x\\sin y$."
      },
      {
        "key": "011",
        "type": "flashcard",
        "front": "Donner $\\tan(x+y)$ si les termes sont définis.",
        "back": "$\\tan(x+y)=\\frac{\\tan x+\\tan y}{1-\\tan x\\tan y}$ si le dénominateur est non nul."
      },
      {
        "key": "012",
        "type": "flashcard",
        "front": "Exprimer $\\sin(2x)$.",
        "back": "$2\\sin x\\cos x$."
      },
      {
        "key": "013",
        "type": "flashcard",
        "front": "Exprimer $\\cos(2x)$ sous trois formes.",
        "back": "$\\cos^2x-\\sin^2x=2\\cos^2x-1=1-2\\sin^2x$."
      },
      {
        "key": "014",
        "type": "flashcard",
        "front": "Exprimer $\\tan(2x)$.",
        "back": "$\\frac{2\\tan x}{1-\\tan^2x}$ lorsque les deux côtés sont définis."
      },
      {
        "key": "015",
        "type": "flashcard",
        "front": "Formules de demi-angle pour $\\sin^2x$ et $\\cos^2x$ ?",
        "back": "$\\sin^2x=\\frac{1-\\cos(2x)}2$ et $\\cos^2x=\\frac{1+\\cos(2x)}2$."
      },
      {
        "key": "016",
        "type": "flashcard",
        "front": "Que vaut $\\sin(\\pi-x)$ ?",
        "back": "$\\sin x$."
      },
      {
        "key": "017",
        "type": "flashcard",
        "front": "Que vaut $\\cos(\\pi-x)$ ?",
        "back": "$-\\cos x$."
      },
      {
        "key": "018",
        "type": "flashcard",
        "front": "Que vaut $\\sin(\\frac\\pi2-x)$ ?",
        "back": "$\\cos x$."
      },
      {
        "key": "019",
        "type": "flashcard",
        "front": "Que vaut $\\cos(\\frac\\pi2-x)$ ?",
        "back": "$\\sin x$."
      },
      {
        "key": "020",
        "type": "flashcard",
        "front": "Que vaut $\\sin(x+\\pi)$ ?",
        "back": "$-\\sin x$."
      },
      {
        "key": "021",
        "type": "flashcard",
        "front": "Que vaut $\\cos(x+\\pi)$ ?",
        "back": "$-\\cos x$."
      },
      {
        "key": "022",
        "type": "flashcard",
        "front": "Quelles sont les valeurs de $\\sin\\frac\\pi6$ et $\\cos\\frac\\pi6$ ?",
        "back": "$\\sin\\frac\\pi6=\\frac12$ ; $\\cos\\frac\\pi6=\\frac{\\sqrt3}{2}$."
      },
      {
        "key": "023",
        "type": "flashcard",
        "front": "Quelles sont les valeurs de $\\sin\\frac\\pi4$ et $\\cos\\frac\\pi4$ ?",
        "back": "Toutes deux valent $\\frac{\\sqrt2}{2}$."
      },
      {
        "key": "024",
        "type": "flashcard",
        "front": "Quelles sont les valeurs de $\\sin\\frac\\pi3$ et $\\cos\\frac\\pi3$ ?",
        "back": "$\\sin\\frac\\pi3=\\frac{\\sqrt3}{2}$ ; $\\cos\\frac\\pi3=\\frac12$."
      },
      {
        "key": "025",
        "type": "flashcard",
        "front": "Quelles sont les valeurs de $\\tan\\frac\\pi6$, $\\tan\\frac\\pi4$, $\\tan\\frac\\pi3$ ?",
        "back": "$\\frac1{\\sqrt3}$, $1$, $\\sqrt3$ respectivement."
      },
      {
        "key": "026",
        "type": "flashcard",
        "front": "Résoudre $\\sin x=0$ dans $\\mathbb R$.",
        "back": "$x=k\\pi$, $k\\in\\mathbb Z$."
      },
      {
        "key": "027",
        "type": "flashcard",
        "front": "Résoudre $\\cos x=0$ dans $\\mathbb R$.",
        "back": "$x=\\frac\\pi2+k\\pi$, $k\\in\\mathbb Z$."
      },
      {
        "key": "028",
        "type": "flashcard",
        "front": "Résoudre $\\tan x=0$ dans $\\mathbb R$.",
        "back": "$x=k\\pi$, $k\\in\\mathbb Z$."
      },
      {
        "key": "029",
        "type": "flashcard",
        "front": "Résoudre $\\sin x=\\sin a$.",
        "back": "$x=a+2k\\pi$ ou $x=\\pi-a+2k\\pi$, $k\\in\\mathbb Z$."
      },
      {
        "key": "030",
        "type": "flashcard",
        "front": "Résoudre $\\cos x=\\cos a$.",
        "back": "$x=\\pm a+2k\\pi$, $k\\in\\mathbb Z$."
      },
      {
        "key": "031",
        "type": "flashcard",
        "front": "Résoudre $\\tan x=\\tan a$ si $\\tan a$ existe.",
        "back": "$x=a+k\\pi$, $k\\in\\mathbb Z$."
      },
      {
        "key": "032",
        "type": "flashcard",
        "front": "Condition pour résoudre $\\sin x=c$ avec $c\\in\\mathbb R$ ?",
        "back": "Il existe des solutions réelles si et seulement si $|c|\\le1$."
      },
      {
        "key": "033",
        "type": "flashcard",
        "front": "Condition pour résoudre $\\cos x=c$ avec $c\\in\\mathbb R$ ?",
        "back": "Il existe des solutions réelles si et seulement si $|c|\\le1$."
      },
      {
        "key": "034",
        "type": "flashcard",
        "front": "Transformer $\\cos p+\\cos q$ en produit.",
        "back": "$2\\cos\\frac{p+q}{2}\\cos\\frac{p-q}{2}$."
      },
      {
        "key": "035",
        "type": "flashcard",
        "front": "Transformer $\\cos p-\\cos q$ en produit.",
        "back": "$-2\\sin\\frac{p+q}{2}\\sin\\frac{p-q}{2}$."
      },
      {
        "key": "036",
        "type": "flashcard",
        "front": "Transformer $\\sin p+\\sin q$ en produit.",
        "back": "$2\\sin\\frac{p+q}{2}\\cos\\frac{p-q}{2}$."
      },
      {
        "key": "037",
        "type": "flashcard",
        "front": "Transformer $\\sin p-\\sin q$ en produit.",
        "back": "$2\\cos\\frac{p+q}{2}\\sin\\frac{p-q}{2}$."
      },
      {
        "key": "038",
        "type": "flashcard",
        "front": "Transformer $\\sin x\\cos y$ en somme.",
        "back": "$\\frac12[\\sin(x+y)+\\sin(x-y)]$."
      },
      {
        "key": "039",
        "type": "flashcard",
        "front": "Transformer $\\cos x\\cos y$ en somme.",
        "back": "$\\frac12[\\cos(x+y)+\\cos(x-y)]$."
      },
      {
        "key": "040",
        "type": "flashcard",
        "front": "Transformer $\\sin x\\sin y$ en somme.",
        "back": "$\\frac12[\\cos(x-y)-\\cos(x+y)]$."
      },
      {
        "key": "041",
        "type": "flashcard",
        "front": "Exprimer $\\sin(3x)$.",
        "back": "$3\\sin x-4\\sin^3 x$."
      },
      {
        "key": "042",
        "type": "flashcard",
        "front": "Exprimer $\\cos(3x)$.",
        "back": "$4\\cos^3 x-3\\cos x$."
      },
      {
        "key": "043",
        "type": "flashcard",
        "front": "Que vaut $\\sin^3x$ en somme de sinus ?",
        "back": "$\\frac{3\\sin x-\\sin(3x)}4$."
      },
      {
        "key": "044",
        "type": "flashcard",
        "front": "Que vaut $\\cos^3x$ en somme de cosinus ?",
        "back": "$\\frac{3\\cos x+\\cos(3x)}4$."
      },
      {
        "key": "045",
        "type": "flashcard",
        "front": "Définir $\\arcsin$ et son intervalle image.",
        "back": "Inverse de $\\sin$ restreinte à $[-\\frac\\pi2,\\frac\\pi2]$ ; valeurs dans cet intervalle."
      },
      {
        "key": "046",
        "type": "flashcard",
        "front": "Définir $\\arccos$ et son intervalle image.",
        "back": "Inverse de $\\cos$ restreinte à $[0,\\pi]$ ; valeurs dans cet intervalle."
      },
      {
        "key": "047",
        "type": "flashcard",
        "front": "Définir $\\arctan$ et son intervalle image.",
        "back": "Inverse de $\\tan$ restreinte à $]-\\frac\\pi2,\\frac\\pi2[$ ; valeurs dans cet intervalle."
      },
      {
        "key": "048",
        "type": "flashcard",
        "front": "Que vaut $\\arcsin(\\sin x)$ pour tout $x\\in\\mathbb R$ ?",
        "back": "Pas toujours $x$ : l'égalité exige $x\\in[-\\frac\\pi2,\\frac\\pi2]$."
      },
      {
        "key": "049",
        "type": "flashcard",
        "front": "Que vaut $\\cos(\\arccos t)$ pour $t\\in[-1,1]$ ?",
        "back": "$t$."
      },
      {
        "key": "050",
        "type": "flashcard",
        "front": "Que vaut $\\arctan(\\tan x)$ ?",
        "back": "$x$ seulement si $x\\in]-\\frac\\pi2,\\frac\\pi2[$ ; sinon réduction modulo $\\pi$."
      },
      {
        "key": "051",
        "type": "problem",
        "front": "Résoudre $2\\cos x-1=0$.",
        "back": "$x=\\pm\\frac\\pi3+2k\\pi$, $k\\in\\mathbb Z$.",
        "steps": [
          "Ramener à $\\cos x=\\frac12$.",
          "Repérer les deux angles sur le cercle trigonométrique."
        ]
      },
      {
        "key": "052",
        "type": "problem",
        "front": "Résoudre $\\sin(2x)=0$.",
        "back": "$x=\\frac{k\\pi}{2}$, $k\\in\\mathbb Z$.",
        "steps": [
          "$\\sin u=0\\iff u=k\\pi$.",
          "Poser $u=2x$ puis diviser par $2$."
        ]
      },
      {
        "key": "053",
        "type": "problem",
        "front": "Linéariser $\\sin^2x\\cos x$.",
        "back": "$\\sin^2x\\cos x=\\frac{\\cos x-\\cos(3x)}4$.",
        "steps": [
          "Réécrire $\\sin^2 x=\\frac{1-\\cos2x}{2}$."
        ]
      },
      {
        "key": "054",
        "type": "problem",
        "front": "Calculer $\\sin\\frac{5\\pi}{6}$ et $\\cos\\frac{5\\pi}{6}$.",
        "back": "$\\frac12$ et $-\\frac{\\sqrt3}{2}$.",
        "steps": [
          "$\\frac{5\\pi}{6}=\\pi-\\frac\\pi6$.",
          "Utiliser $\\sin(\\pi-x)=\\sin x$ et $\\cos(\\pi-x)=-\\cos x$."
        ]
      },
      {
        "key": "055",
        "type": "problem",
        "front": "Simplifier $\\cos(x+y)\\cos(x-y)+\\sin(x+y)\\sin(x-y)$.",
        "back": "$\\cos(2y)$.",
        "steps": [
          "Reconnaître $\\cos(A-B)$.",
          "Prendre $A=x+y$ et $B=x-y$ : $A-B=2y$."
        ]
      },
      {
        "key": "056",
        "type": "problem",
        "front": "Résoudre $\\sin x=\\cos x$.",
        "back": "$x=\\frac\\pi4+k\\pi$, $k\\in\\mathbb Z$.",
        "steps": [
          "$\\cos x=0$ ne donne aucune solution ici.",
          "Diviser par $\\cos x$ et résoudre $\\tan x=1$."
        ]
      },
      {
        "key": "057",
        "type": "flashcard",
        "front": "Pour $a,b\\in\\mathbb R$, comment écrire $a\\cos x+b\\sin x$ sous forme déphasée ?",
        "back": "$R\\cos(x-\\varphi)$ avec $R=\\sqrt{a^2+b^2}$ et $R\\cos\\varphi=a$, $R\\sin\\varphi=b$ (si $R>0$)."
      },
      {
        "key": "058",
        "type": "flashcard",
        "front": "Quelle est l'amplitude maximale de $a\\cos x+b\\sin x$ ?",
        "back": "$\\sqrt{a^2+b^2}$ ; le minimum est son opposé."
      },
      {
        "key": "059",
        "type": "problem",
        "front": "Résoudre $\\cos(2x)=\\cos x$.",
        "back": "$x=\\frac{2k\\pi}{3}$, $k\\in\\mathbb Z$.",
        "steps": [
          "$\\cos A=\\cos B\\iff A=\\pm B+2k\\pi$.",
          "Cas 1 : $2x=x+2k\\pi$ ; cas 2 : $2x=-x+2k\\pi$."
        ]
      },
      {
        "key": "060",
        "type": "flashcard",
        "front": "Quel est le signe de $\\sin x$ dans les quadrants I et II ?",
        "back": "Positif ou nul sur $[0,\\pi]$."
      },
      {
        "key": "061",
        "type": "flashcard",
        "front": "Quel est le signe de $\\cos x$ dans les quadrants II et III ?",
        "back": "Négatif ou nul sur $[\\frac\\pi2,\\frac{3\\pi}2]$."
      },
      {
        "key": "062",
        "type": "flashcard",
        "front": "Sur quel intervalle $\\cos$ est-elle strictement décroissante ?",
        "back": "Sur $[0,\\pi]$."
      },
      {
        "key": "063",
        "type": "flashcard",
        "front": "Sur quel intervalle $\\sin$ est-elle strictement croissante ?",
        "back": "Sur $[-\\frac\\pi2,\\frac\\pi2]$."
      },
      {
        "key": "064",
        "type": "flashcard",
        "front": "Comment interpréter le signe de $\\tan x$ ?",
        "back": "Il est celui de $\\sin x$ divisé par celui de $\\cos x$, là où $\\cos x\\ne0$."
      }
    ]
  }
];