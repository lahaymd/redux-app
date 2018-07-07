import React, { Component } from 'react';

class Gradient extends Component {

    render() {

        return (
            <linearGradient id={this.props.id} 
                x1={this.props.x1}
                x2={this.props.x2}
                y1={this.props.y1}
                y2={this.props.y2}
                spreadMethod={this.props.spreadMethod}
                gradientTransform={`rotate(${this.props.gradientTransform} 250 250)`}
            >
                {this.props.children}
            </linearGradient>
        )
    }
}

export default Gradient;