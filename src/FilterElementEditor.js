import React, { Component } from "react";


class FilterElementEditor extends Component {

    render() {
        return (
        <div className='container'>
            <div className='offsetCard'>
                    <label>dx:<input type='text' value={this.props.offsetX} onChange={ this.props.onChangeX}></input></label>
                    <label>dy:<input type='text' value={this.props.offsetY} onChange={this.props.onChangeY}></input></label>
            </div>
            <div className='filterCardsContainer'>
                <label>dx:<input type='text'></input></label>
                <label>dy:<input type='text'></input></label>
            </div>
        </div>

        )

    }

}

export default FilterElementEditor