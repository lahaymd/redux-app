import React, { Component } from "react";


class EmptyFilter extends Component {
  
state ={
    total: React.Children.count(this.props.children)
}
    render() {



        return (

            <filter width='200%' height='200%' data-total={React.Children.count(this.props.children)} id='empty-filter'>
                    {this.props.children}
                    
                </filter>
    

        )

    }

}

export default EmptyFilter