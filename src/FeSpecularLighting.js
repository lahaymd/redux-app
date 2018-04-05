import React, { Component } from "react";

class FeSpecularLighting extends Component {

    render() {

        return (
            <feSpecularLighting
                in={this.props.in} 
                result={this.props.result}  
                surfaceScale={this.props.surfaceScale}
                specularConstant={this.props.specularConstant}
                specularExponent={this.props.specularExponent}
                kernelUnitLength={this.props.kernelUnitLength}
                lighting-color={this.props.lightingColor}
             >
                <fePointLight x={this.props.x} y={this.props.y} z={this.props.z} />

             </feSpecularLighting>
        )
    }
}

export default FeSpecularLighting;