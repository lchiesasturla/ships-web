import React from 'react'
import ShipOneImage from '../assets/ship-1.jpg';
import ShipTwoImage from '../assets/ship-2.jpg';
import ShipThreeImage from '../assets/ship-3.jpg';

const GalleryWithText = () => {
    return ( 
        <div className='h-100vh p-xl container mx-auto grid grid-cols-2 flex flex-col items-center justify-center'>
            <div className='col-span-1 p-xl'>
                <h2 className='font-sans font-bold text-4xl'>
                    Contamos con veleros de excelente calidad
                </h2>
                <p className='font-serif mt-md text-xl'>
                Nuestros veleros poseen excelentes terminaciones, cuidados, detalles e historia. Además, ofrecemos variedad en tamaños, capacidades y colores adaptándonos al gusto de cada uno de nuestros clientes.
                </p>
            </div>
            <div className='col-span-1'>
                <img src={ShipOneImage} alt="Ship" className='w-48perc float-left rounded-xl'/>
                <img src={ShipTwoImage} alt="Ship" className='w-48perc ml-auto rounded-xl'/>
                <img src={ShipThreeImage} alt="Ship" className='w-100perc mt-4perc rounded-xl'/>
            </div>
        </div>
    );
}
 
export default GalleryWithText;