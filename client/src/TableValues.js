import React, {Component} from 'react';

class TableValues extends Component {

    render() {
        console.log(this.props.tableValues);
        console.log(this.props.tableValues.split(' '));
        
        return (
            <div>
                <input type='range' min='1' max='256' step='1' name='changeNumberOfTableValues' onChange={this.props.changeNumberOfTableValues} />
            {this.props.tableValues.split(' ').map( (item, index) => {
                return (
                    <div>
                        <label key={index}>
                            {/* <input type='range' min='-1' max='1' step='.1' name={index} onChange={this.props.changeTableValues} /> */}
                            <input name={index} onChange={this.props.changeTableValues} />
                            {item}
                        </label>
                    </div>
                )
            })}
            </div>
        )
    }
}


export default TableValues;