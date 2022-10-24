import React from 'react';
import './AddCoberturas.scss';

const AddCoberturas = () => {
    return (
        <div className='addcobertura'>
          <span>Agregar o quitar coberturas</span>
          <div className='protection'>
            <span>protege a tu auto</span>
            <span>protege a los que te rodean</span>
            <span>mejora tu plan</span>
          </div>
          <hr />
        </div>
    );
}

export default AddCoberturas;
