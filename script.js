// Scroll car animation using GSAP + ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// 1. Get the elements
const section = document.querySelector(".section");
const road = document.querySelector(".road");
const car = document.querySelector("#car");
const carImg = document.querySelector(".car-img");
const trail = document.querySelector(".trail");
const headline = document.querySelector("#headline");
const boxes = [
  document.querySelector("#box1"),
  document.querySelector("#box2"),
  document.querySelector("#box3"),
  document.querySelector("#box4"),
];

// 2. Split the headline into single letters
const text = headline.textContent.trim();
headline.textContent = "";
for (const letter of text) {
  const span = document.createElement("span");
  span.className = "char";
  span.innerHTML = letter === " " ? "&nbsp;" : letter;
  headline.appendChild(span);
}
const letters = headline.querySelectorAll(".char");

// 3. Measure sizes (we redo this when the window is resized)
let carWidth = 0;
let endX = 0;
let letterPositions = [];

function measure() {
  carWidth = carImg.getBoundingClientRect().width;
  endX = road.clientWidth - carWidth; // how far the car can travel
  // x position of every letter inside the road
  letterPositions = [...letters].map((l) => headline.offsetLeft + l.offsetLeft);
}
measure();
ScrollTrigger.addEventListener("refresh", measure);

// 4. Runs while the car moves: grow the trail and light up letters
function updateTrail() {
  const carX = gsap.getProperty(car, "x");
  const carCenter = carX + carWidth / 2;

  trail.style.width = carCenter + "px";

  letters.forEach((letter, i) => {
    // letter shows once the car's center has passed it
    letter.style.opacity = carCenter > letterPositions[i] ? 1 : 0;
  });
}

// 5. Car moves left -> right, tied to the scrollbar
gsap.to(car, {
  x: () => endX,
  ease: "none",
  onUpdate: updateTrail,
  scrollTrigger: {
    trigger: section,
    start: "top top",
    end: "bottom bottom",
    scrub: 0.6,               // small smoothing so motion feels fluid
    invalidateOnRefresh: true,
    onUpdate: (self) => {
      // 6. Stat boxes fade in one by one at different scroll points
      boxes.forEach((box, i) => {
        const start = 0.18 + i * 0.1; // when this box starts to appear
        const end = start + 0.1;      // when it is fully visible
        const p = gsap.utils.clamp(0, 1, (self.progress - start) / (end - start));
        box.style.opacity = p;
      });
    },
  },
});

// 7. Small load animation: road slides in when the page opens
gsap.from(road, { opacity: 0, y: 40, duration: 1, ease: "power3.out" });
gsap.from(car, { opacity: 0, duration: 1.2, delay: 0.3 });