import React from 'react';
import './Navbar.scss';
import logo from '../../Assets/Logo RIMAC.svg'
import { UilPhoneAlt } from '@iconscout/react-unicons'

const Navbar = () => {
    return (
          <div className='navbar'>
            <img src={ logo } alt="" />
            <div className='call'>
              <span>¿Tienes alguna duda?</span>
              <UilPhoneAlt style={{
                color: 'var(--color1)'
              }}/>
              <span>Llámanos</span>
              <span>(01) 411 6001</span>
            </div>
          </div>
    );
}

export default Navbar;
