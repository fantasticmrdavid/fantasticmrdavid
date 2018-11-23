import animateScrollTo from 'animated-scroll-to';

export const scrollToElement = (id, offset = 0) => {
  const element = document.getElementById(id);
  if (!element) return false;
  const target = element.offsetTop - 30;
  window.requestAnimationFrame(() => {
    animateScrollTo(target + offset);
  });
  return true;
};
