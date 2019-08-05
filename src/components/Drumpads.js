import React, { Component } from 'react'
import Drumpad from './Drumpad'
import './Drumpads.css'
import CurrentSong from './CurrentSong';
import Power from './Power'
import SwitchBulk from './SwitchBulk';

// const context = require.context('../sounds/bulk1', false, /\.wav$/)
// const bulk1 = context.keys().map(file => {
//     // console.log(file);
//     return require(`../sounds/bulk1/${file.replace(/\.\//,'')}`);
// });
class Drumpads extends Component {
    constructor(props) {
        super(props)
        this.keys = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];
        this.handleTrigger = this.handleTrigger.bind(this)
        this.keyDownEvent = this.keyDownEvent.bind(this)
        this.keyAndFilename = this.keyAndFilename.bind(this)
        // this.handleCurrentSong = this.props.handleCurrentSong.bind(this)
    }


    handleTrigger(e, val, currentSong) {
        if (this.props.isOnOff) {
            e.preventDefault();
            e.stopPropagation();
            const el = document.getElementById(val)
            this.props.handleCurrentSong(currentSong)
            el.play();
        }
    }
    keyAndFilename() {
        const keyAndFilename = []
        const currentBulk = this.props.currentBulk

        Array.prototype.forEach.call(this.keys, (key, i) => {
            const id = currentBulk[i].replace(/\.wav/, '')
            keyAndFilename.push({ [key]: id })
        })
        return keyAndFilename
    }


    keyDownEvent(obj) {
        document.addEventListener('keydown', event => {
            if (this.props.isOnOff) {
                const char = String.fromCharCode(event.keyCode)
                // const indexCurrentSong = obj.findIndex(el=> Object.keys(el)[0] === char)
                if (this.keys.indexOf(char) > -1) {
                    // this.handleTrigger(event, char,obj[indexCurrentSong][char])
                    const pads = document.getElementById('pads')
                    pads.childNodes.forEach(child => {
                        if (child.innerText === char) {
                            child.click()
                            child.classList.toggle('active')
                            setTimeout(() => {
                                child.classList.toggle('active')
                            }, 200)
                        }
                    })
                }
            }

        })


    }

    componentDidMount() {
        const keyAndFilename = this.keyAndFilename();
        this.keyDownEvent(keyAndFilename);
    }

    render() {

        const pads = this.keys.map((key, i) => {
            const currentBulk = this.props.currentBulk
            const id = currentBulk[i].replace(/\.wav/, '')
            return <Drumpad
                key={key}
                value={key}
                isDisabled={this.props.isOnOff}
                sound={currentBulk[i]}
                uniqueId={id}
                handleTrigger={this.handleTrigger}
                handleCurrentSong={this.props.handleCurrentSong}
            />
        })
        return (
            <div id='container'>
                <div id="pads">{pads}</div>
                {/* <div id='controller'>
                    <Power handleTogglePower={this.props.handleTogglePower}
                           isOnOff={this.props.isOnOff}
                    />
                    <CurrentSong 
                          currentSong={this.props.currentSong}
                    />
                    <SwitchBulk />
                    
                </div> */}
            </div>

        )
    }

}

export default Drumpads