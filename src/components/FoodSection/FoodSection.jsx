import React, { use } from 'react';
import SingleFood from '../SingleFood/SingleFood';

const FoodSection = ({FoodDataRes}) => {

    const data = use(FoodDataRes) ;
    const foods = data.meals
    return (
        <div className='food-container'>
            {
                foods.map(food => <SingleFood food={food}></SingleFood>)
            }
            
        </div>
    );
};

export default FoodSection;