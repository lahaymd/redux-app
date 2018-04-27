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
                <input className='inputMargin' type='text' value={this.props.text} onChange={this.props.changeText} />
                  
                {this.props.attrs.map((item,index) => {
                    // console.log('object keys', Object.keys(this.state.SourceGraphicAttrs));
                        console.log('item', item);
                        console.log('index', index);
                        
                    return (

                        <label key={Object.keys(item)} >
                            {Object.keys(item)}
                            <input onChange={this.props.changeSource(item, index)} name={Object.keys(item)}  value={Object.values(item)} />
                        </label>
                    )
                })}

                {/* <SourceGraphic  text={this.state.text}/> */}


                    
               
            </div>
           
        )
    }
}

export default SourceGraphicEditor;