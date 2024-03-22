const heroElem = document.querySelectorAll(".hero-elem");
const heroText = document.querySelectorAll(".hero-text");

heroElem.forEach((elem, index) => {
  elem.addEventListener("mouseenter", () => {
    for (let i = 0; i < heroElem.length; i++) {
      if (i != index) {
        gsap.to(heroElem[i], {
          height: "15%",
        });
        gsap.to(heroText[i], {
          opacity: 0,
        });
      } else {
        gsap.to(heroElem[i], {
          height: "70%",
        });
        gsap.to(heroText[i], {
          opacity: 1,
        });

        if (i === 0) {
          gsap.from(".text1>.d>span", {
            x: -50,
            stagger: {
              amount: 0.6,
            },
          });

          gsap.from(".text2>.d>span", {
            x: -80,
            stagger: {
              amount: 1.4,
            },
          });
        } else if (i === 1) {
          gsap.from(".text3>.d>span", {
            x: -50,
            stagger: {
              amount: 0.6,
            },
          });

          gsap.from(".text4>.d>span", {
            x: -80,
            stagger: {
              amount: 1.4,
            },
          });
        } else {
          gsap.from(".text5>.d>span", {
            x: -50,
            stagger: {
              amount: 0.6,
            },
          });

          gsap.from(".text6>.d>span", {
            x: -80,
            stagger: {
              amount: 1.4,
            },
          });
        }
      }
    }
  });
});

ani(".text1");
ani(".text2");

ani(".text3");
ani(".text4");
ani(".text5");
ani(".text6");

function ani(element) {
  let clutter = "";
  const htmlTag = document.querySelector(element);
  htmlTag.textContent.split("").forEach((words) => {
    clutter += `<div class="d fit-content overflow-hidden"><span class="inline-block">${words}</span></div>`;
  });
  htmlTag.innerHTML = clutter;
}
