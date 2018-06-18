import React, { Component } from "react";

class FeSpecularLightingFeDistantLight extends Component {

    render() {

        return (
            <feSpecularLighting
                in={this.props.in}
                result={this.props.result}
                surfaceScale={this.props.surfaceScale}
                specularConstant={this.props.specularConstant}
                specularExponent={this.props.specularExponent}
                kernelUnitLength={this.props.kernelUnitLength}
                lightingColor={this.props.lightingColor}

            >
                <feDistantLight
                    azimuth={this.props.azimuth}
                    elevation={this.props.elevation}
                />

            </feSpecularLighting>
        )
    }
}

export default FeSpecularLightingFeDistantLight;