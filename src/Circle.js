import React, {Component} from 'react';

class Circle extends Component {

    render(){
        return (
            <circle onClick={() => this.props.onClick()} cx={this.props.cx} cy='50' r={this.props.rad} filter='url(#f)' fill='red' />
        )
    }

}

export default Circle;