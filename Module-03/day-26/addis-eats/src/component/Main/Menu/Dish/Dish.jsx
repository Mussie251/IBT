function Dish({ name, price, category, spicy, image }) {
  return (
    <article className="dish-card">
      <img
        className="dish-image"
        src={image}
        alt={name}
      />

      <div className="dish-content">
        <div className="dish-header">
          <span className="dish-category">{category}</span>

          {spicy && <span className="spicy">🌶 Spicy</span>}
        </div>

        <h3>{name}</h3>

        <div className="dish-bottom">
          <strong>{price} ETB</strong>
          <span>Popular Choice</span>
        </div>
      </div>
    </article>
  );
}

export default Dish;