import React, { Fragment } from 'react';

import Landing from '../components/Landing';
import GalleryWithText from '../components/GalleryWithText';
import AboutUs from '../components/AboutUs';

const Home = () => {

    return ( 
        <Fragment>
            <Landing/>
            <GalleryWithText/>
            <AboutUs/>
        </Fragment>
    );
}
 
export default Home;