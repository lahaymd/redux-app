import React, { Component } from "react";

class FeConvolveMatrix extends Component {

    render() {

        return (
            <feConvolveMatrix in={this.props.in} result={this.props.result} kernelMatrix={this.props.kernelMatrix} />
        )
    }
}

export default FeConvolveMatrix;