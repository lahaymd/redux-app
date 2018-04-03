import React, { Component } from "react";


class FeComposite extends Component {

    render() {
        return (


            <feComposite operator={this.props.operator} in={this.props.in} in2={this.props.in2} result={this.props.result}  />

        )

    }

}

export default FeComposite