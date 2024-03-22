function lenisJs() {
  const lenis = new Lenis();

  lenis.on("scroll", (e) => {});

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 700);
  });

  gsap.ticker.lagSmoothing(0);
}
lenisJs();
const loaderTl = gsap.timeline();

loaderTl
  .to(".loader", {
    top: "-100vh",
    duration: 1,
    delay: 1,
  })
  .to(".page2-center", {
    clipPath: "polygon(0 100%, 100% 100%, 100% 0%, 0 0%)",
  })
  .from("nav", {
    opacity: 0,
    y: -100,
  });

const tl = gsap.timeline({
  scrollTrigger: {
    scroller: "body",
    trigger: ".page2-part2",
    start: "top 0",
    end: "top -200%",
    pin: true,
    scrub: 1,
    // markers: true,
  },
});

tl.to(
  ".page2-center",
  {
    width: "32%",
  },
  "a"
);

tl.to(
  ".page2-center>img",
  {
    scale: 1,
    height: "90vh",
  },
  "a"
);

tl.to(
  ".page2-left",
  {
    top: "-21%",
  },
  "b"
);

tl.to(
  ".page2-right",
  {
    top: "5%",
  },
  "b"
);
