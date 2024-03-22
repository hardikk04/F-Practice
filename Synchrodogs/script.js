function clutterAnimation(element) {
  const htmlTag = document.querySelector(element);
  let clutter = "";
  htmlTag.textContent.split("").forEach((word) => {
    clutter += `<span class="inline-block">${word}</span>`;
  });
  htmlTag.innerHTML = clutter;
}

clutterAnimation(".loader h1");
clutterAnimation(".main-text h1");

const loaderTl = gsap.timeline();
loaderTl.from(
  ".loader-imgs",
  {
    y: -1000,
    duration: 2,
  },
  "a"
);

loaderTl.from(".loader-imgs img", {
  opacity: 0,
  stagger: -0.1,
  delay: -0.5,
});

loaderTl.from(
  ".loader h1>span",
  {
    y: -250,
    stagger: {
      amount: 3,
      from: "center",
    },
  },
  "a"
);

loaderTl.from(
  ".loader p",
  {
    y: 50,
    delay: 1,
  },
  "a"
);

loaderTl.to(
  ".loader-imgs",
  {
    opacity: 0,
  },
  "b"
);

loaderTl.to(
  ".loader h1>span",
  {
    y: 300,
    stagger: {
      amount: 2,
      from: "center",
    },
  },
  "b"
);

loaderTl.to(
  ".loader p",
  {
    opacity: 0,
  },
  "b"
);

loaderTl.to(".loader", {
  opacity: 0,
  ease: "power3.in",
  delay: -1,
});

loaderTl.from(
  ".main-elem1",
  {
    top: "60vh",
    duration: 1,
    // delay: -1,
  },
  "c"
);

loaderTl.from(
  ".main-elem2",
  {
    top: "60vh",
    duration: 1,
    delay: 0.1,
  },
  "c"
);

loaderTl.from(
  ".nav-elem",
  {
    y: -50,
    stagger: 0.1,
  },
  "c"
);

loaderTl.from(
  ".same",
  {
    color: "#c8c8c830",
  },
  "c"
);

loaderTl.to(
  ".main-overlay",
  {
    opacity: 0,
    duration: 1,
  },
  "j"
);

loaderTl.from(
  ".main-text h1>span",
  {
    y: -100,
    stagger: {
      amount: 1,
    },
  },
  "j"
);
