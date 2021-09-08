import React from 'react'
import Logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
    
    const navItems = [
        {name: 'Inicio', link: '/'},
        {name: 'Nuestro catalogo', link: '/ships'},
    ];

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
            <Link to='/'><img src={Logo} alt='Logo' className='w-96 h-96 ml-sm'/></Link>
            <ul className='flex flex-row ml-auto mr-xl'>
                {navItems.map(item => (
                    <NavItem name={item.name} link={item.link}/>
                ))}
            </ul>
        </header>
    );
}
 
export default Header;