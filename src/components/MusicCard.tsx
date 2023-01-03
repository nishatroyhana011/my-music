import React, { useEffect, useState } from 'react';

type musicProps = {
    playlistArray:Array<any>,
    song: {
        id: number,
        album: {
            cover: string
        },
        title: string,
    },
};
type favItems = {
    [key: string]: string,
};
function MusicCard(props: musicProps) {
    const [fav, setFav] = useState<object>({});
    const [str, setStr] = useState<string>("");
    
    
    const handleFav = (id: number, name: string) => {

        const strId = id.toString();
        setStr(strId);
        const item = localStorage.getItem('my-fav');
        let favItems: favItems = {};
        if (item) {
            favItems = JSON.parse(item)
        }
        strId in favItems ? delete favItems[strId] : favItems[strId] = name;
        setFav(favItems)
        localStorage.setItem('my-fav', JSON.stringify(favItems));
    }

    const addToPlaylist=(pListName:string)=>{
        const item=localStorage.getItem(pListName)
        let songs=[];
        if(item){
            songs=JSON.parse(item)
        }
        songs.indexOf(props.song.title)===-1?songs.push(props.song.title):alert(`Already added to this list`);
        localStorage.setItem(pListName,JSON.stringify(songs));
    }


    return (
        <div className='col-6 col-md-4 col-lg-3 text-center m-2 pt-4 shadow-sm border rounded-3'>
            <img src={props.song.album.cover} alt="" />
            <h5>{props.song.title}</h5>
            <div className='d-flex justify-content-evenly py-4 border-top'>
                <i className={`fa-star fs-3  ${str in fav ? "fa-solid" : "fa-regular"}`} onClick={() => { handleFav(props.song.id, props.song.title) }}></i>
                <div className='dropdown'>
                    <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Add to playlist
                    </button>
                    <div>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        {
                            props.playlistArray.map(p=>  <li className="dropdown-item" onClick={()=>addToPlaylist(p)}>{p}</li>)
                        }
                       
                    </ul>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default MusicCard;