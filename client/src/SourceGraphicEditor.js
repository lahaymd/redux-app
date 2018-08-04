import React, { Component } from 'react';
import SourceGraphic from './SourceGraphic';

class SourceGraphicEditor extends Component {


    render() {

    
        return (
            <div className={this.props.showSourceGraphicEditor ? '' : 'hideSourceGraphicEditor'}>
            <div id='SourceGraphicEditor' className={`htmlcard label-wrapper2 label`} >
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
           </div>
        )
    }
}

export default SourceGraphicEditor;