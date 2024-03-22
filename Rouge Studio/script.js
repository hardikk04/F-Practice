const loader = document.querySelector(".loader");

const imgArray = [
  "https://rogue-studio.transforms.svdcdn.com/staging/Hom.png?w=525&h=745&q=85&auto=format&fit=crop&dm=1689577923&s=aabc651aa1a8f72f017abe624767fe6f",
  "https://rogue-studio.transforms.svdcdn.com/staging/Zaza-Cover.png?w=525&h=745&q=85&auto=format&fit=crop&dm=1689577940&s=d764fbe832086e91bed026a68b3d244e",
  "https://rogue-studio.transforms.svdcdn.com/staging/Big-01.png?h=500&q=85&auto=format&fit=crop&dm=1689577897&s=a5e98f2a1e63efce8a0543d016d59c30",
  "https://rogue-studio.transforms.svdcdn.com/staging/cs_04.png?h=500&q=85&auto=format&fit=crop&dm=1689577911&s=89d9a2797973b0d2a9c2e236f32d2d58",
  "https://rogue-studio.transforms.svdcdn.com/staging/Big-Image-04.png?h=500&q=85&auto=format&fit=crop&dm=1689577901&s=39e0a6e21c09383d6d1ac8c935ddaf8a",
  "https://rogue-studio.transforms.svdcdn.com/staging/service_5.jpg?h=400&q=85&auto=format&fit=crop&dm=1689577934&s=f4cf5d75cffee16f3952d8d945ff1111",
  "https://rogue-studio.transforms.svdcdn.com/staging/Storytelling_2023-07-28-150356_xgyb.png?h=400&q=85&auto=format&fit=crop&dm=1690556637&s=1dc676d4f51319c271a844ad83fa9eff",
  "https://rogue-studio.transforms.svdcdn.com/staging/hh_right.jpg?h=500&q=85&auto=format&fit=crop&dm=1689577922&s=d55eeeef965a0bed9b3e9f1d9a19cbce",
  "https://rogue-studio.transforms.svdcdn.com/staging/hh_left.jpg?h=500&q=85&auto=format&fit=crop&dm=1689577921&s=fea8f6451cd106b9b450d017479442fe",
  "https://rogue-studio.transforms.svdcdn.com/staging/FooterMiddle.png?h=500&q=85&auto=format&fit=crop&dm=1689577915&s=a16fc7dfbf1c1eb33d21f0b3e9aaaabe",
  "https://rogue-studio.transforms.svdcdn.com/staging/Big-Image-04.png?h=500&q=85&auto=format&fit=crop&dm=1689577901&s=39e0a6e21c09383d6d1ac8c935ddaf8a",
  "https://rogue-studio.transforms.svdcdn.com/staging/service_5.jpg?h=400&q=85&auto=format&fit=crop&dm=1689577934&s=f4cf5d75cffee16f3952d8d945ff1111",
  "https://rogue-studio.transforms.svdcdn.com/staging/Storytelling_2023-07-28-150356_xgyb.png?h=400&q=85&auto=format&fit=crop&dm=1690556637&s=1dc676d4f51319c271a844ad83fa9eff",
  "https://rogue-studio.transforms.svdcdn.com/staging/hh_right.jpg?h=500&q=85&auto=format&fit=crop&dm=1689577922&s=d55eeeef965a0bed9b3e9f1d9a19cbce",
  "https://rogue-studio.transforms.svdcdn.com/staging/hh_left.jpg?h=500&q=85&auto=format&fit=crop&dm=1689577921&s=fea8f6451cd106b9b450d017479442fe",
  "https://rogue-studio.transforms.svdcdn.com/staging/FooterMiddle.png?h=500&q=85&auto=format&fit=crop&dm=1689577915&s=a16fc7dfbf1c1eb33d21f0b3e9aaaabe",
];

const imgArrayLength = imgArray.length;

for (let i = 0; i < imgArrayLength + 1; i++) {
  loader.innerHTML += `<div class="img h-[30vh] w-[23vh] rounded-[1vw] overflow-hidden opacity-0">
  <img class="h-full w-full object-cover" src="${imgArray[i]}" alt="">
  </div>`;
}

const allImg = document.querySelectorAll(".img");
let count = 0;
const myInterval = setInterval(() => {
  if (count === imgArrayLength - 1) {
    clearInterval(myInterval);
  }

  allImg[count].style.opacity = 1;
  count++;
}, 150);

setTimeout(() => {
  let count2 = imgArrayLength - 1;
  const myInterval2 = setInterval(() => {
    if (count2 === 0) {
      clearInterval(myInterval2);
    }

    allImg[count2].style.opacity = 0;
    count2--;
  }, 100);
}, 150 * 20);

const tl = gsap.timeline();

setTimeout(() => {
  tl.to(".scroller", {
    height: "0",
  });
  tl.to(".loader", {
    opacity: 0,
  });

  tl.from(
    ".text1>span",
    {
      opacity: 0,
      stagger: 0.1,
      x: 40,
    },
    "t"
  );
  tl.from(
    ".text2>span",
    {
      opacity: 0,
      stagger: 0.1,
      delay: 0.5,
      x: 40,
    },
    "t"
  );
  tl.from(
    ".text3>span",
    {
      opacity: 0,
      stagger: 0.1,
      delay: 1,
      x: 40,
    },
    "t"
  );

  tl.from(
    ".same",
    {
      y: 100,
      ease: "expo.out",
    },
    "ss"
  );

  tl.from(
    ".page1-text>h1",
    {
      height: 0,
      ease: "expo.out",
    },
    "ss"
  );

  tl.from(
    ".main-imgs",
    {
      opacity: 0,
      scale: 0.5,
      stagger: 0.1,
    },
    "g"
  );

  tl.from(
    ".page1-footer",
    {
      opacity: 0,
    },
    "g"
  );

  tl.from(
    ".page1-img1",
    {
      top: "45%",
      left: "55%",
      delay: 1,
    },
    "i"
  );

  tl.from(
    ".page1-img2",
    {
      top: "30%",
      left: "35%",
      delay: 1,
    },
    "i"
  );

  tl.from(
    ".page1-img3",
    {
      top: "25%",
      left: "30%",
      delay: 1,
    },
    "i"
  );

  tl.from(
    ".page1-img4",
    {
      top: "35%",
      left: "50%",
      delay: 1,
    },
    "i"
  );

  tl.from(
    ".page1-img5",
    {
      top: "45%",
      right: "40%",
      delay: 1,
    },
    "i"
  );

  tl.from(
    ".page1-img6",
    {
      top: "47%",
      left: "33%",
      delay: 1,
    },
    "i"
  );

  tl.from(
    ".page1-img7",
    {
      right: "42%",
      bottom: "20%",
      delay: 1,
    },
    "i"
  );
}, 200 * 19);

function clutterAnimation(element) {
  const htmlTag = document.querySelector(element);
  let clutter = "";
  htmlTag.textContent.split("").forEach((words) => {
    clutter += `<span class='inline-block'>${words}</span>`;
  });
  htmlTag.innerHTML = clutter;
}

clutterAnimation(".text1");
clutterAnimation(".text2");
clutterAnimation(".text3");
