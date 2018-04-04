import React, {Component} from 'react';

class FeBlend extends Component {

    render() {

        return (
            <feBlend in={this.props.in} in2={this.props.in2} mode={this.props.mode} />
        )
    }
}

export default FeBlend;