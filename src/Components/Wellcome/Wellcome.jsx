import React from 'react';
import './Wellcome.scss'

const Wellcome = () => {
    return (
        <div className='wellcome'>
          <div className='w-conteiner'>
            <span>¡Te damos la bienvenida!</span>
            <span>Cuenta con nosotros para proteger tu vehículo</span>
          </div>
          <div className='confirmacion'>
            <span>Enviaremos la confirmación de compra de tu Plan Vehicular Tracking a tu correo: </span>
            <span>joel.sanchez@gmail.com</span>
          </div>
        </div>
    );
}

export default Wellcome;
