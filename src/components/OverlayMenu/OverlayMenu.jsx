import './OverlayMenu.css';

export default function OverlayMenu({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="overlay-menu" role="dialog" aria-modal="true">
      <button className="overlay-close" onClick={onClose} aria-label="關閉選單">
        ×
      </button>
      <ul className="overlay-links">
        <li><a href="/menu" onClick={onClose}>全部商品</a></li>
        <li><a href="/about" onClick={onClose}>關於我們</a></li>
        <li><a href="/knowledge" onClick={onClose}>水晶知識</a></li>
        <li><a href="/customize1" onClick={onClose}>客製體驗</a></li>
      </ul>
    </div>
  );
}