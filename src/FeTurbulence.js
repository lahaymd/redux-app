import React, {Component} from 'react';

class FeTurbulence extends Component {

    render() {

        return (
            <feTurbulence
                in={this.props.in}
                result={this.props.result}
                baseFrequency={this.props.baseFrequency}
                numOctaves={this.props.numOctaves}
                seed={this.props.seed}
                type={this.props.type}
                stitchTiles={this.props.stitchTiles}
            />
        )
    }
}

export default FeTurbulence