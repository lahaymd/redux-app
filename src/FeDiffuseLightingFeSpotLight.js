import React, { Component } from "react";

class FeDiffuseLightingFeSpotLight extends Component {

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
                <feSpotLight
                    x={this.props.x}
                    y={this.props.y}
                    z={this.props.z}
                    pointsAtX={this.props.pointsAtX}
                    pointsAtY={this.props.pointsAtY}
                    pointsAtZ={this.props.pointsAtZ}
                    limitingConeAngle={this.props.limitingConeAngle}
                />

            </feDiffuseLighting>
        )
    }
}

export default FeDiffuseLightingFeSpotLight;