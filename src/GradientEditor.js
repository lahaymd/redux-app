import React, { Component } from 'react';

class GradientEditor extends Component {

    render() {

        return (
            <div className='htmlcard label-wrapper2 label'>
                {this.props.attrs.map( (item, index) => {
                    return (
                        <label className='html-label-wrapper'> {Object.keys(item)}
                            <input value={Object.values(item)} name={Object.keys(item)} onChange={this.props.changeGradient(item, index)}/>
                        </label>
                    )
                } )
                }
            </div>
        )
    }
}

export default GradientEditor;