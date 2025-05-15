// components/ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // 若 hash 存在（像 /about#hero），等待該元素存在再滾動
    if (hash) {
      const targetId = hash.replace('#', '');
      const scrollToElement = () => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      };
      // 延遲一下再嘗試滾動，避免 DOM 還沒渲染完
      setTimeout(scrollToElement, 50);
    } else {
      // 沒有 hash 就直接回頂部（強制滾動）
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, [pathname, hash]);

  return null;
}
