import React, {Component} from 'react';

// class Circle extends Component {

//     render(){
//         let className = '';
//             if (this.props.elements.length) {

//                 className += 'filter';
//             }

//         return (
//             <circle filter={this.props.filter} className={className} cx='50%' cy='50%' r='200'  fill='url(#p)' />
//         )
//     }

// }

const Circle = (props) => {

            let className = '';
            if (props.elements.length) {

                className += 'filter';
            }

        return (
            <circle filter={props.filter} className={className} cx='50%' cy='50%' r='200'  fill='url(#p)' />
        )

}

export default Circle;