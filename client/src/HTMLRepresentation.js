import React, {Component} from 'react';
import EmptyFilter from './EmptyFilter';
import Rect from './Rect';

class HTMLRepresentation extends Component{

    render() {
       

        let test = React.Children.map(this.props.children, (child,idx) => {        
            console.log('child ', child);
            console.log('child key', child.key);
            console.log('i ', idx);
            return (

                <div key={`html${idx}`} className='htmlcard'>
                <div className="component-name">{child.type.name +'Attrs' +child.key}</div>
                    <div className='flex'>
                    <button  onClick={this.props.deleteFilter(child.type.name, child.key)} >delete</button>
                    <button  onClick={this.props.moveUp(child.type.name, child.key)} >up</button>
                    <button  onClick={this.props.moveDown(child.type.name, child.key)} >down</button>
                    <Rect type={child.type.name} props={child.props} filter={`url(#filter${child.key})`} id={'filter'+child.key} >
                       
                    </Rect>
                    </div>
                    <div className='label-wrapper'>
                    {Object.keys(child.props).map((item,i) => {
                        console.log('item::',item);
                        console.log('values:', Object.values(child.props));
                        
                        
                        return (

                            <label className='html-label-wrapper' key={item}>
                                <span>{item}</span>
                                <input   className='input-style' onFocus={this.props.passEl(child.type.name, child.key,idx)} onChange={this.props.changeInputs(child.type.name, child.key)} type='text' name={item} value={Object.values(child.props)[i]} />
                            </label>

                        )
                    })}
                    </div>
                    {/* <div>{child.props.map(item => {
                        return (

                            <label key={Object.keys(item)}>
                                {Object.keys(item)}
                                <input onChange={this.props.changeInputs} type='text' name={Object.keys(item)} value={Object.values(item)} />
                            </label>

                        )
                    })}</div> */}



                {/* {Object.keys(child.props).map(c => { 
                  
                    return (
                        // <div className='object-keys' key={c}>{c}</div>
                        <label key={c} htmlFor={c}>{c}</label>
                            )
                })}
              
                {Object.values(child.props).map((c,i) => { 
                    if(isNaN(c)){ return (
                        // <div className='object-values' key={i}>0</div>
                        <input type='text' value={c} />
                    )}
                    return (
                        <input key={c} type='text' defaultValue={c} />
                        // <div className='object-values' key={c}>{c}</div>
                        
                    )
                })} */}
                
                </div>
            );
        } )
        return (
            <div className='htmlrep'>
                <div className='grid'>
           {test}
            </div>
           {/* <EmptyFilter>{this.props.children}</EmptyFilter> */}
            </div>
        )
    }

}

export default HTMLRepresentation;