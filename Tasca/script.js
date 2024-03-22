const h1 = document.querySelector(".text-elem>h3");
let clutter = "";
h1.textContent.split("").forEach((word) => {
  clutter += `<span class="inline-block">${word}</span>`;
});
h1.innerHTML = clutter;

const tl = gsap.timeline();
tl.from(
  ".text-elem>h3>span",
  {
    y: 80,
    stagger: {
      amount: 0.3,
    },
  },
  "a"
);

tl.from(
  ".loader>h1",
  {
    scale: 0.9,
    x: 60,
  },
  "a"
);

tl.to(
  ".loader",
  {
    top: "-100vh",
    ease: "power4.in",
    duration: 1,
  },
  "b"
);

tl.to(
  "img",
  {
    top: "0",
    ease: "power4.in",
    duration: 1,
    delay: 0.1,
  },
  "b"
);

tl.to(
  ".page1-part1",
  {
    width: "0",
    ease: "power4.in",
    delay: 0.5,
    duration: 1.4,
  },
  "c"
);

tl.to(
  "img",
  {
    left: "1%",
    top: "2%",
    height: "3vw",
    ease: "power4.in",
    delay: 0.5,
    duration: 1.4,
  },
  "c"
);

tl.from(".sameh1", {
  x: 500,
  //   ease: "power4.in",
  //   delay: -0.5,
});

tl.from(
  ".outer1",
  {
    left: "-10vw",
    opacity: 0,
  },
  "h"
);

tl.from(
  ".outer2",
  {
    right: "-12vw",
    opacity: 0,
  },
  "h"
);
