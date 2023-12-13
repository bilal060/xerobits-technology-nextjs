import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Reusable function to handle X(Right) Animations
export function animateSectionRightX(selector, ease) {
  const animation = gsap.timeline();
  animation.from(selector, {
    x: "100%",
    opacity: 0,
    duration: 2,
    ease,
  });
  ScrollTrigger.create({
    selector,
    start: "top bottom",
    end: "bottom top",
    onEnter: () => playAnimationXAxis(animation, "0%"),
    onLeaveBack: () => playAnimationXAxis(animation, "100%"),
    onEnterBack: () => playAnimationXAxis(animation, "0%"),
    onLeave: () => playAnimationXAxis(animation, "100%"),
    toggleActions: "play none none none",
  });
}

// Reusable function to handle -X(Left) Animations
export function animateSectionLeftX(selector, ease) {
  const animation = gsap.timeline();
  animation.from(selector, {
    x: "-100%",
    opacity: 0,
    duration: 2,
    ease,
  });
  ScrollTrigger.create({
    selector,
    start: "top bottom",
    end: "bottom top",
    onEnter: () => playAnimationXAxis(animation, "0%"),
    onLeaveBack: () => playAnimationXAxis(animation, "-100%"),
    onEnterBack: () => playAnimationXAxis(animation, "0%"),
    onLeave: () => playAnimationXAxis(animation, "-100%"),
    toggleActions: "play none none none",
  });
}
// function to play animations on enter, leave, etc. For X Axis (Right & Left)
function playAnimationXAxis(animation, xValue) {
  const tl = gsap.timeline();
  tl.to(animation, {
    x: xValue,
    opacity: xValue === "0%" ? 1 : 0,
    duration: 2,
    ease: "power4.out",
  });
}

// Reusable function to handle Bottom To Top Aniamations
export function animateSectionBottmToTop(selector, ease) {
  const animation = gsap.timeline();
  animation.from(selector, {
    y: "100%", // Start from the bottom
    opacity: 0,
    duration: 2,
    ease,
  });
  ScrollTrigger.create({
    selector,
    start: "top bottom",
    end: "bottom top",
    onEnter: () => playAnimationYAxis(animation, "0%"),
    onLeaveBack: () => playAnimationYAxis(animation, "100%"),
    onEnterBack: () => playAnimationYAxis(animation, "0%"),
    onLeave: () => playAnimationYAxis(animation, "100%"),
    toggleActions: "play none none none",
  });
}
// Reusable function to play animations on enter, leave, etc. For Y Axis
function playAnimationYAxis(animation, yValue) {
  const tl = gsap.timeline();
  tl.to(animation, {
    y: yValue,
    opacity: yValue === "0%" ? 1 : 0,
    duration: 2,
    ease: "power4.out",
  });
}

// Text Reveal Animations
export const textRevealAnimation = (selector) => {
  const initialAnimation = gsap.timeline();
  initialAnimation.from(selector, {
    y: "100%",
    opacity: 0,
    duration: 1,
    ease: "power2.out",
  });

  gsap.utils.toArray(selector).forEach((text) => {
    ScrollTrigger.create({
      trigger: text,
      start: "top bottom",
      end: "bottom top",
      onEnter: () => playTextRevealAnimation(text, "0%", 1, 3),
      onLeaveBack: () => playTextRevealAnimation(text, "100%", 0, 3),
      onEnterBack: () => playTextRevealAnimation(text, "0%", 1, 3),
      onLeave: () => playTextRevealAnimation(text, "100%", 0, 3),
      toggleActions: "play none none none",
    });
  });
};

// Reusable function to play animations on enter, leave, etc. For Text Reveal
function playTextRevealAnimation(animation, yValue, opacity, duration) {
  const tl = gsap.timeline();
  tl.to(animation, {
    y: yValue,
    opacity: opacity,
    duration: duration,
    ease: "power4.out",
  });
}
