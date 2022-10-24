import React from 'react';
import Cobertura from '../Components/Cobertura/Cobertura';
import Navbar from '../Components/Navbar/Navbar';
import Progress from '../Components/Progress/Progress';
import Suma from '../Components/Suma/Suma';
import '../StylePage/Plans.scss'

const Plans = () => {
    return (
        <div className='plans'>
          <Navbar />
          <hr/>
          <Progress />
          <Cobertura />
          <Suma />
        </div>
    );
}

export default Plans;
