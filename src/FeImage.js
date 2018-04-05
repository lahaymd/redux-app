import React, {Component} from 'react';

class FeImage extends Component {

    render() {

        return (
            <feImage result={this.props.result} x={this.props.x} y={this.props.y} width={this.props.width} height={this.props.height} preserveAspectRatio={this.props.par} href={this.props.image}/>
        )
    }
}

export default FeImage;