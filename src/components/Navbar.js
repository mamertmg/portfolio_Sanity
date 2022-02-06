import React from 'react';
import {NavLink} from 'react-router-dom';
import {SocialIcon} from 'react-social-icons';

function Navbar() {
  return (
    <header className='bg-gray-300'>
        <div className='container mx-auto flex justify-between'>
            <nav className='flex'>
                <NavLink 
                    to='/' 
                    className='inline-flex items-center mr-4 py-3 px-3 text-black-500 hover:text-black-800 text-4xl font-bold cursive home-made'>
                    Alberto 
                </NavLink>
                <NavLink 
                    to='/post'
                    className='inline-flex items-center py-3 px-3 mr-4 text-gray-500 hover:text-gray-800'>
                    Portfolio
                </NavLink>
                <NavLink 
                    to='/experience' 
                    className='inline-flex items-center py-3 px-3 mr-4 text-gray-500 hover:text-gray-800'>
                    Experience
                </NavLink>
                <NavLink 
                    to='/startups' 
                    className='inline-flex items-center py-3 px-3 mr-4 text-gray-500 hover:text-gray-800'>
                    Startups
                </NavLink>
                <NavLink 
                    to='/about' 
                    className='inline-flex items-center py-3 px-3 mr-4 text-gray-500 hover:text-gray-800'>
                    About Me!
                </NavLink>
            </nav>
            <div className='inline-flex py-3 px-3 my-3'>
                <SocialIcon 
                    url="https://linkedin.com/in/marquezalberto" 
                    fgColor="#fff" 
                    style={{height: 35, width: 35}} 
                    className='mr-1' 
                    target="_blank"/>
                <SocialIcon 
                    url="https://github.com/mamertmg" 
                    fgColor="#fff" 
                    style={{height: 35, width: 35}} 
                    className='mr-1' 
                    target="_blank"/>
                <SocialIcon 
                    url="mailto:marquezgarcia.a@gmail.com" 
                    fgColor="#fff" 
                    style={{height: 35, width: 35}} 
                    className='mr-1' 
                    target="_blank"/>
            </div>
        </div>
    </header>
  );
}

export default Navbar;
