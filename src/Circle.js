import React, {Component} from 'react';

class Circle extends Component {

    render(){
        return (
            <circle onClick={() => this.props.onClick()} cx='50%' cy='50%' r='200' filter='url(#f)' fill='url(#p)' />
        )
    }

}

export default Circle;