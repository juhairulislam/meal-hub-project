import React from 'react';

const Button = ({bgColor, text}) => {
    return (
        <div>
            <button style={{backgroundColor:bgColor}} className='add-btn'>{text}</button>
        </div>
    );
};

export default Button;