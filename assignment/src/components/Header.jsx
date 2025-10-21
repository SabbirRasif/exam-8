
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';

const Header = () => {
    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Apps', path: '/apps' },
        { name: 'Installation', path: '/installation' },
    ];
    
    const logo = "HERO.IO"; 

    return (
        <header className="shadow-lg bg-white sticky top-0 z-50 border-b border-gray-100">
              <div className="navbar container mx-auto px-4 lg:px-8 py-3 items-center">
                <div className="flex-1">
                    <Link 
                        to="/" 
                   
                        className="btn btn-ghost text-2xl font-black text-primary hover:bg-transparent normal-case p-0 space-x-2"
                    >
                        <img 
                            src="/assets/logo.png" 
                            alt="Hero IO Logo" 
                            className="w-8 h-8 object-contain" 
                        />
                        <span className="text-2xl font-extrabold text-primary">
                            {logo}
                        </span>
                    </Link>
                </div>

                
                <div className="flex items-center h-20">
                   
                    <ul className="menu menu-horizontal px-1 hidden lg:flex space-x-3 justify-around">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <NavLink
                                    to={link.path}
                                    className={({ isActive }) => 
                                        isActive 
                                            ? 'text-primary border-b-2 border-primary font-bold transition duration-150 py-2 px-3' 
                                            : 'text-gray-600 font-medium hover:text-primary transition duration-150 py-2 px-3'
                                    }
                                >
                                    {link.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>

                   
                    <a
                        href="https://github.com/SabbirRasif" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-sm sm:btn-md bg-secondary hover:bg-orange-600 text-white ml-4 rounded-lg font-semibold border-none shadow-md"
                    >
                        <FaGithub className="w-5 h-5" />
                        Contribution
                    </a>

                  
                    <div className="dropdown dropdown-end lg:hidden">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks.map((link) => (
                                <li key={`mobile-${link.name}`}>
                                    <NavLink to={link.path}>{link.name}</NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;