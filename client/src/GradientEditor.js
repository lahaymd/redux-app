import React, { Component } from 'react';

class GradientEditor extends Component {

    render() {

        return (
            <div className='htmlcard label-wrapper2 label'>
                {this.props.attrs.map( (item, index) => {
                    console.log('gradienteditor'+JSON.stringify(item));
                    console.log(this.props.attrs);
                    console.log(Object.values(this.props.attrs[6])[0]);
                    
                    
                    if(Object.keys(item) == 'spreadMethod') {
                        return (
                            <select key={Object.keys(item)} name={Object.keys(item)}  onChange={this.props.changeGradient(item, index)}>
                                <option disabled selected >{Object.keys(item)}</option>
                                <option>pad</option>
                                <option>reflect</option>
                                <option>repeat</option>
                            </select>
                        )
                    } else if(Object.keys(item) == 'gradientUnits') {
                        return (
                            <select key={Object.keys(item)} name={Object.keys(item)}  onChange={this.props.changeGradient(item, index)}>
                                <option disabled selected >{Object.keys(item)}</option>
                                <option>objectBoundingBox</option>
                                <option>userSpaceOnUse</option>
                            </select>
                        )
                    } 
                     else if(Object.keys(item) == 'gradientTransform') {
                        return (
                            <label key={Object.keys(item)} key={index} className='html-label-wrapper'> {Object.keys(item)} : {Object.values(item)}
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
                                max={Object.values(this.props.attrs[6])[0] === 'objectBoundingBox' ? 1 : 500}
                                step={Object.values(this.props.attrs[6])[0] === 'objectBoundingBox' ? .01 : 1}
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