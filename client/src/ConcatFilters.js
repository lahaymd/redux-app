import React, { Component } from 'react';

const ConcatFilters = (props) => {
        return (
            <select onChange={props.emitSelectedFilterName}>
                <option value="" disabled selected>Concat Filters</option>
                {props.names.map(item => {

                    return (
                        <option key={item} value={item}>{item}</option>

                    )
                }
                )}
            </select>
        )
    
}

export default ConcatFilters;