import React, { Component } from 'react';

class SourceGraphic extends Component {

    render() {

        return (
            <svg>
                <text x='50%' y='50%' filter='url(#f)'>{this.props.text}</text>
            </svg>
        )
    }
}

export default SourceGraphic;