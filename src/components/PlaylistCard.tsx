import React, { useEffect, useState } from 'react';

const PlaylistCard = (props:any) => {
    const [songs, setSongs]=useState([])

    useEffect(()=>{
        const item = localStorage.getItem(props.playlistName)
        let pListSongs = []
        if (item) {
            pListSongs = JSON.parse(item)
        }
        setSongs(pListSongs)
    },[])

    return (
        <div>
            {
                songs.map(song=> <p>{song}</p>)
            }
        </div>
    );
};

export default PlaylistCard;