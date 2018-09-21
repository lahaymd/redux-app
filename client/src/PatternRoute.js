import React, { Component } from 'react';
import Pattern from './Pattern';

class PatternRoute extends Component {

    constructor(props) {
        super(props);
        this.state = {
            x: 0,
            y: 0,
            width: 100,
            height: 100,
            ratio: 'none'

        }
    }

    handleViewBox = e => {
        console.log(e.target.id);
        console.log(e.target.value);
        this.setState({[`${e.target.id}`]: e.target.value})
        
    }

    handleRatio = e => {
        this.setState({ratio: e.target.value})
    }



    render() {

        return (
            <div>
                <input type='range' min='-200' max='200' step='1' onChange={this.handleViewBox} id='x' />
                <input type='range' min='-200' max='200' step='1' onChange={this.handleViewBox} id='y' />
                <input type='range' min='1' max='200' step='1' onChange={this.handleViewBox} id='width' />
                <input type='range' min='1' max='200' step='1' onChange={this.handleViewBox} id='height' />
                <select onChange={this.handleRatio} >
                    <option>none</option>
                    <option>xMinYMin meet</option>
                    <option>xMinYMin slice</option>
                    <option>xMinYMid meet</option>
                    <option>xMinYMid slice</option>
                    <option>xMinYMax meet</option>
                    <option>xMinYMax slice</option>
                    <option>xMidYMin meet</option>
                    <option>xMidYMin slice</option>
                    <option>xMidYMid meet</option>
                    <option>xMidYMid slice</option>
                    <option>xMidYMax meet</option>
                    <option>xMidYMax slice</option>
                    <option>xMaxYMin meet</option>
                    <option>xMaxYMin slice</option>
                    <option>xMaxYMid meet</option>
                    <option>xMaxYMid slice</option>
                    <option>xMaxYMax meet</option>
                    <option>xMaxYMax slice</option>
                </select>
                <svg width='500' height='500'>
                    <defs>
                        <pattern viewBox={`${this.state.x} ${this.state.y} ${this.state.width} ${this.state.height}`} preserveAspectRatio={this.state.ratio} width='100' height='100' id='circles' patternUnits='userSpaceOnUse'>
                            <rect fill="#F7931E" width="100" height="100" />
                            <circle fill="#FF0000" stroke="#000000" stroke-miterlimit="10" cx="0" cy="0" r="50" />
                            <circle fill="#29ABE2" stroke="#000000" stroke-miterlimit="10" cx="100" cy="0" r="50" />
                            <circle fill="#ED1E79" stroke="#000000" stroke-miterlimit="10" cx="0" cy="100" r="50" />
                            <circle fill="#D9E021" stroke="#000000" stroke-miterlimit="10" cx="100" cy="100" r="50" />
                        </pattern>
                    </defs>
                    <Pattern/>
                    <rect width='500' height='500' fill='url(#circles)'/>
                </svg>
            </div>

        )
    }
}

export default PatternRoute;