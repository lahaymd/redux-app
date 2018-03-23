import React, {Component} from 'react';


class FilterSelect extends Component {


    render() {


        
        return (
            <select onChange={this.props.selectChange}>
                <option value='FeOffset' >FeOffset</option>
                <option value='EdgeDetection'>EdgeDetection</option>
                // <option value='FeGaussianBlur'>FeGaussianBlur</option>
            </select>
        )
    }

}

export default FilterSelect;