import React, { useState, useEffect } from 'react'
import Card from '../components/layout/Card';
import Spinner from '../components/layout/Spinner';

const Ships = () => {

    const [ships, setShips] = useState()
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://ships-web-server.herokuapp.com/ships`)
            .then(response => response.json())
            .then(data => {
                setShips(data);
                setLoading(false);
            });
    }, [])

    if (loading) return <Spinner />;

    return (
        <div className='container mx-auto'>
            <h1 className='font-sans font-semibold text-3xl'>Nuestro catalogo</h1>
            <div className='grid grid-cols-3'>
                {ships.map(ship => (
                    <div className='col-span-1 flex justify-center'>
                        <Card key={ship.id} id={ship.id} title={ship.title} desc={ship.desc} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Ships;