import React, { Component } from 'react'

class FeFlood extends Component {

    render() {

        return (
            <feFlood in={this.props.in} result={this.props.result} flood-color={this.props.floodColor} flood-opacity={this.props.floodOpacity} />
        )
    }
}

export default FeFlood;