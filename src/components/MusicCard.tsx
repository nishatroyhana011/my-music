import React, { useState } from 'react';

type musicProps = {
    
    song : {
        id:number,
        album: {
            cover:string
        },
        title:string,
    }
};
type favItems = {
    [key: string]: string,
};
function MusicCard(props: musicProps) {
    const [fav,setFav]=useState<object>({});
    const [str,setStr]=useState<string>("");

    const handleFav = (id:number, name:string) =>{
        
        const strId = id.toString();
        setStr(strId);
        const item = localStorage.getItem('my-fav');
        let favItems:favItems= {};
        if(item){
           favItems = JSON.parse(item)
        }
        strId in favItems? delete favItems[strId] : favItems[strId]=name;
        setFav(favItems)
        localStorage.setItem('my-fav', JSON.stringify(favItems));
    }

    
    return (
        <div className='col-6 col-md-4 text-center pt-5 shadow-sm'>
            <img src={props.song.album.cover} alt="" />
            <h5>{props.song.title}</h5>
            <div className=''>
            <p>{props.song.id}</p>
            <i className={`fa-star fs-3  ${str in fav? "fa-solid":"fa-regular"}`} onClick={()=>{handleFav(props.song.id,props.song.title)}}></i>
            </div>
        </div>
    );
}

export default MusicCard;