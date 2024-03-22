const tl = gsap.timeline();
tl.to(".loader-overlay", {
  top: "0",
  duration: 0.6,
  ease: "power4.out",
});
tl.to(
  ".loader-overlay",
  {
    height: 0,
    duration: 0.4,
    delay: -0.2,
    ease: "power4.out",
  },
  "a"
);

tl.to(
  ".loader",
  {
    height: 0,
    duration: 0.4,
    delay: -0.2,
    ease: "power4.out",
  },
  "a"
);

tl.to(".page1-video", {
  clipPath: "polygon(0 100%, 100% 100%, 100% 0%, 0 0%)",
  delay: -0.25,
  duration: 0.4,
});

tl.from(".page1-text>h1", {
  opacity: 0,
  stagger: 0.4,
});

gsap.to(".page1-video", {
  height: "100vh",
  width: "100%",
  scrollTrigger: {
    scroller: "body",
    trigger: ".page1",
    start: "top 0",
    end: "top -100%",
    // markers: true,
    scrub: 1,
    pin: true,
  },
});
