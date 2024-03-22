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

function clutterAnimation(element) {
  const htmlTag = document.querySelector(element);
  let clutter = "";
  htmlTag.textContent.split("").forEach((word) => {
    clutter += `<span class="inline-block">${word}</span>`;
  });
  htmlTag.innerHTML = clutter;
}

const tl = gsap.timeline();
tl.to(".l1", {
  delay: 1,
  onComplete: () => {
    document.querySelector(".l1").innerHTML = 100 + "%";
    clutterAnimation(".l1");
    clutterAnimation(".l2");
    nextAni();
  },
});

function nextAni() {
  tl.to(
    ".l1>span",
    {
      delay: 0.5,
      y: -250,
      duration: 0.8,
      stagger: 0.1,
    },
    "a"
  );

  tl.to(
    ".l2>span",
    {
      delay: 0.5,
      y: -160,
      duration: 0.8,
      stagger: 0.1,
    },
    "a"
  );

  tl.to(
    ".laoder-img",
    {
      delay: 0.5,
      duration: 0.8,
      clipPath: "polygon(100% 0, 0 0, 0 100%, 100% 100%)",
    },
    "a"
  );
  tl.to(
    ".l2>span",
    {
      delay: 0.2,
      y: -350,
      duration: 0.8,
      stagger: 0.1,
    },
    "b"
  );

  tl.to(
    ".laoder-img>img",
    {
      delay: 0.2,
      width: "0",
    },
    "b"
  );
  tl.to(".loader", {
    opacity: 0,
  });

  clutterAnimation(".main-title h1");

  tl.from(
    ".main-title h1>span",
    {
      y: 550,
      delay: -1.6,
      stagger: 0.1,
    },
    "p"
  );

  tl.from(
    ".bg-video video",
    {
      delay: -0.6,
      scale: "1.2",
      top: "10%",
      duration: 0.6,
    },
    "p"
  );
}
