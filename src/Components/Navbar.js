import React from 'react';

const Navbar = () => {
    return (
        <div class="navbar text-white bg-green-600">
            <div class="flex-1">
                <a class="btn btn-ghost normal-case text-xl">daisyUI</a>
            </div>
            <div class="flex-none">
                <div class="flex-none">
                    <ul class="menu menu-horizontal p-0">
                        <li><a>Completed Tasks</a></li>
                        <li><a>To-Do</a></li>
                        <li><a>Calendar</a></li>
                    </ul>
                </div>
                <div class="dropdown dropdown-end">
                    <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                        <div class="w-10 rounded-full">
                            <img src="https://placeimg.com/80/80/people" />
                        </div>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content bg-green-600 mt-3 p-2 shadow  rounded-box w-52">
                        <li className=''>
                            <a class="justify-between">
                                Profile
                                <span class="badge">New</span>
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