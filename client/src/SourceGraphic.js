import React, { Component } from 'react';

class SourceGraphic extends Component {

    render() {
        console.log(this.props.filter);
        
        let className = '';
        if (this.props.elements && this.props.elements.length && !this.props.filter ) {

            className += 'filter';
        }

        return (
            
                <text 
                    filter={this.props.filter}
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
           
        )
    }
}

export default SourceGraphic;

SourceGraphicAttrs: [{ x: 100 }, { y: 100 }, { fill: '' }, { stroke: '' }]