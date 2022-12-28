import React from 'react';

type musicProps = {
    
    song : {
        id:number,
        album: {
            cover:string
        },
        title:string,
    }
};

function MusicCard(props: musicProps) {
    
    return (
        <div className='col-sm-3 text-center pt-5 shadow-sm'>
            <img src={props.song.album.cover} alt="" />
            <h5>{props.song.title}</h5>
            <div>
            
            <i className="fa-regular fa-star"></i>
            </div>
        </div>
    );
}

export default MusicCard;