import React, { Component } from 'react'

class RectWithGradient extends Component {

    render() {
        

        return (
            
                <rect id='rect' width='500' height='500'  fill={`url(#${this.props.fill}`} />
           
        )
    }
}

export default RectWithGradient;