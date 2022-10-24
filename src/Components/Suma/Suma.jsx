import React from 'react';
import './Suma.scss';

const Suma = () => {
    return (
        <div className='suma'>
          <span>Indica la suma asegurada</span>
          <div className='s-cantidad'>
            <span>MIN $12.500</span>
            <span>|</span>
            <span>MAX $16.500</span>
          </div>
          <div className='s-counter'>
            <span>-</span>
            <span>$ 100.000</span>
            <span>+</span>
          </div>
          
        </div>
    );
}

export default Suma;
