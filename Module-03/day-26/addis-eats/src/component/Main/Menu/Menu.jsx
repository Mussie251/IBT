import Dish from "./Dish/Dish.jsx";
import menu from "../../../data/menu.json";

const images = {
  "Doro Wat":
    "https://storage.ghost.io/c/f2/65/f2656369-0f61-4d65-ad9e-0284e2fdbaca/content/images/2023/12/dorowat---travelandmunchies--IG-.jpg",

  Shiro:
    "https://prod-ereceipt.foodbasics.ca/userfiles/image/recipes/2021/ethiopian-style-shiro2x.jpg",

  Kitfo:
    "https://thetravelvirgin.com/wp-content/uploads/2021/11/Kitfo.webp",

  Tibs:
    "https://harambeeafrica.com/wp-content/uploads/2023/11/Tibs-with-injera1.jpg",
};

function getDishImage(dish) {
  if (images[dish.name]) {
    return images[dish.name];
  }

  if (dish.category === "Main") {
    return images.Tibs;
  }

  if (dish.category === "Vegetarian") {
    return images.Shiro;
  }

  if (dish.category === "Breakfast") {
    return images.Shiro;
  }

  return images["Doro Wat"];
}

function Menu() {
  return (
    <section className="menu-section" id="menu">
      <div className="section-heading">
        <p className="eyebrow">TRADITIONAL ETHIOPIAN CUISINE</p>
        <h2>Our Menu</h2>
        <p>
          Explore our selection of delicious Ethiopian dishes prepared
          with traditional flavors.
        </p>
      </div>

      <div className="dish-list">
        {menu.map((dish) => (
          <Dish
            key={dish.id}
            name={dish.name}
            price={dish.price}
            category={dish.category}
            spicy={dish.spicy}
            image={getDishImage(dish)}
          />
        ))}
      </div>
    </section>
  );
}

export default Menu;