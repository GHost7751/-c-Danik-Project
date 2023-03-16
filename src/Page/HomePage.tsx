import React from 'react';
import CarouselFadeExample from '../Components/Carousel/Carousel';
import InfoHomePage from '../Components/InfoHomePage/InfoHomePage';
const HomePage = () => {
    return (
        <>
        <div className='content container'>
            <CarouselFadeExample />
            <br />
            <InfoHomePage />
        </div>
        </>
    );
};

export default HomePage;