import React from 'react';
import './Tracking.scss'
import grild from '../../Assets/Group 16833.svg'

const Tracking = () => {
    return (
        <div className='tracking'>
          <div className='t-right'>
            <span>¡nuevo!</span>
            <span>Seguro Vehicular</span>
            <span>Tracking</span>
            <span>Cuentanos donde le haras seguimiento a tu seguro</span>
          </div>
          <div className='t-left'>
            <img src={ grild } alt="" />
          </div>
          

          
        </div>
    );
}

export default Tracking;
