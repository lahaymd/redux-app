import React, {Component} from 'react';

class RadialGradient extends Component {

    render() {

        return (
            <radialGradient id='rg'>
                <stop offset="0%" stopColor="white" />
                <stop offset="100%" stopColor="blue" />
            </radialGradient>
        )
    }
}

export default RadialGradient;