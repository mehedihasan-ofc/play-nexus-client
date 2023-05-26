import React from 'react';
import Hero from '../Hero/Hero';
import Gallery from '../Gallery/Gallery';
import ShopByCategory from '../ShopByCategory/ShopByCategory';
import Review from '../Review/Review';
import Facility from '../Facility/Facility';
import useSetTitle from '../../../hooks/useSetTitle';
import DiscountTime from '../DiscountTime/DiscountTime';

const Home = () => {

    useSetTitle('Home');

    return (
        <>
            <Hero></Hero>
            <Facility></Facility>
            <Gallery></Gallery>
            <ShopByCategory></ShopByCategory>
            <DiscountTime></DiscountTime>
            <Review></Review>
        </>
    );
};

export default Home;