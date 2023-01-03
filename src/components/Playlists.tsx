import React, { useEffect, useState } from 'react';
import PlaylistCard from './PlaylistCard';

const Playlists = () => {
    const [playlistNames, setPlaylistNames] = useState([]);

    useEffect(() => {

        const item = localStorage.getItem('playlist');
        let pList = [];
        if (item) {
            pList = JSON.parse(item)
        }
        setPlaylistNames(pList)
    }, [])
    const createPlaylist = (event: any) => {
        event.preventDefault()
        const newName = event.target.playlist.value;
        const item = localStorage.getItem('playlist');
        let pList = [];
        if (item) {
            pList = JSON.parse(item)
        }
        pList.indexOf(newName) === -1 ? pList.push(newName) : alert(`"${newName}" exists`);
        setPlaylistNames(pList)
        localStorage.setItem('playlist', JSON.stringify(pList));
    }


    return (
        <div>
            <div className='bg-light py-5'>
                <h2 className='text-center fs-1'>My Playlists</h2>
                <form className='text-end w-50 mx-auto' onSubmit={createPlaylist}>
                <div className="input-group input-group-lg">
                    <input type="text" name='playlist' className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" placeholder='type playlist name' required />

                    <button type='submit' className='bg-info' >Create new playlist</button>
                </div>
            </form>
            </div>
           
            <div className="d-inline-flex p-2 bd-highlight">
                {
                    playlistNames?.map(playlistName => <div className='border card-body p-5 m-2 shadow rounded'>
                        <h3>{playlistName}</h3>
                        <PlaylistCard playlistName={playlistName}></PlaylistCard>

                    </div>)
                }
            </div>

        </div>
    );
};

export default Playlists;