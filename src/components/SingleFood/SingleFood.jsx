import React from 'react';
import './SingleFood.css'

const SingleFood = ({food}) => {
    return (
        <div className='food-card'>
           
             <img src={food.strMealThumb} alt="Food" />
            <h1>{food.strMeal}</h1>
            <button className='card-btn'>Add to cart</button>
           
            
        </div>
    );
};

export default SingleFood;