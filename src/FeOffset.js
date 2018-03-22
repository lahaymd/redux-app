import React, { Component } from "react";


class FeOffset extends Component {

    render() {
        return (

          
                <feOffset result='offset' dx={this.props.offsetX} dy={this.props.offsetY} />
          
        )

    }

}

export default FeOffset