import React, { Component } from 'react'

class Pattern extends Component {

    render() {

        return (
            <pattern width='10' height='10' id='p' patternUnits='userSpaceOnUse'>
                {/* <rect width='10' height='10' /> */}
                <rect width='5' height='5' fill='rgb(0,255,0)' />
                <rect width='5' height='5' x='5' y='5' fill='rgb(255,0,0)' />
                <rect width='5' height='5' x='0' y='5' fill='rgb(0,0,255)' />
                <rect width='5' height='5' x='5' y='0' fill='rgb(128,128,128)' />
            </pattern>
        )
    }
}

export default Pattern;