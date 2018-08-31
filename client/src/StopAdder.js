import React, {Component} from 'react';

class StopAdder extends Component {

    render() {

        return (

            <div>
                <label>
                    Offset
                <input type='text'  name='offset' onChange={this.props.addStop()}/>
                </label>
                <label>
                    Stop Color
                <input type='text' name='stopColor' onChange={this.props.addStop()}/>
                </label>
                <label>
                    Stop Opacity
                <input type='text' name='stopOpacity' onChange={this.props.addStop()}/>
                </label>
                <button onClick={this.props.pushStop()} >Submit</button>
            </div>

        )
    }
}

export default StopAdder;