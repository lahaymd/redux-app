import React, { Component } from 'react';

class GradientEditor extends Component {

    render() {

        return (
            <div className='htmlcard label-wrapper2 label'>
                {this.props.attrs.map( (item, index) => {
                    console.log('gradienteditor'+JSON.stringify(item));
                    
                    return (
                        <label key={index} className='html-label-wrapper'> {Object.keys(item)}
                            <input 
                                type={Object.keys(item) == 'gradientTransform' ? 'range': 'text'} 
                                min={Object.keys(item) == 'gradientTransform' ? 0 : null}
                                max={Object.keys(item) == 'gradientTransform' ? 360 : null}
                                step={Object.keys(item) == 'gradientTransform' ? 1 : null}
                                value={Object.values(item)} name={Object.keys(item)} onChange={this.props.changeGradient(item, index)}/>
                        </label>
                    )
                } )
                }
                <button onClick={this.props.createNewLinearGradient()}>Create New Linear Gradient</button>
            </div>
        )
    }
}

export default GradientEditor;