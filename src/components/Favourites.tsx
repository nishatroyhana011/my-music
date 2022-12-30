import React from 'react';

const Favourites = () => {

    type favItems = {
        [key: string]: string,
    };

    const favSongs: favItems = JSON.parse(localStorage.getItem("my-fav") || "")

    return (
        <div>
            <div className='bg-light py-5 '>
                <h2 className='text-center fs-1'>My Favourites</h2>
            </div>
            <div className='w-50 mx-auto'>
                <ul className="list-group">
                    {
                        Object.keys(favSongs).map(k => <li className='list-group-item'> {favSongs[k]}</li>)
                    }  
                </ul>
                
            </div>
        </div>
    );
};

export default Favourites;