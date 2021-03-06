import React, {Component} from 'react';

class LinearGradients extends Component {

    
    render() {
        // console.log(this.props);
        
        
        return (
            this.props.gradientData.map( (gradient, index) => {

                return(

            <linearGradient key={index}
                id={gradient.name}
                x1={gradient.x1} 
                x2={gradient.x2} 
                y1={gradient.y1} 
                y2={gradient.y2} 
                spreadMethod={gradient.spreadMethod}
                gradientTransform={`rotate(${gradient.gradientTransform})`}
                gradientUnits={gradient.gradientUnits}
            >
                    {gradient.stops.map( (stop,index) => {
                        return (
                            <stop key={index} offset={stop.offset} stopColor={stop.stopColor} stopOpacity={stop.stopOpacity} />
                        )
                    })}
            </linearGradient>
                )

            })

        )
    }
}

export default LinearGradients