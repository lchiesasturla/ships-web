import React, { useState } from 'react'
import Logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
    
    const [navItems, setNavItems] = useState([
        {name: 'Nuestro catalogo', link: ''},
        {name: 'Contactanos', link: ''},
    ]);

    const NavItem = ({name, link}) => {
        return (
            <li className='ml-md font-semibold'>
                <Link to={link}>
                    {name}
                </Link>
            </li>
        );
    }

    return ( 
        <header className='h-16vh flex items-center'>
            <img src={Logo} alt='Logo' className='w-96 h-96 ml-sm'/>
            <ul className='flex flex-row ml-auto mr-xl'>
                {navItems.map(item => (
                    <NavItem name={item.name} link={item.link}/>
                ))}
            </ul>
        </header>
    );
}
 
export default Header;