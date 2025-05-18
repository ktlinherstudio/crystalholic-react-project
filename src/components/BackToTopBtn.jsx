import './BackToTopBtn.css';

export default function BackToTopBtn() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="back-to-top-block">
      <button
        onClick={scrollToTop}
        className="back-to-top-btn"
        aria-label="Back to top"
      >
        <img
          src="/images/S-Btn/btn-BackToTop.png"
          alt="Back to Top"
          className="back-to-top-img"
        />
      </button>
    </div>
  );
}
