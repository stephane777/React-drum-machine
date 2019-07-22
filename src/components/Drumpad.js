import React from 'react'
import './Drumpad.css'

const Drumpad = (props)=> {
    return (
        <button className="drum-pad" id='pad'>{props.value}</button>
    )
}

export default Drumpad