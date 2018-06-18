import React, {Component} from 'react';

class FeComponentTransfer extends Component {

    render() {

        return (
            <feComponentTransfer in={this.props.in} result={this.props.result}>
                <feFuncR 
                    type={this.props.typeR} 
                    tableValues={this.props.tableValuesR}
                    slope={this.props.slopeR}
                    intercept={this.props.interceptR}
                    amplitude={this.props.amplitudeR}
                    exponent={this.props.exponentR}
                    offset={this.props.offsetR}
                
                />
                <feFuncG 
                    type={this.props.typeG} 
                    tableValues={this.props.tableValuesG}
                    slope={this.props.slopeG}
                    intercept={this.props.interceptG}
                    amplitude={this.props.amplitudeG}
                    exponent={this.props.exponentG}
                    offset={this.props.offsetG}
                
                />
                <feFuncB 
                    type={this.props.typeB} 
                    tableValues={this.props.tableValuesB}
                    slope={this.props.slopeB}
                    intercept={this.props.interceptB}
                    amplitude={this.props.amplitudeB}
                    exponent={this.props.exponentB}
                    offset={this.props.offsetB}
                
                />
                <feFuncA 
                    type={this.props.typeA} 
                    tableValues={this.props.tableValuesA}
                    slope={this.props.slopeA}
                    intercept={this.props.interceptA}
                    amplitude={this.props.amplitudeA}
                    exponent={this.props.exponentA}
                    offset={this.props.offsetA}
                
                />
            </feComponentTransfer>
        )
    }
}

export default FeComponentTransfer