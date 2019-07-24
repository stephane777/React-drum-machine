import React from 'react'
import './Drumpad.css'
import Sound  from '../audio/fx-spindown.wav'

const Drumpad = (props)=> {

    return (
        <button className="drum-pad" id='pad'>{props.value}</button>
    )
}

export default Drumpad