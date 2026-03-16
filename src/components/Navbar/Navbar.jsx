import React from 'react';
import navimg from '../../assets/Gemini_Generated_Image_i3p4oyi3p4oyi3p4.png'


const Navbar = () => {
    return (
        <nav className='nav-container'>
      <div className='nav-left'>
        <img src={navimg} alt="Meal hub project logo" />
        <p>Meal Hub</p>

      </div>

      <div className='nav-right'>

      <p>Home</p>
      <p>About</p>
      <p>contacts</p>
      <p>Orders</p>
      <p>Blogs</p>
      </div>
    </nav>
    );
};

export default Navbar;