import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Default animation settings
export const defaultEase = 'power3.out';
export const defaultDuration = 1;

// Fade in animation
export const fadeIn = (
  element: gsap.TweenTarget,
  options?: gsap.TweenVars
) => {
  return gsap.fromTo(
    element,
    {
      opacity: 0,
      y: 30,
    },
    {
      opacity: 1,
      y: 0,
      duration: defaultDuration,
      ease: defaultEase,
      ...options,
    }
  );
};

// Fade in with scroll trigger
export const fadeInOnScroll = (
  element: gsap.TweenTarget,
  options?: gsap.TweenVars & { trigger?: string | Element }
) => {
  const { trigger, ...tweenOptions } = options || {};

  return gsap.fromTo(
    element,
    {
      opacity: 0,
      y: 50,
    },
    {
      opacity: 1,
      y: 0,
      duration: defaultDuration,
      ease: defaultEase,
      scrollTrigger: {
        trigger: trigger || element as Element,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
      },
      ...tweenOptions,
    }
  );
};

// Stagger children animation
export const staggerChildren = (
  parent: string | Element,
  childSelector: string,
  options?: gsap.TweenVars
) => {
  return gsap.fromTo(
    `${parent} ${childSelector}`,
    {
      opacity: 0,
      y: 40,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: defaultEase,
      scrollTrigger: {
        trigger: parent as Element,
        start: 'top 80%',
      },
      ...options,
    }
  );
};

// Parallax effect
export const parallax = (
  element: gsap.TweenTarget,
  speed: number = 0.5
) => {
  return gsap.to(element, {
    y: () => window.innerHeight * speed,
    ease: 'none',
    scrollTrigger: {
      trigger: element as Element,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
  });
};

// Text reveal animation
export const textReveal = (
  element: gsap.TweenTarget,
  options?: gsap.TweenVars
) => {
  return gsap.fromTo(
    element,
    {
      opacity: 0,
      y: '100%',
      clipPath: 'inset(100% 0% 0% 0%)',
    },
    {
      opacity: 1,
      y: '0%',
      clipPath: 'inset(0% 0% 0% 0%)',
      duration: 1.2,
      ease: 'power4.out',
      ...options,
    }
  );
};

// Scale in animation
export const scaleIn = (
  element: gsap.TweenTarget,
  options?: gsap.TweenVars
) => {
  return gsap.fromTo(
    element,
    {
      opacity: 0,
      scale: 0.8,
    },
    {
      opacity: 1,
      scale: 1,
      duration: defaultDuration,
      ease: 'back.out(1.7)',
      ...options,
    }
  );
};

// Kill all scroll triggers
export const killScrollTriggers = () => {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
};

// Refresh scroll triggers (useful after content changes)
export const refreshScrollTriggers = () => {
  ScrollTrigger.refresh();
};
