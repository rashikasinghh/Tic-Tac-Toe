import React, { Component } from 'react'

export default class TictacSelection extends Component {
    state = {
        typeSelection : null,
        message: null
    }

    typeSelectionHandler = () => {
        if (this.state.typeSelection) {
            this.props.typeSelection(this.state.typeSelection)
        } else {
            this.setState({message: "Please select."})
        }
    }
    render() {
        return (
            <div>
                <div className="radio-button">
                    <p className="p-button" style={{display:"block"}}>X</p>
                    <input type="radio" value="X" name="selection" onClick={() => this.setState({typeSelection:'X'})}/>
                </div>
                
                <div className="radio-button">
                    <p className="o-button" style={{display:"block"}}>O</p>
                    <input type="radio" value="O" name="selection" onClick={() => this.setState({typeSelection:'O'})}/>
                </div>
                <div>
                    <button className="btn btn-white" onClick={this.typeSelectionHandler}>Continue</button>
                </div>
                <div>{this.state.message}</div>
            </div>
        )
    }
}
