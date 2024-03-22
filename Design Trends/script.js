function loco() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}

loco();

const loaderTl = gsap.timeline();

loaderTl.from(
  ".elem-left h1",
  {
    opacity: 0,
    stagger: 0.15,
  },
  "l"
);

loaderTl.from(
  ".elem-right h1",
  {
    opacity: 0,
    stagger: -0.15,
  },
  "l"
);

loaderTl.to(
  ".elem-left",
  {
    left: "30%",
    delay: 0.5,
  },
  "ll"
);

loaderTl.to(
  ".elem-right",
  {
    right: "28%",
    delay: 0.5,
  },
  "ll"
);

loaderTl.to(".loader", {
  scale: 4,
  delay: 0.5,
  opacity: 0,
});

loaderTl.from(
  ".first-text",
  {
    y: 300,
  },
  "tt"
);

loaderTl.from(
  ".second-text",
  {
    y: -300,
  },
  "tt"
);

loaderTl.from("nav", {
  y: -60,
});

loaderTl.from(".third-text", {
  y: 100,
});

const tl = gsap.timeline({
  scrollTrigger: {
    scroller: ".main",
    trigger: ".page1",
    start: "top 0",
    end: "top -200%",
    // markers: true,
    scrub: 1,
    pin: true,
  },
});
tl.from(
  ".right-img1",
  {
    y: 400,
  },
  "a"
);

tl.from(
  ".right-img1>img",
  {
    y: 600,
    opacity: 0,
  },
  "a"
);

tl.from(
  ".right-img2",
  {
    y: 150,
  },
  "a"
);

tl.from(
  ".right-img2>img",
  {
    y: 250,
    opacity: 0,
  },
  "a"
);

tl.from(
  ".left-img1>img",
  {
    y: 400,
    opacity: 0,
  },
  "b"
);

tl.from(
  ".left-img2",
  {
    y: 600,
    opacity: 0,
  },
  "b"
);

tl.from(
  ".center-img1>img",
  {
    y: 300,
    opacity: 0,
  },
  "b"
);

tl.from(
  ".center-img2",
  {
    y: 400,
    opacity: 0,
  },
  "b"
);
