import React, {Component} from 'react';

class FeComponentTransfer extends Component {

    render() {

        return (
            <feComponentTransfer in={this.props.in} result={this.props.result}>
                <feFuncR type={this.props.typeR} tableValues={this.props.tableValuesR} />
                <feFuncG type={this.props.typeG} tableValues={this.props.tableValuesG} />
                <feFuncB type={this.props.typeB} tableValues={this.props.tableValuesB} />
                <feFuncA type={this.props.typeA} tableValues={this.props.tableValuesA} />
            </feComponentTransfer>
        )
    }
}

export default FeComponentTransfer