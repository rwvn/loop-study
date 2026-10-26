/* Built-in Loop cards. No personal data. */
window.LOOP_COMPLEX_PACK = {
  "key": "complex-properties-v1",
  "deck": {
    "id": "loop-built-in-complex-properties-v1",
    "name": "Complex numbers · Properties",
    "subject": "Mathematics"
  },
  "cards": [
    {
      "key": "imaginary-unit",
      "type": "flashcard",
      "front": "What is $i^2$?",
      "back": "$i^2=-1$."
    },
    {
      "key": "coordinates",
      "type": "flashcard",
      "front": "For $z=a+bi$, what are $\\operatorname{Re}(z)$ and $\\operatorname{Im}(z)$?",
      "back": "$\\operatorname{Re}(z)=a$, $\\operatorname{Im}(z)=b$."
    },
    {
      "key": "equality",
      "type": "flashcard",
      "front": "When are $a+bi$ and $c+di$ equal?",
      "back": "Exactly when $a=c$ and $b=d$."
    },
    {
      "key": "conjugate",
      "type": "flashcard",
      "front": "What is the complex conjugate of $z=a+bi$?",
      "back": "$\\overline z=a-bi$. Reflect across the real axis."
    },
    {
      "key": "real-imag-conjugate",
      "type": "flashcard",
      "front": "How do you find the real and imaginary parts using $\\overline z$?",
      "back": "$\\operatorname{Re}(z)=\\frac{z+\\overline z}{2}$ and $\\operatorname{Im}(z)=\\frac{z-\\overline z}{2i}$."
    },
    {
      "key": "conjugate-sum",
      "type": "flashcard",
      "front": "What is $\\overline{z+w}$?",
      "back": "$\\overline{z+w}=\\overline z+\\overline w$."
    },
    {
      "key": "conjugate-product",
      "type": "flashcard",
      "front": "What is $\\overline{zw}$?",
      "back": "$\\overline{zw}=\\overline z\\,\\overline w$."
    },
    {
      "key": "modulus",
      "type": "flashcard",
      "front": "What is the modulus of $z=a+bi$?",
      "back": "$|z|=\\sqrt{a^2+b^2}$. Geometrically: distance to the origin."
    },
    {
      "key": "z-conjugate",
      "type": "flashcard",
      "front": "Simplify $z\\overline z$.",
      "back": "$z\\overline z=|z|^2=a^2+b^2$ for $z=a+bi$."
    },
    {
      "key": "inverse",
      "type": "flashcard",
      "front": "How do you find $\\frac1z$ when $z\\ne 0$?",
      "back": "$\\frac1z=\\frac{\\overline z}{|z|^2}$."
    },
    {
      "key": "modulus-product",
      "type": "flashcard",
      "front": "How does modulus behave under multiplication?",
      "back": "$|zw|=|z|\\,|w|$."
    },
    {
      "key": "modulus-quotient",
      "type": "flashcard",
      "front": "How does modulus behave under division ($w\\ne0$)?",
      "back": "$\\left|\\frac zw\\right|=\\frac{|z|}{|w|}$."
    },
    {
      "key": "triangle-inequality",
      "type": "flashcard",
      "front": "State the triangle inequality for complex numbers.",
      "back": "$|z+w|\\le |z|+|w|$."
    },
    {
      "key": "reverse-triangle",
      "type": "flashcard",
      "front": "State the reverse triangle inequality.",
      "back": "$\\big||z|-|w|\\big|\\le |z-w|$."
    },
    {
      "key": "polar-form",
      "type": "flashcard",
      "front": "Write nonzero $z$ in polar/exponential form.",
      "back": "$z=r(\\cos\\theta+i\\sin\\theta)=re^{i\\theta}$, with $r=|z|>0$."
    },
    {
      "key": "argument-product",
      "type": "flashcard",
      "front": "What is $\\arg(zw)$ for nonzero $z,w$?",
      "back": "$\\arg(zw)=\\arg z+\\arg w\\pmod{2\\pi}$."
    },
    {
      "key": "demoivre",
      "type": "flashcard",
      "front": "State De Moivre's formula.",
      "back": "$(\\cos\\theta+i\\sin\\theta)^n=\\cos(n\\theta)+i\\sin(n\\theta)$ for integer $n$."
    },
    {
      "key": "roots",
      "type": "flashcard",
      "front": "What are the $n$th roots of $z=re^{i\\theta}\\ne 0$ ($n\\ge1$)?",
      "back": "$w_k=r^{1/n}e^{i(\\theta+2\\pi k)/n}$, $k=0,\\dots,n-1$."
    },
    {
      "key": "multiply-exercise",
      "type": "problem",
      "front": "Compute $(2+3i)(1-i)$ without a calculator.",
      "steps": [
        "Expand using distributivity: $2-2i+3i-3i^2$.",
        "Combine imaginary terms and use $i^2=-1$."
      ],
      "back": "$5+i$."
    },
    {
      "key": "inverse-exercise",
      "type": "problem",
      "front": "Write $\\frac{1}{3-4i}$ in the form $a+bi$.",
      "steps": [
        "Multiply numerator and denominator by $3+4i$.",
        "The denominator becomes $(3-4i)(3+4i)=3^2+4^2=25$."
      ],
      "back": "$\\frac3{25}+\\frac4{25}i$."
    }
  ]
};
