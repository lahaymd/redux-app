import React, { Component } from 'react';

class SourceGraphic extends Component {

    render() {

        let className = '';
        if (this.props.elements.length ) {
    
            className += 'filter';
        }

        return (
            <svg>
                <text 
                    x={this.props.x} 
                    y={this.props.y} 
                    fill={this.props.fill} 
                    stroke={this.props.stroke} 
                    strokeWidth={this.props.strokeWidth} 
                    paintOrder={this.props.paintOrder} 
                    className={className}
                    fontSize={this.props.fontSize}
                    textLength={this.props.textLength}
                    lengthAdjust={this.props.lengthAdjust}
                    textAnchor={this.props.textAnchor}
                    textAnchor={this.props.textAnchor}
                    alignmentBaseline={this.props.alignmentBaseline}
                    >{this.props.text}</text>
            </svg>
        )
    }
}

export default SourceGraphic;

SourceGraphicAttrs: [{ x: 100 }, { y: 100 }, { fill: '' }, { stroke: '' }]