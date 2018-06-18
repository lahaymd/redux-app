import React, { Component } from 'react'

class FeTile extends Component {

    render() {

        return (
            <feTile in={this.props.in} result={this.props.result}  />
        )
    }
}

export default FeTile;