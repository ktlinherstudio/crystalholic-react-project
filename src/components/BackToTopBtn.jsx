import { useEffect, useState } from 'react';

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrollable, setIsScrollable] = useState(false);

  // 判斷是否需要滾動
  useEffect(() => {
    const checkScrollable = () => {
      const hasScroll =
        document.documentElement.scrollHeight > window.innerHeight;
      setIsScrollable(hasScroll);
    };

    checkScrollable();
    window.addEventListener('resize', checkScrollable);
    return () => window.removeEventListener('resize', checkScrollable);
  }, []);

  // 滾到底部才顯示
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = window.innerHeight;
      setIsVisible(scrollTop + clientHeight >= scrollHeight - 100);
    };

    if (isScrollable) {
      window.addEventListener('scroll', handleScroll);
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrollable]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isScrollable) return null;

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 w-12 h-12 z-50 transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      aria-label="Back to top"
    >
      <img
        src="/images/S-Btn/btn-BackToTop.png" 
        alt="Back to Top"
        className="w-full h-full object-contain"
      />
    </button>
  );
}
