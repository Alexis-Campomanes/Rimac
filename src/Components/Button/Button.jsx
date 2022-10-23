import React from 'react';
import './Button.scss'

const Button = ({namebutton}) => {
    return (
        <div className='botton'>
          <button className='b-conteiner b-cotizar'>{ namebutton }</button>
        </div>
    );
}

export default Button;
