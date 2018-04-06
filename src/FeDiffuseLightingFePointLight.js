import React, { Component } from "react";

class FeDiffuseLightingFePointLight extends Component {

    render() {
        return (

            <feDiffuseLighting
                in={this.props.in}
                result={this.props.result}
                surfaceScale={this.props.surfaceScale}
                diffuseConstant={this.props.diffuseConstant}
                kernelUnitLength={this.props.kernelUnitLength}
                lightingColor={this.props.lightingColor}

            >
                <fePointLight x={this.props.x} y={this.props.y} z={this.props.z} />

            </feDiffuseLighting>
        )
    }
}

export default FeDiffuseLightingFePointLight;