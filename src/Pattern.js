import React, { Component } from 'react'

class Pattern extends Component {

    render() {

        return (
            <pattern width='10' height='10' id='p' patternUnits='userSpaceOnUse'>
                <rect width='10' height='10' />
                <rect width='5' height='5' fill='green' />
                <rect width='5' height='5' x='5' y='5' fill='green' />
            </pattern>
        )
    }
}

export default Pattern;