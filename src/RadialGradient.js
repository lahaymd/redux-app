import React, {Component} from 'react';

class RadialGradient extends Component {

    render() {

        return (
            <radialGradient id='rg'>
                <stop offset="0%" stop-color="white" />
                <stop offset="100%" stop-color="blue" />
            </radialGradient>
        )
    }
}

export default RadialGradient;