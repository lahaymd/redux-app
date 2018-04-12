import React, { Component } from "react";

class FeConvolveMatrix extends Component {

    render() {

        return (
            <feConvolveMatrix 
                in={this.props.in} 
                result={this.props.result} 
                kernelMatrix={this.props.kernelMatrix} 
                divisor={this.props.divisor }
                bias={this.props.bias}
                targetX={this.props.targetX }
                targetY={this.props.targetY}
                edgeMode={this.props.edgeMode}
                kernelUnitLength={this.props.kernelUnitLength} 
                preserveAlpha={this.props.preserveAlpha} 
                order={this.props.order}    
            />
        )
    }
}

export default FeConvolveMatrix;