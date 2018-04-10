import React, { Component } from "react";


class FeComposite extends Component {

    render() {
        return (


            <feComposite
                operator={this.props.operator}
                k1={this.props.k1}
                k2={this.props.k2}
                k3={this.props.k3}
                k4={this.props.k4} 
                in={this.props.in} 
                in2={this.props.in2} 
                result={this.props.result}  />

        )

    }

}

export default FeComposite