import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className='my-auto'>
            <ul className="list-unstyled mx-5">
                <li><Link className='text-white text-decoration-none fs-5' to='/'>Home</Link></li>
                <li><Link className='text-white text-decoration-none fs-5' to='/search'>Search</Link></li>
                <li><Link className='text-white text-decoration-none fs-5' to='/playlist'>Playlist</Link></li>
                <li><Link className='text-white text-decoration-none fs-5' to='/favourite'>Favourites</Link></li>
            </ul>
        </div>
    );
};

export default Sidebar;