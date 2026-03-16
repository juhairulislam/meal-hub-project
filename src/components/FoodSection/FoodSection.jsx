import React, { use, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
  
import SingleFood from '../SingleFood/SingleFood';
import Cart from '../cart/Cart';

const FoodSection = ({ FoodDataRes }) => {

    const data = use(FoodDataRes);
    const foods = data.meals ;
    const [cart, setCart] = useState([]) ;
    const AddToCart = (foodData) =>{

        setCart([...cart, foodData])


    }

    const handleOrder =() =>{
        setCart([]) ;
toast("Order Successful!")    }
    return (
        <div className='food-container-parent'>
            <div style={{width:'75%'}} className='food-container'>
                {
                    foods.map(food => <SingleFood AddToCart={AddToCart} food={food}></SingleFood>)
                }

            </div>

            <div style={{width:'25%'}} className='cart-container'>
                <h1>Cart</h1>
                <Cart cart={cart}></Cart>
                <button onClick={handleOrder} className='card-btn'>Order</button>
            </div>
             <ToastContainer />
        </div>
    );
};

export default FoodSection;