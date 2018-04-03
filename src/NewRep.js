import React, { Component } from "react";


class NewRep extends Component {

   
    render() {

        let childs = React.Children.map(this.props.children, child => {
            console.log('childdprops ', this.props.children)
            console.log('childd ', child)
           
            
            
            return <div>{child.type.name}</div>
        })

        return(childs)
    }

}

export default NewRep