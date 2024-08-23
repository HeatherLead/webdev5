const t1 = gsap.timeline();

gsap.set(".titleLeft", {
  position: "relative",
});
gsap.set(".titleRight", {
  position: "relative",
});

t1.fromTo(
  ".titleLeft",
  {
    opacity: 0,
    x: "-100%",
    ease: "power2.in",
  },
  {
    opacity: 1,
    x: "0%",
    duration: 1.5,
  }
)
  .fromTo(
    ".titleRight",
    {
      opacity: 0,
      x: "100%",
      ease: "power2.in",
    },
    {
      opacity: 1,
      x: "0%",
      duration: 1.5,
    },
    "-=1.5"
  )
  .fromTo(
    ".bottleImage",
    {
      y: "100%",
      xPercent: -50, // Maintain centering during the animation
      ease: "power2.in",
    },
    {
      y: "0%",
      duration: 1.5,
    },
    "-=1"
  )
  .fromTo(
    ".splash",
    {
      y: "100%",
      ease: "bounce.out",
    },
    {
      y: "0%",
      duration: 1,
    },
    "-=.5"
  );

const t2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".thirdContainer",
    start: "top 30%",
  },
});

t2.set(".staggerImage", {
  yPercent: -100,
  opacity: 0,
});
t2.set(".staggetContent", {
  opacity: 0,
  yPercent: -10,
});
t2.to(".staggerImage", {
  yPercent: 0,
  ease: "power4.out",
  duration: 2,
  stagger: 0.1,
  delay: 0.2,
  scale: 1.2,
  opacity: 1,
})
  .to(".staggerImage", {
    scale: 1,
  })
  .to(".staggerContent", {
    opacity: 1,
    yPercent: 0,
  });

const t3 = gsap.timeline({
  scrollTrigger: {
    trigger: [".testimonial-section", ".card"],
    start: "top 70%",
  },
});

t3.set([".testimonial-card", ".card"], {
  opacity: 0,
  yPercent: 100,
});

t3.to([".testimonial-card", ".card"], {
  opacity: 1,
  yPercent: 0,
  ease: "power4.out",
  duration: 1.5,
  delay: 0,
  stagger: 0.2,
});

const t4 = gsap.timeline();

t4.set([".review", ".coverImage", ".title"], {
  opacity: 0,
  yPercent: 100,
});

t4.to([".review", ".coverImage", ".title"], {
  opacity: 1,
  yPercent: 0,
  ease: "power4.out",
  duration: 1.5,
  stagger: 0.2,
});

const t5 = gsap.timeline();

t5.set([".text"], {
  opacity: 0,
  xPercent: -100,
});

t5.to([".text"], {
  opacity: 1,
  xPercent: 0,
  ease: "power4.out",
  duration: 1.5,
  stagger: 0.2,
});

const t6 = gsap.timeline({
  scrollTrigger: {
    trigger: ".recipeContainer",
    start: "40% 50%",
  },
});

t6.to([".recipe-card"], {
  rotation: "+=10",
  duration: 0.1,
  repeat: 7,
  yoyo: true,
  ease: "power2.inOut",
});
