import React, {Component} from 'react';

class StopAdder extends Component {

    render() {

        return (

            <div>

                <input type='text'  name='offset' onChange={this.props.addStop()}/>
                <input type='text' name='stopColor' onChange={this.props.addStop()}/>
                <input type='text' name='stopOpacity' onChange={this.props.addStop()}/>
                <button onClick={this.props.pushStop()} >Submit</button>
            </div>

        )
    }
}

export default StopAdder;