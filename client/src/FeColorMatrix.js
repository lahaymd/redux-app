import React, {Component} from 'react';

class FeColorMatrix extends Component {

    render() {

        return (
            <feColorMatrix type={this.props.type} values={this.props.values} in={this.props.in} result={this.props.result} />
        )
    }
}

export default FeColorMatrix;