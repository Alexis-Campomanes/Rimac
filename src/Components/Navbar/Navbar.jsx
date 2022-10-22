import React from 'react';
import './Navbar.scss';
import logo from '../../Assets/logo.png';
import { UilPhoneAlt } from '@iconscout/react-unicons'

const Navbar = () => {
    return (
        <div className='navbar'>
          <div className='navbar-conteiner'>
            <img src={ logo } alt="" />
            <div className='call'>
              <UilPhoneAlt style={{
                color: 'var(--color1)'
              }}/>
              <span>Llámanos</span>
            </div>
          </div>
          <hr />   
        </div>
    );
}

export default Navbar;
