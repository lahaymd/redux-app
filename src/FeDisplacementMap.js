import React, {Component} from 'react'

class FeDisplacementMap extends Component {

    render() {

        return (
            <feDisplacementMap in={this.props.in} in2={this.props.in2} result={this.props.result} xChannelSelector={this.props.xChannelSelector} yChannelSelector={this.props.yChannelSelector} scale={this.props.scale}/>
        )
    }
}

export default FeDisplacementMap