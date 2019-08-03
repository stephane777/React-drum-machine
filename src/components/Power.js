import React from 'react'
import './power.css'

const Power = (props)=>{
    return (
        <div id='power' className='center'>
            <label htmlFor="power">Power</label>
            <div>
                <input type="checkbox"
                        name="power"
                        checked={props.isOnOff}
                        onChange={props.handleTogglePower}>
                        </input>
            </div>
        </div>
    )
}

export default Power

/*
<label for="cheese">Do you like cheese?</label>
    <input type="checkbox" name="cheese" id="cheese"></input>/*


*/