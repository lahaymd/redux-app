import React, { Component } from "react";

class FeDiffuseLightingFeDistantLight extends Component {

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
                <feDistantLight
                    azimuth={this.props.azimuth}
                    elevation={this.props.elevation}
                />

            </feDiffuseLighting>
        )
    }
}

export default FeDiffuseLightingFeDistantLight;