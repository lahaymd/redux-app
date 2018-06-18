import React, {Component} from 'react';

class Image extends Component {

    render() {

        return (
            // <image width='500' height='500' href='http://www.mikelahay.com/images/cooper.png' />
            <svg viewBox='0 0 1000 2000' width='100%' preserveAspectRatio='none'>
            {this.props.children}
            </svg>
            
        )
    }

}

export default Image