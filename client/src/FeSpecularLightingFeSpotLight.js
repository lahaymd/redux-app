import React, { Component } from "react";

class FeSpecularLightingFeSpotLight extends Component {

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
                <feSpotLight 
                    x={this.props.x}
                    y={this.props.y}
                    z={this.props.z}
                    pointsAtX={this.props.pointsAtX}
                    pointsAtY={this.props.pointsAtY}
                    pointsAtZ={this.props.pointsAtZ}
                    limitingConeAngle={this.props.limitingConeAngle}
                />

            </feSpecularLighting>
        )
    }
}

export default FeSpecularLightingFeSpotLight;