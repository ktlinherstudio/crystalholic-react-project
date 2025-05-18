import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const id = hash?.replace('#', '');

    const smoothScrollTo = (targetY, duration = 500) => {
      const startY = window.scrollY;
      const diff = targetY - startY;
      const startTime = performance.now();

      const easeInOutCubic = t =>
        t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

      const animate = now => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = easeInOutCubic(progress);
        window.scrollTo(0, startY + diff * eased);
        if (elapsed < duration) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    };

    // 第一步：立刻先滾到頂部（smooth）
    smoothScrollTo(0, 400);

    // 第二步：如有 hash，延遲補滾一次（讓畫面已經開始滑動了）
    if (id) {
      let attempts = 0;
      const interval = setInterval(() => {
        const el = document.getElementById(id) || document.querySelector(hash);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY;
          smoothScrollTo(top, 500);
          clearInterval(interval);
        } else if (attempts > 20) {
          clearInterval(interval);
        }
        attempts++;
      }, 100);
    }

  }, [pathname, hash]);

  return null;
}
