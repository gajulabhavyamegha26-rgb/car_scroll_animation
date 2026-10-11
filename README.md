# Scroll Car Animation: Welcome Itzfizz

A scroll-driven hero section animation built with HTML, CSS, JavaScript, GSAP and Tailwind CSS. As you scroll, a car drives across a road, a green trail grows behind it, the headline letters appear as the car passes them, and four statistic cards fade in one by one.

**Live demo:** https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/
**Repository:** https://github.com/YOUR-USERNAME/YOUR-REPO-NAME

## Features
- **Scroll-linked motion:** the car's position is tied to scroll progress, not to a timer, so scrolling back plays the animation in reverse.
- **Trail effect:** a green bar grows with the car's centre point as it moves.
- **Letter reveal:** each letter of "WELCOME ITZFIZZ" becomes visible when the car passes it.
- **Staggered stats:** four colour-coded stat cards (58%, 23%, 27%, 40%) fade in one after another at different scroll points.
- **Smooth motion:** GSAP's `scrub` option adds slight smoothing, and a short load animation fades the road in.
- **Responsive:** letter size, stat cards and the car scale down on smaller screens.

## Tech stack
- HTML5
- CSS3
- JavaScript (vanilla)
- [GSAP](https://gsap.com/) and its ScrollTrigger plugin
- [Tailwind CSS](https://tailwindcss.com/) (CDN)

## How it works
1. The page has a tall `.section` (300vh). Inside it, the `.track` uses `position: sticky`, so it stays on screen while the page scrolls.
2. A GSAP tween moves the car along the x-axis from the left edge to the right edge of the road. ScrollTrigger links the tween to scroll progress.
3. On every update of the tween, the script reads the car's centre, sets the trail width to match, and shows every letter the car has passed.
4. The stat cards use scroll progress (0 to 1) to calculate their own opacity, with each card starting 10% of the scroll later than the previous one.
5. Only `transform` and `opacity` are used for the main motion, to avoid layout recalculation while scrolling.

## Project structure
```
├── index.html   # page structure, car SVG and stat cards
├── style.css    # layout, road, trail, letters, stat cards, responsive rules
└── script.js    # GSAP + ScrollTrigger animation logic
```

## Run locally
1. Download or clone this repository.
2. Open `index.html` in a browser (or use the VS Code Live Server extension).

## Deployment
Hosted with GitHub Pages: **Settings → Pages → Deploy from a branch → `main` / root**.

## Author
Gajula Bhavya Megha
First-year Computer Science Engineering student, CMRIT Bangalore
