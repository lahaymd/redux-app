import React, { Component } from 'react';

class GradientEditor extends Component {

    render() {

        return (
            <div className='htmlcard label-wrapper2 label'>
                {this.props.attrs.map( (item, index) => {
                    console.log('gradienteditor'+JSON.stringify(item));

                    if(Object.keys(item) == 'spreadMethod') {
                        return (
                            <select name={Object.keys(item)}  onChange={this.props.changeGradient(item, index)}>
                                <option disabled selected >{Object.keys(item)}</option>
                                <option>pad</option>
                                <option>reflect</option>
                                <option>repeat</option>
                            </select>
                        )
                    } else if(Object.keys(item) == 'gradientUnits') {
                        return (
                            <select name={Object.keys(item)}  onChange={this.props.changeGradient(item, index)}>
                                <option disabled selected >{Object.keys(item)}</option>
                                <option>objectBoundingBox</option>
                                <option>userSpaceOnUse</option>
                            </select>
                        )
                    } 
                     else if(Object.keys(item) == 'gradientTransform') {
                        return (
                            <label key={index} className='html-label-wrapper'> {Object.keys(item)} : {Object.values(item)}
                            <input 
                                type='range'
                                min='0'
                                max='360'
                                step='1'
                                value={Object.values(item)} name={Object.keys(item)} onChange={this.props.changeGradient(item, index)}/>
                            </label>
                        )
                    } 
                     else if(Object.keys(item) == 'id') {
                        return (
                            <label key={index} className='html-label-wrapper'> {Object.keys(item)}
                            <input 
                                type='text'
                                value={Object.values(item)} name={Object.keys(item)} onChange={this.props.changeGradient(item, index)}/>
                            </label>
                        )
                    } else {

                        
                        return (
                            <label key={index} className='html-label-wrapper'> {Object.keys(item)} : {Object.values(item)}
                            <input 
                                type='range'
                                min='0'
                                max='1'
                                step='.01'
                                value={Object.values(item)} name={Object.keys(item)} onChange={this.props.changeGradient(item, index)}/>
                            </label>
                                )
                    }
                } )
                }
                <button onClick={this.props.createNewLinearGradient()}>Create New Linear Gradient</button>
            </div>
        )
    }
}

export default GradientEditor;