import React, { Component } from "react";


class FeOffset extends Component {

    render() {
        return (

          
                <feOffset result='offset' dx={this.props.offsetX || 0} dy={this.props.offsetY} />
          
        )

    }

}

export default FeOffset