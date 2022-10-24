import React from 'react';
import './Cobertura.scss';
import man from '../../Assets/man.svg';

const Cobertura = () => {
    return (
        <div className='cobertura'>
        <span>Mira las coberturas</span>
        <span>Conoce las coberturas para tu plan</span>
        <div className='placa'>
          <div className='p-left'>
            <span>Placa: C2U-114</span>
            <span>Wolkswagen 2019 Golf</span>
          </div>
          <div className='p-right'>
            <img src= { man } alt="" />
          </div>
        </div>
          
        </div>
    );
}

export default Cobertura;
