import './styles/fonts.css';
import './styles/base.css';
import './styles/opening.css';
import './styles/why.css';
import './styles/site.css';
import './styles/flow.css';
import './styles/projects.css';
import './styles/mobile.css';
import './styles/closing.css';

const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* Progressive enhancement: content is visible by default. Only once the
   observer exists do we mark elements as "reveal" (hidden until seen). */
function initReveal() {
  if (reduce || !('IntersectionObserver' in window)) return;
  const targets = document.querySelectorAll('[data-reveal]');
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('is-in');
          io.unobserve(e.target);
        }
      });
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
  );
  targets.forEach((el) => {
    el.classList.add('reveal');
    io.observe(el);
  });
  // Safety net: never leave anything hidden.
  setTimeout(() => targets.forEach((el) => el.classList.add('is-in')), 6000);
}

function initProgress() {
  const bar = document.querySelector('.progress__bar');
  if (!bar) return;
  let ticking = false;
  const update = () => {
    const h = document.documentElement;
    const max = h.scrollHeight - h.clientHeight;
    bar.style.transform = `scaleX(${max > 0 ? Math.min(1, h.scrollTop / max) : 0})`;
    ticking = false;
  };
  window.addEventListener(
    'scroll',
    () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    },
    { passive: true }
  );
  update();
}

const fontsReady = document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve();
fontsReady.then(() => {
  initReveal();
  initProgress();
});
