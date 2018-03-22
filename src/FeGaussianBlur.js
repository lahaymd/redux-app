import React, { Component } from "react";


class FeGaussianBlur extends Component {

    render() {
        return (


            <feGaussianBlur in='SourceGraphic' result='blur' stdDeviation={this.props.deviation} />

        )

    }

}

export default FeGaussianBlur