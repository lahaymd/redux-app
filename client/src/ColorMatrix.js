import React, {Component} from 'react';

class ColorMatrix extends Component {

    render() {
        console.log(this.props.matrixValues);
        console.log(this.props.matrixValues.split(''));
        console.log(this.props.matrixValues.split(' '));
        const newMatrix = this.props.matrixValues.split(' ')
        
        return (
            <div>
                {this.props.matrixValues.split(' ').map( (item,index) => {
                    return (
                        <label key={index}>
                            <input name={index} onChange={this.props.changeMatrix} />
                            {item}
                        </label>
                    )
                })}
            </div>
        )

    }

}

export default ColorMatrix;