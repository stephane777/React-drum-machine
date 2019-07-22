import React, {Component} from 'react';
import './App.css'
import Drumpads from './Drumpads'

import { SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION } from 'constants';

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            pad: ['Q','W','E','A','S','D','Z','X','C']
        }
    }
    render(){
        return (
            <div id='drum-machine'>
               <div id='display'>
                   
                    <Drumpads />
               </div>
            </div>
        )
    }
}
export default App