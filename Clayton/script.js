const img = [
  "https://cdn.sanity.io/images/htx97v9b/production/179de48fd5460d2061b0ee03e2cbef10f8497c20-1200x1500.jpg?q=90&w=1200",
  "https://cdn.sanity.io/images/htx97v9b/production/d193ca1489f71ec0cd6231e54464f56112e943b1-1200x1500.jpg?q=90&w=1200",
  "https://cdn.sanity.io/images/htx97v9b/production/e683a3c6217da1ca73b1a7faa9a4412e21464a66-1200x1500.jpg?q=90&w=1200",
  "https://cdn.sanity.io/images/htx97v9b/production/d68a5ca6ae30796767eab2527154f3ea593f9a4f-1500x1001.jpg?q=90&w=1500",
  "https://cdn.sanity.io/images/htx97v9b/production/83fa03d5c65610631e1ec959408ceb1c7d521f8a-1500x1000.jpg?q=90&w=1500",
  "https://cdn.sanity.io/images/htx97v9b/production/dd30e595d3e567663fe146f31b8e6f9d61fc3ec4-1500x1001.jpg?q=90&w=1500",
  "https://cdn.sanity.io/images/htx97v9b/production/9f4016ed1f09a52c45bd781d9b25f687085f93b4-1200x1500.jpg?q=90&w=1200",
  "https://cdn.sanity.io/images/htx97v9b/production/dec55486c79565fb80d39f6e8e15ed86c40252c8-1200x1500.jpg?q=90&w=1200",
  "https://cdn.sanity.io/images/htx97v9b/production/669f7b2291cac62f23ab21283f916db8dec6c6d3-1200x1500.jpg?q=90&w=1200",
];

const tl = gsap.timeline();
tl.from(".laoder-box", {
  width: 0,
});

tl.to(".laoder-box", {
  height: "70vh",
  ease: "power5.in",
  duration: 0.6,
});

tl.to(
  ".loader-bg",
  {
    opacity: 0,
  },
  "a"
);

tl.from(
  ".loader-text>h1,.loader-text>h3,.loader>h3",
  {
    y: 100,
    opacity: 0,
  },
  "a"
);

const loaderBox = document.querySelector(".laoder-box");

setTimeout(() => {
  let count = 0;
  let index = 0;
  const myInterval = setInterval(() => {
    index = count % 9;
    count++;
    loaderBox.style.backgroundImage = `url(${img[index]})`;
    if (count === 30) {
      tl.to(".loader", {
        opacity: 0,
        zIndex: -2,
      });
      clearInterval(myInterval);
    }
  }, 400);
}, 1800);

document.addEventListener("click", () => {
  tl.to(".loader", {
    opacity: 0,
    duration: 1,
  });
  tl.from(".page1", {
    opacity: 0,
    delay: 1,
  });
});

ani2(".text-elem1", ".text-elem1 h1", ".preview1");
ani2(".text-elem2", ".text-elem2 h1", ".preview2");
ani2(".text-elem3", ".text-elem3 h1", ".preview3");
ani2(".text-elem4", ".text-elem4 h1", ".preview4");
ani2(".text-elem5", ".text-elem5 h1", ".preview5");
ani2(".text-elem6", ".text-elem6 h1", ".preview6");
ani3(".text-elem7", ".text-elem7 h1", ".preview7");
ani2(".text-elem8", ".text-elem8 h1", ".preview8");
ani(".text-elem9", ".text-elem9 h1", ".preview9");
ani2(".text-elem10", ".text-elem10 h1", ".preview10");
ani3(".text-elem11", ".text-elem11 h1", ".preview11");
ani3(".text-elem12", ".text-elem12 h1", ".preview12");
ani3(".text-elem13", ".text-elem13 h1", ".preview13");
ani2(".text-elem14", ".text-elem14 h1", ".preview14");
ani2(".text-elem15", ".text-elem15 h1", ".preview15");

function ani(textElemm, textElemH11, previeww) {
  const textElem = document.querySelector(textElemm);
  const textElemH1 = document.querySelectorAll(textElemH11);
  const preview = document.querySelector(previeww);

  const elemWidth = textElem.getBoundingClientRect().width;

  textElem.addEventListener("mousemove", (dets) => {
    gsap.to(preview, {
      left: dets.x - elemWidth * 10,
    });
  });

  textElem.addEventListener("mouseenter", () => {
    gsap.to(textElemH1, {
      y: -70,
    });

    gsap.to(preview, {
      opacity: 1,
      scale: 1,
    });

    let count = 0;
    let index = 0;
    const myInterval = setInterval(() => {
      index = count % 9;
      count++;
      preview.style.backgroundImage = `url(${img[index]})`;
    }, 400);
  });

  textElem.addEventListener("mouseleave", () => {
    gsap.to(textElemH1, {
      y: 0,
    });
    gsap.to(preview, {
      opacity: 0,
      scale: 0.8,
    });
  });
}
function ani2(textElemm, textElemH11, previeww) {
  const textElem = document.querySelector(textElemm);
  const textElemH1 = document.querySelectorAll(textElemH11);
  const preview = document.querySelector(previeww);

  const elemWidth = textElem.getBoundingClientRect().width;

  textElem.addEventListener("mousemove", (dets) => {
    gsap.to(preview, {
      left: dets.x / 1.4 - elemWidth,
    });
  });

  textElem.addEventListener("mouseenter", () => {
    gsap.to(textElemH1, {
      y: -70,
    });

    gsap.to(preview, {
      opacity: 1,
      scale: 1,
    });

    let count = 0;
    let index = 0;
    const myInterval = setInterval(() => {
      index = count % 9;
      count++;
      preview.style.backgroundImage = `url(${img[index]})`;
    }, 400);
  });

  textElem.addEventListener("mouseleave", () => {
    gsap.to(textElemH1, {
      y: 0,
    });
    gsap.to(preview, {
      opacity: 0,
      scale: 0.8,
    });
  });
}
function ani3(textElemm, textElemH11, previeww) {
  const textElem = document.querySelector(textElemm);
  const textElemH1 = document.querySelectorAll(textElemH11);
  const preview = document.querySelector(previeww);

  const elemWidth = textElem.getBoundingClientRect().width;

  // textElem.addEventListener("mousemove", (dets) => {
  //   gsap.to(preview, {
  //     left: dets.x - elemWidth,
  //   });
  // });

  textElem.addEventListener("mouseenter", () => {
    gsap.to(textElemH1, {
      y: -70,
    });

    gsap.to(preview, {
      opacity: 1,
      scale: 1,
    });

    let count = 0;
    let index = 0;
    const myInterval = setInterval(() => {
      index = count % 9;
      count++;
      preview.style.backgroundImage = `url(${img[index]})`;
    }, 400);
  });

  textElem.addEventListener("mouseleave", () => {
    gsap.to(textElemH1, {
      y: 0,
    });
    gsap.to(preview, {
      opacity: 0,
      scale: 0.8,
    });
  });
}
