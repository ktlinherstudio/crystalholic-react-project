const categories = ["放鬆冥想", "專注工作", "愛與人際", "能量防護", "靈性直覺"];

export default function CategoryTabs({ current, onClick }) {
  return (
    <ul className="category-k">
      {categories.map((cat) => (
        <li
          key={cat}
          className={current === cat ? "active" : ""}
          onClick={() => onClick(cat)}
        >
          {cat}
        </li>
      ))}
    </ul>
  );
}