import React, { Component } from 'react'

export class UserSelection extends Component {
    render() {
        return (
            <div className="button-inline">
            <div>
                <p className="p-button">X</p>
                <p className="o-button">O</p>
            </div>
            <div className="info">Choose your Play Mode.</div>
            
            <div>
                <button className="btn btn-primary" onClick={() => this.props.playMode('withAI')}>With AI</button>
            </div>
            <div>
                <button className="btn btn-white" onClick={() => this.props.playMode('withFriend')}>With a friend</button>
            </div>
            </div>
        )
    }
}

export default UserSelection
