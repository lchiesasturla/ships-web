import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router';
import ImageGallery from 'react-image-gallery';

const ShipDetail = () => {
    const [ship, setShip] = useState();
    const [loading, setLoading] = useState(true);
    let { id } = useParams();

    useEffect(() => {
        fetch(`https://ships-web-server.herokuapp.com/ships/${id}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setShip(data);
            setLoading(false);
        });
    }, [])

    
    if(loading) return null;
    
    const { title, desc, photos } = ship;

    return ( 
        <div className='grid grid-cols-2'>
            <div className='col-span-1 p-xl'>
                <ImageGallery items={photos} />
            </div>
            <div className='col-span-1 p-xl'>
                <h2 className='text-4xl font-bold font-sans'>{title}</h2>
                <p className='font-serif mt-md'>{desc}</p>
                <ul className='list-disc mt-xl'>
                    <li className='mt-md'>Propiedad del velero 1:</li>
                    <li className='mt-md'>Propiedad del velero 2:</li>
                    <li className='mt-md'>Propiedad del velero 3:</li>
                    <li className='mt-md'>Propiedad del velero 4:</li>
                    <li className='mt-md'>Propiedad del velero 5:</li>
                    <li className='mt-md'>Propiedad del velero 6:</li>
                    <li className='mt-md'>Propiedad del velero 7:</li>
                    <li className='mt-md'>Propiedad del velero 8:</li>
                    <li className='mt-md'>Propiedad del velero 9:</li>
                    <li className='mt-md'>Propiedad del velero 10:</li>
                </ul>
            </div>
        </div>
    );
}
 
export default ShipDetail;