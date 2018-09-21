import React, { Component } from 'react'

class Pattern extends Component {

    render() {

        return (
            <defs>

            <pattern width='10' height='10' id='p' patternUnits='userSpaceOnUse'>
                {/* <rect width='10' height='10' /> */}
                <rect width='5' height='5' fill='rgb(0,255,0)' />
                <rect width='5' height='5' x='5' y='5' fill='rgb(255,0,0)' />
                <rect width='5' height='5' x='0' y='5' fill='rgb(0,0,255)' />
                <rect width='5' height='5' x='5' y='0' fill='rgb(128,128,128)' />
            </pattern>
            <pattern  width='100' height='100' id='circle-pattern' patternUnits='userSpaceOnUse'>
                <rect fill="#F7931E" width="100" height="100" />
                <circle fill="#FF0000" stroke="#000000" stroke-miterlimit="10" cx="0" cy="0" r="50" />
                <circle fill="#29ABE2" stroke="#000000" stroke-miterlimit="10" cx="100" cy="0" r="50" />
                <circle fill="#ED1E79" stroke="#000000" stroke-miterlimit="10" cx="0" cy="100" r="50" />
                <circle fill="#D9E021" stroke="#000000" stroke-miterlimit="10" cx="100" cy="100" r="50" />
            </pattern>
            </defs>
        )
    }
}

export default Pattern;