import React, {Component} from 'react';

class Text extends Component {

    render() {

        return ( 
            <text x='100' y='50%' style={{fontSize: 100+'px'}} filter='url(#f)'>svg</text>
        )
    }
}

export default Text;