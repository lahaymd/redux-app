import React, {Component} from 'react';

class Text extends Component {

    render() {

        return ( 
            <text x='50%' y='15%' style={{fontSize: 100+'px'}} filter='url(#f)' textAnchor='middle'>svg</text>
        )
    }
}

export default Text;