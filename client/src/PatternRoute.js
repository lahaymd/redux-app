import React, { Component } from 'react';
import Pattern from './Pattern';

class PatternRoute extends Component {

    constructor(props) {
        super(props);
        this.state = {
            viewBoxX: 0,
            viewBoxY: 0,
            viewBoxWidth: 100,
            viewBoxHeight: 100,
            x: 0,
            y: 0,
            width: .25,
            height: .25,
            ratio: 'none',
            patternUnits: 'objectBoundingBox',
            patternContentUnits: 'userSpaceOnUse'

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

    handlePatternUnits = e => {
        this.setState({patternUnits: e.target.value})
    }

    handlePatternContentUnits = e => {
        this.setState({patternContentUnits: e.target.value})
    }

    handleSize = e => {
        this.setState({[`${e.target.id}`] : e.target.value})
    }



    render() {

        return (
            <div>
                <input type='text' onChange={this.handleSize} id='width' />width
                <input type='text' onChange={this.handleSize} id='height' />height  
                <input type='range' min='.01' max='1' step='.01' onChange={this.handleSize} id='width' />width
                <input type='range' min='.01' max='1' step='.01' onChange={this.handleSize} id='height' />height  
                <input type='range' min='-1' max='1' step='.01' onChange={this.handleViewBox} id='x' />x
                <input type='range' min='-1' max='1' step='.01' onChange={this.handleViewBox} id='y' />y
                <input type='range' min='1' max='200' step='1' onChange={this.handleViewBox} id='width' />width
                <input type='range' min='1' max='200' step='1' onChange={this.handleViewBox} id='height' />height
                <input type='text'  onChange={this.handleViewBox} id='x' />x
                <input type='text'  onChange={this.handleViewBox} id='y' />y
                <input type='text'  onChange={this.handleViewBox} id='width' />width
                <input type='text'  onChange={this.handleViewBox} id='height' />height
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
                <select onChange={this.handlePatternUnits}>
                    <option disabled selected >patternUnits</option>
                    <option>objectBoundingBox</option>
                    <option>userSpaceOnUse</option>
                </select>
                <select onChange={this.handlePatternContentUnits}>
                    <option disabled selected >patternContentUnits</option>
                    <option>userSpaceOnUse</option>
                    <option>objectBoundingBox</option>
                </select>
                <svg width='500' height='500'>
                    <defs>
                        <pattern viewBox={`${this.state.viewBoxX} ${this.state.viewBoxY} ${this.state.viewBoxWidth} ${this.state.viewBoxHeight}`} preserveAspectRatio={this.state.ratio} x={this.state.x} y={this.state.y} width={this.state.width} height={this.state.height} id='circles' patternUnits={this.state.patternUnits} patternContentUnits={this.state.patternContentUnits}>
                            <rect fill="#F7931E" width="1000" height="1000" x='-500' y='-500' />
                            <circle fill="#FF0000" stroke="#000000" stroke-miterlimit="10" cx="0" cy="0" r="50" />
                            <circle fill="#29ABE2" stroke="#000000" stroke-miterlimit="10" cx="100" cy="0" r="50" />
                            <circle fill="#ED1E79" stroke="#000000" stroke-miterlimit="10" cx="0" cy="100" r="50" />
                            <circle fill="#D9E021" stroke="#000000" stroke-miterlimit="10" cx="100" cy="100" r="50" />
                        </pattern>
                    </defs>
                    {/* <Pattern/> */}
                    <rect width='500' height='500' fill='url(#circles)'/>
                </svg>
            </div>

        )
    }
}

export default PatternRoute;