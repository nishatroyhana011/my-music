import React from 'react';

const Search = () => {
    return (
        <div className=''>
            <div className='bg-light py-5'>
                <h2 className='text-center'>My Songs</h2>
                <div className='w-75 mx-auto my-4'>
                    <div className="input-group input-group-lg">
                        <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
                        <button className="input-group-text" id="inputGroup-sizing-lg">Search</button>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Search;