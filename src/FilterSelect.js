import React, {Component} from 'react';


class FilterSelect extends Component {


    render() {


        
        return (
            <select value="" onChange={this.props.selectChange}>
                <option value="" disabled >Choose filter here</option>
                <option value='FeOffset' >FeOffset</option>
                <option value='EdgeDetection'>EdgeDetection</option>
                <option value='FeGaussianBlur'>FeGaussianBlur</option>
                <option value='FeComposite'>FeComposite</option>
            </select>
        )
    }

}

export default FilterSelect;