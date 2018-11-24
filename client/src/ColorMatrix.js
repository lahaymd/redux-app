import React, {Component} from 'react';

class ColorMatrix extends Component {

    render() {
        console.log(this.props.matrixValues);
        // console.log(this.props.matrixValues.split(''));
        // console.log(this.props.matrixValues.split(' '));
        const newMatrix = typeof this.props.matrixValues == 'string' ? this.props.matrixValues :  `1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0`
        console.log(newMatrix);
        
        
        return (
            <div id='colorMatrix'>
                {this.props.matrixValues.split(' ').map( (item,index) => {
                    return (
                        <label key={index}>
                            <input width='50px' type='number' min='-1' max='1' step='.1' name={index} value={item} onChange={this.props.changeMatrix} />
                            {/* <input size='3'name={index} onChange={this.props.changeMatrix} /> */}
                            <span>{item}</span>
                        </label>
                    )
                })}
            </div>
        )

    }

}

export default ColorMatrix;