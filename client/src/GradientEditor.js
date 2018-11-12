import React, { Component } from 'react';

class GradientEditor extends Component {

    render() {

        console.log(this.props.attrs);
        let data = [];
        if(this.props.attrs){
            //  data = Object.keys(this.props.attrs).map((item, index, array) => {
            //     console.log(this.props.attrs);

            //     return { [`${item}`]: Object.values(this.props.attrs)[index] }
            // })
            let objectToArray = Object.keys(this.props.attrs).map( (item,index) => {
                return { [`${item}`]: Object.values(this.props.attrs)[index]}
            })
            console.log(objectToArray);
            
            data = Object.keys(this.props.attrs).filter(item => { return item !== 'stops' &&  item !== '_id' && item !== '__v'}).map( (item,index,array) => {
                console.log(this.props.attrs);
                console.log(array);
                // if (item === 'name') { return { id: Object.values(this.props.attrs)[Object.keys(this.props.attrs).findIndex(x => x === item)]}}
                return {[`${item}`]: Object.values(this.props.attrs)[Object.keys(this.props.attrs).findIndex(x => x === item)]}
            })
            console.log(data);
            
    
        
            
        }
        return (
            <div className='htmlcard label-wrapper2 label gradient-editor'>
                { 
                data.map( (item, index) => {
                    // console.log('gradienteditor'+JSON.stringify(item));
                    console.log(this.props.attrs);
                    console.log(this.props.attrs.name);
                    // console.log(Object.values(this.props.attrs[6])[0]);
                    
                    
                    if(Object.keys(item) === 'spreadMethod') {
                        return (
                            <select key={Object.keys(item)} name={Object.keys(item)}  onChange={this.props.changeGradient(item, index)}>
                                <option disabled selected >{Object.keys(item)}</option>
                                <option>pad</option>
                                <option>reflect</option>
                                <option>repeat</option>
                            </select>
                        )
                    } else if(Object.keys(item) === 'gradientUnits') {
                        return (
                            <select key={Object.keys(item)} name={Object.keys(item)}  onChange={this.props.changeGradient(item, index)}>
                                <option disabled selected >{Object.keys(item)}</option>
                                <option>objectBoundingBox</option>
                                <option>userSpaceOnUse</option>
                            </select>
                        )
                    } 
                     else if(Object.keys(item) === 'gradientTransform') {
                        return (
                            <label key={Object.keys(item)} key={index} className='html-label-wrapper'> {Object.keys(item)} : {Object.values(item)}
                            <input 
                                type='range'
                                min='0'
                                max='360'
                                step='1'
                                value={Object.values(item)} name={Object.keys(item)} onChange={this.props.changeGradient(item, index,this.props.attrs.name)}/>
                            </label>
                        )
                    } 
                     else if(Object.keys(item) === 'name') {
                        return (
                            <label key={index} className='html-label-wrapper'> {Object.keys(item)}: {Object.values(item)}
                            {/* <input 
                                type='text'
                                value={Object.values(item)} name={Object.keys(item)} onChange={this.props.changeGradient(item, index)}/> */}
                            </label>
                        )
                    } 
                    else 
                    {

                        return (
                            <label key={index} className='html-label-wrapper'> {Object.keys(item)} : {Object.values(item)}
                            <input 
                                type='range'
                                min='-2'
                                max='2'
                                step='.01'
                                // max={Object.values(this.props.attrs[6])[0] === 'objectBoundingBox' ? 1 : 500}
                                // step={Object.values(this.props.attrs[6])[0] === 'objectBoundingBox' ? .01 : 1}
                                value={Object.values(item)} name={Object.keys(item)} onChange={this.props.changeGradient(item, index)}/>
                            </label>
                                )
                    }
                } )
                }
                <label>
                    new linear gradient name
                    <input type='text' value={this.props.linearGradientName} onChange={this.props.changeLinearGradientName()} />
                </label>
                <button onClick={this.props.createNewLinearGradient()}>Create New Linear Gradient</button>
            </div>
        )
    }
}

export default GradientEditor;