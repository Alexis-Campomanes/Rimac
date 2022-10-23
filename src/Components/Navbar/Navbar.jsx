import React from 'react';
import './Navbar.scss';
import logo from '../../Assets/Logo RIMAC.svg'
import { UilPhoneAlt } from '@iconscout/react-unicons'

const Navbar = () => {
    return (
          <div className='navbar'>
            <img src={ logo } alt="" />
            <div className='call'>
              <UilPhoneAlt style={{
                color: 'var(--color1)'
              }}/>
              <span>Llámanos</span>
            </div>
          </div>
    );
}

export default Navbar;
