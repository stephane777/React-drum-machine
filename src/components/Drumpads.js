import React, {Component} from 'react'
import Drumpad from './Drumpad'
import './Drumpads.css'

const Drumpads = (props)=>{
    const keys = ['Q','W','E','A','S','D','Z','X','C'];
    const pads = keys.map(key=>{
        return <Drumpad key={key} value={key} />
    })
    return (
        <div id='container'>
            <div id="pads">{pads}</div>
            <div id='controler'></div>
        </div>
        
    )
}

export default Drumpads