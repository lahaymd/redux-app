import React, { Component } from 'react';

class Gradient extends Component {

    render() {

        return (
            <linearGradient id='lg'
                x1={this.props.x1}
                x2={this.props.x2}
                y1={this.props.y1}
                y2={this.props.y2}
                spreadMethod={this.props.spreadMethod}
                gradientTransform={`rotate(${this.props.gradientTransform})`}
            >
                <stop offset={this.props.offset1} stop-color={this.props.color1} />
                <stop offset={this.props.offset2}  stop-color={this.props.color2} />
            </linearGradient>
        )
    }
}

export default Gradient;