import React from 'react'
import './currentSong.css'

const CurrentSong = (props) => {
    const style = {
        textAlign: 'center',
        fontWeight: 'bold',
    }
    return (
        <div id="currentSong" style={style}>
            <span id='display'>
                {props.currentSong}
            </span>
        </div>
    )
}

export default CurrentSong