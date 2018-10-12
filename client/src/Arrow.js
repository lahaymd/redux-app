import React from 'react';

const Arrow = (props) => {

    console.log(props);
    
    return (
        <div id='up' onClick={props.move}>
            <svg viewBox='-10 -10 120 120' >
                <defs>
                    <filter id="arrow" color-interpolation-filters="sRGB" width="200%" height="200%"><feGaussianBlur result="blur" stdDeviation="3,3"></feGaussianBlur><feDiffuseLighting result="diffuseDistant" lighting-color="green" surfaceScale="7" diffuseConstant="2"><feDistantLight azimuth="0" elevation="12"></feDistantLight></feDiffuseLighting><feMorphology result="morph" operator="dilate" radius="3,3" in="SourceGraphic"></feMorphology><feComposite result="composite" operator="in" k1="0" k2="1" k3="1" k4="0" in="diffuseDistant"></feComposite></filter>
                </defs>
                <g filter='url(#arrow)' transform={`rotate(${props.transform} 50 50)`} stroke='green' stroke-width='15' strokeLinecap='square'>
                    <line x1='50' y1='0' x2='50' y2='100' strokeLinecap='butt' />
                    <line x1='0' y1='50' x2='50' y2='0' />
                    <line x1='50' y1='0' x2='100' y2='50' />
                </g>

            </svg>
        </div>
    )
}

export default Arrow;