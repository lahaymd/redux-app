import React, { Component } from "react";


class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numberOfElements: 0,
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


    render() {


    



        return (

                <filter width='200%' height='200%' id='f'>
                <FeGaussianBlur result='' deviation='1' />
                <feComposite result='comp' operator='over' in='blur' in2='offset' />
                <EdgeDetection result='' />
                <feComposite result='' operator='out' in2='offset' in='edge' />
                </filter>


        )

    }

}

export default Filter