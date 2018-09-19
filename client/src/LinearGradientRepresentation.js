import React, { Component } from 'react';

class LinearGradientRepresentation extends Component {

    render() {


        return (
            <div className='linear-gradient-represtation'>
            {this.props.children}
            </div>
        )
    }

}

export default LinearGradientRepresentation;