import React from 'react'
import Photo from '../../assets/ship-1.jpg'
import { Link } from 'react-router-dom';

const Card = ({id, photo, title, desc}) => {

    return (  
        <Link to={`/ship/${id}`}>
            <div className='w-400 rounded-lg shadow-xl mt-lg mb-lg border border-gray-200'>
            <img src={Photo} alt='Ship' className='rounded-lg'/>
            <div className='p-md'>
                <h2 className='font-sans font-semibold text-2xl mb-sm'>{title}</h2>
                <p>{desc}</p>
            </div>
        </div>
        </Link>
    );
}
 
export default Card;