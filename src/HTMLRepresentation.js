import React, {Component} from 'react';
import EmptyFilter from './EmptyFilter'

class HTMLRepresentation extends Component{

    render() {
       

        let test = React.Children.map(this.props.children, child => {
            console.log('child ', child)
            return (

                <div key={child.key} className='card'>
                <div className="component-name">{child.type.name}</div>
                {Object.keys(child.props).map(c => { 
                  
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
                })}
                
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