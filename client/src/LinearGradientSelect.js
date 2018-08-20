import React, {Component} from 'react';

class LinearGradientSelect extends Component {

    render() {
        // console.log('state' + JSON.stringify(this.props));
        // console.log('names' + JSON.stringify(this.props.names));
        
        return (
            <select onChange={this.props.emitSelectedLinearGradient}>
                <option value="" disabled selected>Linear Gradients</option>
                {this.props.names.map(item => {

                   return (
                        <option key={item} value={item}>{item}</option>

                    )
                    }
                )}
            </select>
        )
    }
}

export default LinearGradientSelect;