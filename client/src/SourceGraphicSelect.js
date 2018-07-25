import React, { Component } from 'react';


class SourceGraphicSelect extends Component {


    render() {



        return (
            <select value="" onChange={this.props.selectSourceGraphic}>
                <option value="" disabled >Choose SourceGraphic here</option>
                <option value='circle' >circle</option>
                <option value='text'>text</option>
                <option value='image'>image</option>
                <option value='webcam'>webcam</option>
            </select>
        )
    }

}

export default SourceGraphicSelect;