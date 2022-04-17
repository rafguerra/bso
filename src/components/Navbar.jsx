import React, {useState} from 'react';
import Logo from '../assets/bso_logo.png';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
import {Link} from 'react-scroll';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => setNav(!nav);
  return (
    <div className='flex h-24 items-center max-w-[1240px] mx-auto px-4 justify-between'>
        <img src={Logo} alt="Logo image" style={{width: '140px'}}/>
        <ul className='hidden md:flex'>
            <Link to="home" smooth={true} offset={50} duration={800}>
                <li className='p-4 font-bold'>HOME</li>
            </Link>
            <Link to="story" smooth={true} offset={50} duration={800}>
                <li className='p-4 font-bold'>HIS STORY</li>
            </Link>
            <Link to="about" smooth={true} offset={50} duration={800}>
                <li className='p-4 font-bold'>ABOUT</li>
            </Link>
            <Link to="deeper" smooth={true} offset={50} duration={800}>
                <li className='p-4 font-bold'>GO DEEPER</li>
            </Link>
            <Link to="contact" smooth={true} offset={50} duration={800}>
                <li className='p-4 font-bold'>CONTACT</li>
            </Link>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
            {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/> }
        </div>
        <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 text-white bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
            <h1 className='w-full text-3xl font-bold text-[#FFF] m-4'>BSO MINISTRY</h1>
            <li className='p-4 font-bold border-b border-gray-600'>HOME</li>
            <li className='p-4 font-bold border-b border-gray-600'>HIS STORY</li>
            <li className='p-4 font-bold border-b border-gray-600'>ABOUT</li>
            <li className='p-4 font-bold border-b border-gray-600'>GO DEEPER</li>
            <li className='p-4 font-bold border-b border-gray-600'>CONTACT</li>
        </ul>
    </div>
  )
}

export default Navbar