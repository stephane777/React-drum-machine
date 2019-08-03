import React from 'react'

const CurrentSong = (props) => {
    const style = {
        textAlign: 'center',
        fontWeight: 'bold',
    }
    return (
        <div style={style}>
            <span></span>
            <span id='display'>
                {props.currentSong}
            </span>
        </div>
    )
}

export default CurrentSong