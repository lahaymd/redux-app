import React, {Component} from 'react'

class Rect extends Component {

    render() {
        console.log('proptype',this.props.type.charAt(0).toLowerCase());
        console.log(`${this.props.type[0].toLowerCase()}${this.props.type.slice(1)}`);
        const str = `${this.props.type[0].toLowerCase()}${this.props.type.slice(1)}`
        
        
        const filter = React.createElement(str,this.props.props)

        return (
            <svg width='50' height='50' >
                <filter id={this.props.id}>
                    {/* <feGaussianBlur stdDeviation='2' /> */}
                    {filter}
                </filter>
                <rect width='30' height='30' x='10' y='10' filter={this.props.filter} />
            </svg>
        )
    }
}

export default Rect;