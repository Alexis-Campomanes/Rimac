import React from 'react';
import './Date.scss'

const Date = () => {
    return (
        <div className='date'>
          <span>Déjanos tus datos</span>
          <form>
            <div className='f-dni'>
              <select>
                <option value="DNI">DNI</option>
              </select>
              <input type="text" placeholder='Nro. de doc' />
            </div>
            <input type="text" placeholder='Celular' />
            <input type="text" placeholder='Placa' />
            <div className='politica'>
              <label>
                <input type="checkbox" />
                Acepto de Politica de Protección de Datos Personales y los Términos y Condiciones.
              </label>
            </div>
            <button className='b-conteiner' type='submit'>COTÍZALO</button>
          </form>
        </div>
    );
}

export default Date;
