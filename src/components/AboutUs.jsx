import React from 'react'
import AboutUsImage from '../assets/about-us.jpg';

const AboutUs = () => {
    return ( 
        <div className='h-480 grid grid-cols-2'>
        <img className='col-span-1 w-100perc' src={AboutUsImage} alt='About us'/>
        <div className='col-span-1 bg-black flex flex-col justify-center p-xl'>
            <h2 className='font-bold font-sans text-4xl text-white'>Quienes somos?</h2>
            <p className='font-sans text-2xl italic text-white mt-lg'>Somos una empresa que busca revolucionar el mercado de veleros mediante una amplia experiencia en el rubro para ofrecerte comodidad, facilidad y los mejores valores del mercado.</p>
        </div>
    </div>
    );
}
 
export default AboutUs;