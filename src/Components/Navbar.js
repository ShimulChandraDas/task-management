import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar text-white bg-green-600">
            <div className="flex-1">
                <NavLink to='/' className="btn btn-ghost normal-case text-xl">Task Managemnet</NavLink>
            </div>
            <div className="flex-none">
                <div className="flex-none">
                    <ul className="menu menu-horizontal p-0">
                        <li><a>Completed Tasks</a></li>
                        <li><NavLink to='/todo'>To-Do</NavLink></li>
                        <li><a>Calendar</a></li>
                    </ul>
                </div>
                <div className="dropdown dropdown-end">
                    <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://placeimg.com/80/80/people" />
                        </div>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content bg-green-600 mt-3 p-2 shadow  rounded-box w-52">
                        <li className=''>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;