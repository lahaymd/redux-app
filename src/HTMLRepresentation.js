import React, {Component} from 'react';
import EmptyFilter from './EmptyFilter'

class HTMLRepresentation extends Component{

    render() {

        let test = React.Children.map(this.props.children, child => {
            console.log('child ', child)
            return (
                <div className='card'>
                <div className="some-component-special-class">{child.type.name}</div>
                {/* <div>{Object.keys(child.props)} +++ {Object.values(child.props)}</div> */}
                <div>{Object.keys(child.props).map(c => { 
                    return (
                        <div>
                        <div>{c}</div>
                        {/* <div>{Object.keys(c)}</div> */}
                        {/* <div>{Object.values(c)}</div> */}
                            </div>
                    )
                     })}
                </div>
                <div>{Object.values(child.props).map(c => { 
                    return (
                        <div>
                        <div>{c}</div>
                        {/* <div>{Object.keys(c)}</div> */}
                        {/* <div>{Object.values(c)}</div> */}
                            </div>
                    )
                     })}
                </div>
                </div>
            );
        } )
        return (
           <div className='htmlrep'>
           <h1>{test}</h1>
           {/* <EmptyFilter>{this.props.children}</EmptyFilter> */}
            </div>
        )
    }

}

export default HTMLRepresentation;