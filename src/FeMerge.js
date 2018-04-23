import React, {Component} from 'react';

class FeMerge extends Component {

    render() {
console.log('node in', this.props.in);

        // let mergenode = this.props.in.map((el,idx) => {

        //     return  <feMergeNode in={el} />
        // })

        return (
            <feMerge>
                {/* {mergenode} */}
                <feMergeNode in={this.props.in} />
                <feMergeNode in={this.props.in2} />
                <feMergeNode in={this.props.in3} />
                <feMergeNode in={this.props.in4} />
            </feMerge>
        )
    }
}

export default FeMerge;