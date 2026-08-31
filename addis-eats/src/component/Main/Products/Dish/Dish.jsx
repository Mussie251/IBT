import "./Dish.css";

const Dish = ({dish}) => {
  const  {name, price} = dish
  return (
    
     <div className="dish-item">
      <div className="image">
       <img src={image} alt="Food Image" />
      </div>

     </div> 
    
  )
}