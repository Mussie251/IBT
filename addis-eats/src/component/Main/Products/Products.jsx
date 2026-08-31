import React from 'react';
import Dish from './Dish/Dish.jsx';
import './Products.css';

const Products = () => {
  return (
    <section className='products'>
       <Dish image='path' name={menu[0].name} price={menu[0].price} />
    </section>
  )
}