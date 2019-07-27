import React, {Component} from 'react'
import Drumpad from './Drumpad'
import './Drumpads.css'

const Drumpads = (props)=>{
    const keys = ['Q','W','E','A','S','D','Z','X','C'];
    const context = require.context('../sounds/bulk2', false, /\.wav$/)
    const bulk1 = context.keys().map(file => {
        // console.log(file);
        return require(`../sounds/bulk2/${file.replace(/\.\//,'')}`);
    });
    const pads = keys.map((key,i)=>{
        const id = bulk1[i].replace(/\.wav/,'')
        return <Drumpad 
                    key={key}
                    value={key}
                    sound={bulk1[i]}
                    uniqueId={id}/>
    })
    return (
        <div id='container'>
            <div id="pads">{pads}</div>
            <div id='controler'></div>
        </div>
        
    )
}

export default Drumpads