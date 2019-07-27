import React from 'react'
import Aux from './Aux'
import './Drumpad.css'


const handleclick = ()=>{
    const myAudio = document.getElementById('myAudio')
    myAudio.play()
}
const Drumpad = (props)=> {

    return (
        <Aux>
             <button 
                onClick={()=>handleclick()} 
                className="drum-pad" 
                id={props.uniqueId}>
                {props.value}
                </button>
            
             <audio id={props.value}>
               <source src={props.sound} type="audio/wav"/>
             </audio>
        </Aux>
    )
}

export default Drumpad