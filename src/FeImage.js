import React, {Component} from 'react';

class FeImage extends Component {

    render() {

        return (
            <feImage result={this.props.result} href={this.props.image} />
        )
    }
}

export default FeImage;