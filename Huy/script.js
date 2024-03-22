const navElem1 = document.querySelector(".nav-elem1");
const navElem1H3 = document.querySelectorAll(".nav-elem1>h3");

navElem1.addEventListener("mouseenter", () => {
  gsap.to(".nav-elem1>h3", {
    y: -35,
  });
});

navElem1.addEventListener("mouseleave", () => {
  gsap.to(".nav-elem1>h3", {
    y: 0,
  });
});

const navElem2 = document.querySelector(".nav-elem2");
navElem2.addEventListener("mouseenter", () => {
  gsap.to(".nav-elem2>h3", {
    y: -35,
  });
});

navElem1.addEventListener("mouseleave", () => {
  gsap.to(".nav-elem2>h3", {
    y: 0,
  });
});

const navElem3 = document.querySelector(".nav-elem3");
navElem3.addEventListener("mouseenter", () => {
  gsap.to(".nav-elem3>h3", {
    y: -35,
  });
});

navElem1.addEventListener("mouseleave", () => {
  gsap.to(".nav-elem3>h3", {
    y: 0,
  });
});

const navElem4 = document.querySelector(".nav-elem4");
navElem4.addEventListener("mouseenter", () => {
  gsap.to(".nav-elem4>h3", {
    y: -35,
  });
});

navElem1.addEventListener("mouseleave", () => {
  gsap.to(".nav-elem4>h3", {
    y: 0,
  });
});

const navElem5 = document.querySelector(".nav-elem5");
navElem5.addEventListener("mouseenter", () => {
  gsap.to(".nav-elem5>h3", {
    y: -35,
  });
});

navElem1.addEventListener("mouseleave", () => {
  gsap.to(".nav-elem5>h3", {
    y: 0,
  });
});

const tl = gsap.timeline();
tl.from(".l-elem>h1", {
  y: 80,
  delay: 0.3,
  stagger: 0.1,
});

tl.to(".loader", {
  top: "-100vh",
  ease: "power4.in",
  duration: 1,
  delay: 1,
});

tl.to(".l-elem>h1", {
  y: -10,
  opacity: 0,
  stagger: 0.1,
  delay: -0.5,
});

function clutterAnimation(element) {
  const htmlTag = document.querySelector(element);
  let clutter = "";
  htmlTag.textContent.split("").forEach((word) => {
    clutter += `<span class="inline-block">${word}</span>`;
  });
  htmlTag.innerHTML = clutter;
}

clutterAnimation(".first");
clutterAnimation(".second");

tl.from(
  ".first>span",
  {
    y: 250,
    stagger: {
      amount: 0.8,
    },
    delay: -0.5,
  },
  "a"
);

tl.from(
  ".second>span",
  {
    y: 250,
    stagger: {
      amount: 0.8,
    },
    delay: -0.5,
  },
  "a"
);

tl.from(
  "svg",
  {
    height: 0,
    width: 0,
    delay: -0.5,
    duration: 1.2,
  },
  "a"
);

tl.from(
  "nav",
  {
    opacity: 0,
    y: -50,
  },
  "b"
);

tl.from(
  ".page1-text>h3",
  {
    opacity: 0,
    y: 50,
  },
  "b"
);
