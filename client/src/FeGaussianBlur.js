import React, { Component } from "react";


class FeGaussianBlur extends Component {

    render() {
        return (


            <feGaussianBlur in={this.props.in} result={this.props.result} stdDeviation={this.props.stdDeviation} />

        )

    }

}

export default FeGaussianBlur