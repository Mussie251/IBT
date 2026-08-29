import { useState } from "react";
import CategoryBar from "./CategoryBar";
import DishList from "./DishList";

function Menu({ dishes }) {
  const [category, setCategory] = useState("All");
  const [total, setTotal] = useState(0);

  const categories = [
    "All",
    ...new Set(dishes.map((dish) => dish.category)),
  ];

  const filteredDishes =
    category === "All"
      ? dishes
      : dishes.filter((dish) => dish.category === category);

  function handleAdd(price) {
    setTotal((prevTotal) => prevTotal + price);
  }

  console.log("Menu state:", { category, total });

  return (
    <section>
      <CategoryBar
        categories={categories}
        selectedCategory={category}
        onSelect={setCategory}
      />

      <DishList
        dishes={filteredDishes}
        onAdd={handleAdd}
      />

      <h2>Total: {total.toLocaleString()} ETB</h2>
    </section>
  );
}

export default Menu;