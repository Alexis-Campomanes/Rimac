import React from 'react';
import './Progress.scss';
import { UilAngleLeft } from '@iconscout/react-unicons'

const Progress = () => {
    return (
        <div className='progress'>
          <div className='arrow'>
            <UilAngleLeft style={{ color: 'var(--color13)'}} />
          </div>
          <span>paso 2 de 2</span>
          <progress id="file" max="100" value="100"> 100% </progress> 
        </div>
    );
}

export default Progress;
