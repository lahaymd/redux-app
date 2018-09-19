import React, { Component } from 'react';

class RadialGradients extends Component {


    render() {
        // console.log(this.props);


        return (
            this.props.gradientData.map((gradient, index) => {

                return (

                    <radialGradient key={index}
                        id={gradient.name}
                        cx={gradient.cx}
                        cy={gradient.cy}
                        r={gradient.r}
                        fx={gradient.fx}
                        fy={gradient.fy}
                        fr={gradient.fr}
                        spreadMethod={gradient.spreadMethod}
                        gradientTransform={`rotate(${gradient.gradientTransform})`}
                        gradientUnits={gradient.gradientUnits}
                    >
                        {gradient.stops.map((stop, index) => {
                            return (
                                <stop key={index} offset={stop.offset} stopColor={stop.stopColor} stopOpacity={stop.stopOpacity} />
                            )
                        })}
                    </radialGradient>
                )

            })

        )
    }
}

export default RadialGradients