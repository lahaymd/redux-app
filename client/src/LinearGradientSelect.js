import React, {Component} from 'react';
import LinearGradientIcon from './LinearGradientIcon';

class LinearGradientSelect extends Component {

    render() {
        // console.log('state' + JSON.stringify(this.props.grad));
        // console.log('names' + JSON.stringify(this.props.names));
        
        return (
            <div style={{color: 'yellowGreen'}}>
            <LinearGradientIcon  gradient={Object.values(this.props.grad)[0]}/>
            <select id='gradientSelect' onChange={this.props.emitSelectedLinearGradient}>
                {/* <option value="" disabled selected>Linear Gradients</option> */}
                {this.props.names.map((item, index) => {
                    // console.log(index);
                    
                    return (
                        <option key={item} id={index} value={item}>{item}</option>
                        
                        )
                    }
                    )}
            </select>
            </div>
        )
    }
}

export default LinearGradientSelect;