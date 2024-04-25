import gsap from "gsap";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

const animationWrapperId = "transition-element";

export const animatePageIn = () => {
  const animationWrapper = document.getElementById(animationWrapperId);

  if (animationWrapper) {
    gsap.to(animationWrapper, { opacity: 1, duration: 1 });
  }
};

export const animatePageOut = (href: string, router: AppRouterInstance) => {
  const animationWrapper = document.getElementById(animationWrapperId);

  if (animationWrapper) {
    gsap.to(animationWrapper, {
      opacity: 0,
      duration: 1,
    });
    router.push(href);
  }
};
