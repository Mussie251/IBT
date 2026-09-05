import { useMemo, useState } from "react";
import useFetch from "../../../hooks/useFetch";
import { useCart } from "../../../cart/cartProvider";

function Menu() {
  const { data, loading, error } = useFetch("/src/data/menu.json");
  const { items, dispatch, total } = useCart();

  const [category, setCategory] = useState("All");

  const categories = useMemo(() => {
    return ["All", ...new Set(data.map((dish) => dish.category))];
  }, [data]);

  const filteredDishes = useMemo(() => {
    if (category === "All") {
      return data;
    }

    return data.filter((dish) => dish.category === category);
  }, [data, category]);

  if (loading) {
    return <p>Loading menu...</p>;
  }

  if (error) {
    return <p>Error loading menu: {error.message}</p>;
  }

  return (
    <div>
      <h2>Menu</h2>

      <div>
        {categories.map((cat) => (
          <button key={cat} onClick={() => setCategory(cat)}>
            {cat}
          </button>
        ))}
      </div>

      {filteredDishes.map((dish) => (
        <div key={dish.id}>
          <h3>{dish.name}</h3>
          <p>{dish.category}</p>
          <p>{dish.price} ETB</p>

          <button
            onClick={() =>
              dispatch({
                type: "add",
                item: dish,
              })
            }
          >
            Add to Cart
          </button>

          <button
            onClick={() =>
              dispatch({
                type: "remove",
                id: dish.id,
              })
            }
          >
            Remove
          </button>
        </div>
      ))}

      <hr />

      <h2>Cart</h2>
      <p>Items: {items.length}</p>
      <p>Total: {total} ETB</p>

      <button onClick={() => dispatch({ type: "clear" })}>
        Clear Cart
      </button>
    </div>
  );
}

export default Menu;