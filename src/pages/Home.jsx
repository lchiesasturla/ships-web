import React, { Fragment } from 'react';

import Landing from '../components/Landing';
import GalleryWithText from '../components/GalleryWithText';
import AboutUs from '../components/AboutUs';
import Contact from '../components/Contact';

const Home = () => {

    return ( 
        <Fragment>
            <Landing/>
            <GalleryWithText/>
            <AboutUs/>
            <Contact/>
        </Fragment>
    );
}
 
export default Home;