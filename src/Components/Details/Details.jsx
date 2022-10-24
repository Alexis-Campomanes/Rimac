import React from 'react';
import './Details.scss';
import { UilAngleUp } from '@iconscout/react-unicons';
import { UilAngleDown } from '@iconscout/react-unicons'
const Details = ({title, img, text}) => {
    return (
        <div className='details'>
          <div className='d-bar'>
            <div className='d-perfil'>
              <img src={ img } alt="" />
              <span>{title}</span>
            </div>
            <input type="checkbox" id="switch" />
            <label for="switch">Toggle</label>
          </div>
          <p>{ text }</p>
          <div className='view'>
            <span>ver menos</span>
            <UilAngleUp style={{
              color: 'var(--color6)'
            }}/>
            <UilAngleDown />
          </div>
        </div>
    );
}

export default Details;
