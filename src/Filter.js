import React, { Component } from "react";
import FeOffset from './FeOffset';
import FeGaussianBlur from './FeGaussianBlur';
import EdgeDetection from "./EdgeDetection";

class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numberOfCircles: [0, 1],
            radius: [10, 9],
            items: ['foo', 'bar', 'baz'],
            circs: [30, 20],
            cx: [50, 100],
            elements: ['FeOffset', 'FeGaussianBlur'],
            offsetX: 10,
            offsetY: 10,
            offsetElement: [5, 20]
        }
    }

    handleFilterElements() {
        const elements = this.state.offsetElement.slice();
        elements.push(2)
        console.log('elements', elements)
        this.setState({ offsetElement: elements });
    }


    render(){

        let offset = this.state.offsetElement.map(e => {
            return (
                <FeOffset key={e * Math.random()} offsetX={this.state.offsetX} offsetY={this.state.offsetY} />
            )
        })

       

            
        
        return (
                <div>
                <button onClick={() => this.handleFilterElements()}>add filter</button>
                <filter width='200%' height='200%' id='f'>
                    {/* <FeOffset offsetX={this.state.offsetX} offsetY={this.state.offsetY} /> */}
                    {offset}
                    <FeGaussianBlur deviation='1' />
                    <feComposite operator='over' result='comp' in='blur' in2='offset' />
                    <EdgeDetection/>
                    <feComposite operator='in' result='comp' in='comp' in2='edge' />
                </filter>
                </div>
                
        )

    }

}

export default Filter