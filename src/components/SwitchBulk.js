import React from 'react'
import './SwitchBulk.css'

const SwitchBulk = (props)=>{
    return (
  
        <div id='switchBulk' className='center'>
            <label htmlFor="switchBulk">Bank</label>
            <div>
                <input type="checkbox"
                        name="switchBulk"
                        checked={props.isChecked}
                        onChange={props.handleSwitchBank}>
                        </input>
            </div>
        </div>
        
    )
}
export default SwitchBulk

