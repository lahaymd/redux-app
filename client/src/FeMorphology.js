import React, {Component} from 'react'

class FeMorphology extends Component {

    render() {

        return (
            <feMorphology in={this.props.in} result={this.props.result} operator={this.props.operator} radius={this.props.radius} />
        )
    }
}

export default FeMorphology;