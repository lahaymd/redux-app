import React, { Component } from 'react';

class ConcatFilters extends Component {

    render() {
        console.log('state' + JSON.stringify(this.props));
        console.log('names' + JSON.stringify(this.props.names));

        return (
            <select onChange={this.props.emitSelectedFilterName}>
                <option value="" disabled selected>Concat Filters</option>
                {this.props.names.map(item => {

                    return (
                        <option key={item} value={item}>{item}</option>

                    )
                }
                )}
            </select>
        )
    }
}

export default ConcatFilters;