import Dish from "../Dish/Dish";

function Menu({ dishes, category }) {
  const filteredDishes = dishes.filter((dish) =>
    category === "All" ? true : dish.category === category
  );

  if (filteredDishes.length === 0) {
    return <p>No dishes found in this category.</p>;
  }

  return (
    <section>
      {filteredDishes.map((dish) => (
        <Dish
          key={dish.id}
          name={dish.name}
          price={Number(dish.price)}
          spicy={dish.spicy}
        />
      ))}
    </section>
  );
}

export default Menu;