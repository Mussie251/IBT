function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>Categories</h2>

      <ul>
        <li>🥘 Traditional Food</li>
        <li>🍗 Meat Dishes</li>
        <li>🥗 Vegetarian</li>
        <li>🥤 Drinks</li>
      </ul>

      <div className="sidebar-box">
        <h3>Today's Special</h3>
        <p>Doro Wat with fresh Injera.</p>
        <strong>240 ETB</strong>
      </div>
    </aside>
  );
}

export default Sidebar;