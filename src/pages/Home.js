import React from 'react';
import Navigation from '../components/Navigation';
import Logo from '../assets/LOGO.png';
import Banner from '../components/Banner';


const Home = (props) => {
    return (
        <div>
            <img src={Logo} alt='logo kasa' classname='img-logo' />
            <Navigation />
            <Banner />

            <h1>hello</h1>




            <p>Lorem100
                fjdvpqegupqoeguqpfusdfoisudfopisdufposfu
            </p>
        </div>
    );
};

export default Home;