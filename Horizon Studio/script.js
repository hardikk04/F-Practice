const loaderText = document.querySelectorAll(".loader-elem>h3");
const loaderDot = document.querySelectorAll(".dot");

const tl = gsap.timeline();

tl.to(
  loaderText[0],
  {
    y: -60,
  },
  "a"
);

tl.to(
  loaderText[1],
  {
    y: 60,
  },
  "a"
);

tl.to(
  loaderDot,
  {
    height: 0,
    width: 0,
  },
  "a"
);

tl.to(
  ".overlay-top",
  {
    top: "0",
    ease: "power2.in",
  },
  "b"
);
tl.to(
  ".overlay-bottom",
  {
    top: "0",
    ease: "power2.in",
  },
  "b"
);

tl.to(".loader", {
  opacity: 0,
  delay: 0.5,
  pointerEvents: "none",
});

tl.from(
  ".hero-text>h1",
  {
    y: 300,
    opacity: 0,
  },
  "c"
);

tl.from(
  ".text-dot",
  {
    height: 0,
    width: 0,
  },
  "c"
);

tl.from(
  ".secondary-text>h3",
  {
    y: 20,
    delay: 0.3,
  },
  "c"
);

tl.from(
  "nav h3,.nav-right",
  {
    y: 50,
    duration: 1.2,
  },
  "n"
);

tl.from(
  ".nav-line",
  {
    width: 0,
    duration: 1.2,
  },
  "n"
);

tl.to(
  ".img-overlay",
  {
    left: "-100%",
    duration: 1.2,
  },
  "n"
);
