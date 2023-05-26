import React, { useContext, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const handleSignOut = () => {
        logOut()
            .then(result => { })
            .catch(err => {
                console.log(err);
            })
    }


    return (

        <nav className="bg-primary">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/">
                            <h2 className='font-primary text-white text-3xl md:text-4xl'>PlayNexus</h2>
                        </Link>
                    </div>
                    <ul className='items-center hidden space-x-8 lg:flex'>
                        <li className='text-white text-base font-semibold'><NavLink className={({ isActive }) => isActive ? "text-black" : "text-white"} to="/">Home</NavLink></li>
                        <li className='text-white text-base font-semibold'><NavLink className={({ isActive }) => isActive ? "text-black" : "text-white"} to="/all-toys">All Toys</NavLink></li>
                        {
                            user && <>
                                <li className='text-white text-base font-semibold'><NavLink className={({ isActive }) => isActive ? "text-black" : "text-white"} to="/my-toys">My Toys</NavLink></li>
                                <li className='text-white text-base font-semibold'><NavLink className={({ isActive }) => isActive ? "text-black" : "text-white"} to="/add-toy">Add A Toy</NavLink></li>
                            </>
                        }
                        <li className='text-white text-base font-semibold'><NavLink className={({ isActive }) => isActive ? "text-black" : "text-white"} to="/blogs">Blogs</NavLink></li>
                    </ul>

                    <div className='flex items-center gap-6'>
                        {
                            user && <div className='w-10 h-10'>
                                <img className={user?.photoURL ? "rounded-full" : ""} title={user?.displayName ? user?.displayName : ""} src={user?.photoURL ? user?.photoURL : ""} alt="" />
                            </div>
                        }

                        {
                            user ? <button onClick={handleSignOut} className='font-medium transition duration-200 shadow-md md:mb-0 px-8 py-1 text-lg rounded-full border-transparent border-2 text-black bg-white hidden lg:block'>Log Out</button> :
                                <button onClick={() => navigate('/login')} className='font-medium transition duration-200 shadow-md md:mb-0 px-8 py-1 text-lg rounded-full border-transparent border-2 text-black bg-white hidden lg:block'>Login</button>
                        }



                    </div>

                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={toggleNavbar}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-blue-600 focus:outline-none"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open menu</span>
                            {!isOpen ? (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            <div
                className={`${isOpen ? 'flex' : 'hidden'} md:hidden fixed top-0 left-0 w-full h-screen bg-blue-500 z-10`}
                id="mobile-menu"
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex justify-end">
                        <button
                            onClick={toggleNavbar}
                            type="button"
                            className="text-white hover:text-white focus:outline-none"
                        >
                            <svg
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>

                    <ul className='items-center hidden space-x-8 lg:flex'>
                        <li className='text-white text-base font-semibold'><NavLink className={({ isActive }) => isActive ? "text-black" : "text-white"} to="/">Home</NavLink></li>
                        <li className='text-white text-base font-semibold'><NavLink className={({ isActive }) => isActive ? "text-black" : "text-white"} to="/all-toys">All Toys</NavLink></li>
                        {
                            user && <>
                                <li className='text-white text-base font-semibold'><NavLink className={({ isActive }) => isActive ? "text-black" : "text-white"} to="/my-toys">My Toys</NavLink></li>
                                <li className='text-white text-base font-semibold'><NavLink className={({ isActive }) => isActive ? "text-black" : "text-white"} to="/add-toy">Add A Toy</NavLink></li>
                            </>
                        }
                        <li className='text-white text-base font-semibold'><NavLink className={({ isActive }) => isActive ? "text-black" : "text-white"} to="/blogs">Blogs</NavLink></li>
                    </ul>

                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link
                            onClick={() => setIsOpen(false)}
                            to="/"
                            className="text-white hover:bg-blue-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium border-b border-white"
                        >
                            Home
                        </Link>
                        <Link
                            onClick={() => setIsOpen(false)}
                            to="/all-toys"
                            className="text-white hover:bg-blue-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium border-b border-white"
                        >
                            All Toys
                        </Link>
                        {
                            user && <>
                                <Link
                                    onClick={() => setIsOpen(false)}
                                    to="/my-toys"
                                    className="text-white hover:bg-blue-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium border-b border-white"
                                >
                                    My Toys
                                </Link>
                                <Link
                                    onClick={() => setIsOpen(false)}
                                    to="/add-toy"
                                    className="text-white hover:bg-blue-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium border-b border-white"
                                >
                                    Add A Toy
                                </Link>
                            </>
                        }
                        <Link
                            onClick={() => setIsOpen(false)}
                            to="/blogs"
                            className="text-white hover:bg-blue-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium border-b border-white"
                        >
                            Blogs
                        </Link>

                        {
                            user ? <button onClick={handleSignOut} className='btn-custom block lg:hidden'>Log Out</button> :
                                <button onClick={() => {
                                    setIsOpen(false)
                                    navigate('/login')
                                }} className='btn-custom block lg:hidden'>Login</button>
                        }
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;