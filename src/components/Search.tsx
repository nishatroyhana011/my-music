import { type } from '@testing-library/user-event/dist/type';
import React, { useEffect, useState } from 'react';
import MusicCard from './MusicCard';

const Search = () => {

    const [word, setWord] = useState<string>('');
    const [playlistArray, setPlaylistArray]=useState([])
    //for autocomplete
    // const [selectedWord, setSelectedWord] = useState<resultWord[]>([])
     const [tracks, setTracks] = useState<song[]>([])
    // const [artist, setArtist] = useState<artists[]>([])

    //all types
    type resultWord = {
        term: string;
    };

    type song = {
        id:number,
        album: {
            cover:string
        },
        title:string,
    }
   
    //api for auto complete
    // useEffect(() => {
    //     const options = {
    //         method: 'GET',
    //         headers: {
    //             'X-RapidAPI-Key': '53d453230amsh2f18481b59a7e38p16736ajsn80da0bb9c6dd',
    //             'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
    //         }
    //     };

    //     fetch(`https://shazam.p.rapidapi.com/auto-complete?term=${word}`, options)
    //         .then(response => response.json())
    //         .then(response => {
    //             setSelectedWord(response.hints)
    //         })
    //         .catch(err => console.error(err));
    // }, [word])

    const handleChange = (event: any) => {
        setWord(event.target.value)
    }
   
    const handleSearch = () => {
    
    fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${word}`, {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '53d453230amsh2f18481b59a7e38p16736ajsn80da0bb9c6dd',
            'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
        }
    })
    .then(response => response.json())
    .then(data => setTracks(data.data))
    .catch(err => console.error(err));
    }
    useEffect(()=>{
        const list=localStorage.getItem('playlist');
        let listArray=[];
        if (list){
            listArray=JSON.parse(list)
        }
        setPlaylistArray(listArray)
          
    },[])

    return (
        <div className=''>
            <div className='bg-light py-5'>
                <h2 className='text-center fs-1'>My Songs</h2>
                <div className='w-75 mx-auto my-4'>
                    <div className="input-group input-group-lg">
                        <input type="text" onChange={handleChange} value={word} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" placeholder='Search for Songs..' />
                        <button onClick={handleSearch} className="input-group-text" id="inputGroup-sizing-lg">Search</button>
                    </div>
                    {/* <div className='overflow-auto h-25'>
                        {
                            selectedWord.map(word => <p className='bg-white p-2 my-1' onClick={() => { handleSearch(word.term) }}>{word.term}</p>)
                        }
                    </div> */}
                </div>
            </div>
            <div className='container'>
            <div className='row d-flex justify-content-evenly'>
                {
                    tracks?.map((music) => <MusicCard key={music.id} song={music} playlistArray={playlistArray}></MusicCard>)
                }
            </div>
            </div>
        </div>
    );
};

export default Search;