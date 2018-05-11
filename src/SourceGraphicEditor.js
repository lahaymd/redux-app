import React, { Component } from 'react';
import SourceGraphic from './SourceGraphic';

class SourceGraphicEditor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            SourceGraphicAttrs: [{ x: 100 }, { y: 100 }, { fill: '' }, { stroke: '' }]
           
        }
    }

    render() {

    
        return (

            <div id='SourceGraphicEditor' className='htmlcard label-wrapper2 label'>
                <label className='html-label-wrapper' >
                    <span>text</span>
                <input className='input-style' type='text' value={this.props.text} onChange={this.props.changeText} />
                </label>
                {this.props.attrs.map((item,index) => {
                    // console.log('object keys', Object.keys(this.state.SourceGraphicAttrs));
                        // console.log('item', item);
                        // console.log('index', index);
                        
                    return (

                        <label className='html-label-wrapper' key={Object.keys(item)} >
                            <span>{Object.keys(item)}</span>
                            <input className='input-style' onChange={this.props.changeSource(item, index)} name={Object.keys(item)}  value={Object.values(item)} />
                        </label>
                    )
                })}

                {/* <SourceGraphic  text={this.state.text}/> */}


                    
               
            </div>
           
        )
    }
}

export default SourceGraphicEditor;