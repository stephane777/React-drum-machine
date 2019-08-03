import React from 'react'
import Aux from './Aux'
import './Drumpad.css'


const Drumpad = (props) => {

    return (
        <Aux>
            <button
                onClick={(e) => props.handleTrigger(e, props.value, props.uniqueId)}
                className="drum-pad"
                id={props.uniqueId}>
                {props.value}
                <audio id={props.value} 
                        className='clip'
                     src={props.sound} type="audio/wav">
                </audio>
            </button>


        </Aux>
    )
}

export default Drumpad