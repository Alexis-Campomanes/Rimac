import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Tracking from '../Components/Tracking/Tracking';
import Date from '../Components/date/Date';
import '../StylePage/Home.scss'
import Footer from '../Components/Footer/Footer';


const Home = () => {
    return (
        <div className='Home'>
            <Navbar />
          <div className='h-conteiner'>
            <Tracking />
            <Date />
          </div>
          <Footer />
        </div>
    );
}

export default Home;
