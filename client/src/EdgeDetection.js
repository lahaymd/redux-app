import React, {Component} from 'react';

class EdgeDetection extends Component {

    render() {
        return (
            <feConvolveMatrix in='comp' result='edge' order="3 3" preserveAlpha="false" kernelMatrix="-1 -1 -1 -1 8 -1 -1 -1 -1" />
        )
    }

}

export default EdgeDetection;