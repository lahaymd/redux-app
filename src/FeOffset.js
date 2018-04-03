import React, { Component } from "react";


class FeOffset extends Component {

    render() {
        return (

          
                <feOffset in={this.props.in} result={this.props.result} dx={this.props.dx} dy={this.props.dy} />
          
        )

    }

}

export default FeOffset