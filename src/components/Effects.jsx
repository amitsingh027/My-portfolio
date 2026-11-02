import { useEffect } from 'react';

export default function Effects() {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reduced.matches) return;
    const elements = document.querySelectorAll('main > section:not(.hero)');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    elements.forEach(el => { el.classList.add('scroll-reveal'); observer.observe(el); });
    const cards = document.querySelectorAll('.project-card, .portrait-wrap');
    const move = event => {
      if (event.pointerType !== 'mouse' || reduced.matches) return;
      const box = event.currentTarget.getBoundingClientRect();
      const x = (event.clientX - box.left) / box.width - 0.5;
      const y = (event.clientY - box.top) / box.height - 0.5;
      event.currentTarget.style.setProperty('--rx', (-y * 8) + 'deg');
      event.currentTarget.style.setProperty('--ry', (x * 8) + 'deg');
    };
    const reset = event => { event.currentTarget.style.setProperty('--rx', '0deg'); event.currentTarget.style.setProperty('--ry', '0deg'); };
    cards.forEach(card => { card.addEventListener('pointermove', move); card.addEventListener('pointerleave', reset); });
    return () => {
      observer.disconnect();
      elements.forEach(el => el.classList.remove('scroll-reveal'));
      cards.forEach(card => { card.removeEventListener('pointermove', move); card.removeEventListener('pointerleave', reset); });
    };
  }, []);
  return <div className="ambient" aria-hidden="true"><div className="ambient-orb orb-one"/><div className="ambient-orb orb-two"/><div className="ambient-grid"/></div>;
}
