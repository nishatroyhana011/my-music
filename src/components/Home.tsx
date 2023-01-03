import React, { useState } from 'react';
import './view.css';

const Home = () => {

    type favItems = {
        [key: string]: string,
    };

    const favSongs: favItems = JSON.parse(localStorage.getItem("my-fav") || "")

    return (
        <div>
            <div className='bg-light py-5 '>
                <h2 className='text-center fs-1'>Home</h2>
                <h4>Welcome! user</h4>
            </div>
            <div>

            </div>
            <div className=' mx-auto'>
                <h4>My Faourites</h4>
                <div className="d-inline-flex p-2 bd-highlight">
                    {
                        Object.keys(favSongs).map(k => <div className='border card-body p-5 m-2 shadow rounded'> {favSongs[k]}</div>)
                    }  
                </div>
                
            </div>
           
        </div>
    );
};

export default Home;