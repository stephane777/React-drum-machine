import React, {Component} from 'react';
import './App.css'
import Drumpads from './Drumpads'

const context1 = require.context('../sounds/bulk1', false, /\.wav$/)
const context2 = require.context('../sounds/bulk2', false, /\.wav$/)
const context3 = require.context('../sounds/bulk3', false, /\.wav$/)
const bulk1 = context1.keys().map(file => {
    // console.log(file);
    return require(`../sounds/bulk1/${file.replace(/\.\//,'')}`);
});
const bulk2 = context2.keys().map(file => {
    // console.log(file);
    return require(`../sounds/bulk2/${file.replace(/\.\//,'')}`);
});
const bulk3 = context3.keys().map(file => {
    // console.log(file);
    return require(`../sounds/bulk3/${file.replace(/\.\//,'')}`);
});
const bulkCollection = {
    bulk1,
    bulk2,
    bulk3
}

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            currentBulk: bulkCollection.bulk1,
            currentSong: '',
            isOnOff: true  
        }
        this.handleCurrentSong = this.handleCurrentSong.bind(this)
        this.handleTogglePower = this.handleTogglePower.bind(this)
        
    }
    handleCurrentSong(currentSong){
        this.setState((currentState)=>{
            if (currentState.currentSong !== currentSong) {
                return {
                    currentSong
                }
            }
            
        })
    }
    handleTogglePower(){
        console.log('handleTogglePower')
        this.setState( currentState =>{
            return {
                isOnOff: !currentState.isOnOff,
            }
        })
    }
    render(){
            return (
                <div id='drum-machine'>
                   <div id='main-container'>
                        <Drumpads 
                            currentBulk={this.state.currentBulk}
                            currentSong={this.state.currentSong}
                            isOnOff={this.state.isOnOff}
                            handleCurrentSong={this.handleCurrentSong}
                            handleTogglePower={this.handleTogglePower}
                        />
                   </div>
                </div>
            )
        
        
    }
}
export default App