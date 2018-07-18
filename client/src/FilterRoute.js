import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import RouterTest from './RouterTest';
import Filter from './Filter';
import Circle from './Circle';
import SourceGraphic from './SourceGraphic';
import SourceGraphicEditor from './SourceGraphicEditor';
import FeOffset from './FeOffset';
import FeGaussianBlur from './FeGaussianBlur';
import FilterElementEditor from './FilterElementEditor';
import HTMLRepresentation from './HTMLRepresentation'
import EdgeDetection from "./EdgeDetection";
import EmptyFilter from './EmptyFilter';
import FilterSelect from './FilterSelect';
import './App.css';
import RenderSelectedElementCard from './RenderSelectedElementCard';
import FeComposite from './FeComposite';
import FeMerge from './FeMerge';
import FeMorphology from './FeMorphology';
import FeImage from './FeImage';
import FeTile from './FeTile';
import FeFlood from './FeFlood';
import FeBlend from './FeBlend';
import FeColorMatrix from './FeColorMatrix';
import FeDisplacementMap from './FeDisplacementMap';
import FeTurbulence from './FeTurbulence';
import FeComponentTransfer from './FeComponentTransfer';
import FeConvolveMatrix from './FeConvolveMatrix';
import FeDiffuseLightingFePointLight from './FeDiffuseLightingFePointLight.js';
import NewRep from './NewRep';
import Pattern from './Pattern';
import FeSpecularLightingFePointLight from './FeSpecularLightingFePointLight';
import FeSpecularLightingFeSpotLight from './FeSpecularLightingFeSpotLight';
import FeSpecularLightingFeDistantLight from './FeSpecularLightingFeDistantLight';
import FeDiffuseLightingFeSpotLight from './FeDiffuseLightingFeSpotLight';
import FeDiffuseLightingFeDistantLight from './FeDiffuseLightingFeDistantLight';
import Text from './Text';
import RadialGradient from './RadialGradient';
import SourceGraphicSelect from './SourceGraphicSelect';
import Gradient from './Gradient';
import LinearGradientRepresentation from './LinearGradientRepresentation';
import GradientEditor from './GradientEditor';
import Image from './Images';
import  StopAdder from "./StopAdder";
import RectWithGradient from './RectWithGradient';
import LinearGradients from './LinearGradients';
import LinearGradientSelect from './LinearGradientSelect';
import FilterNameSelect from './FilterNameSelect';
import FilterMenu from './FilterMenu'

class FilterRoute extends Component {

    constructor(props) {
        super(props);
        this.state = {
            numberOfCircles: [1],
            radius: [10, 100],
            cx: [50, '50%'],
            elements: [],
            stops: [],
            linearGradients: [],
            offset: '',
            stopColor: '',
            stopOpacity: '',
            blurAttrs: [{ stdDeviation: 0 }, { in: '' }, { result: 'blur' }],
            EdgeDetectionAttrs: [{ type: 'matrix' }, { values: '-1 -1 -1 -1 8 -1 -1 -1 -1' }, { in: '' }, { result: 'edge' }],
            FeGaussianBlurAttrs: [{ stdDeviation: 1 }, { in: '' }, { result: 'blur' }],
            FeOffsetAttrs: [{ dx: 0 }, { dy: 0 }, { in: '' }, { result: 'offset' }],
            FeCompositeAttrs: [{ operator: 'over' }, { in: '' }, { in2: '' }, { k1: 0 }, { k2: 1 }, { k3: 1 }, { k4: 0 }, { result: 'composite' }],
            FeMorphologyAttrs: [{ operator: 'dilate' }, { in: '' }, { radius: 2 }, { result: 'morph' }],
            FeFloodAttrs: [{ floodOpacity: '1' }, { in: '' }, { floodColor: 'coral' }, { result: 'flood' }],
            FeImageAttrs: [{ result: 'image' }, { x: 0 }, { y: 0 }, { width: 500 }, { height: 500 }, { par: 'none' }, { image: 'https://cdn.cnn.com/cnnnext/dam/assets/150807073434-donald-trump-gop-debate-thumbs-up-august-6-full-169.jpg' }],
            FeTileAttrs: [{ result: 'image' }, { in: '' }],
            FeBlendAttrs: [{ in: '' }, { in2: '' }, { mode: 'normal' }, { result: 'blend' }],
            FeColorMatrixAttrs: [{ in: '' }, { values: `1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0` }, { type: 'matrix' }, { result: 'colormatrix' }],
            FeDisplacementMapAttrs: [{ in: '' }, { in2: '' }, { xChannelSelector: 'R' }, { yChannelSelector: 'R' }, { scale: 5 }, { result: 'displace' }],
            FeTurbulenceAttrs: [{ in: '' }, { result: 'displace' }, { baseFrequency: .005 }, { numOctaves: 5 }, { seed: 0 }, { type: 'turbulence' }, { stitchTiles: 'stitch' }],
            FeComponentTransferAttrs: [{ in: '' }, { result: 'transfer' }, { typeR: 'discrete' }, { tableValuesR: '' }, { typeG: 'discrete' }, { tableValuesG: '' }, { typeB: 'discrete' }, { tableValuesB: '' }, { typeA: 'discrete' }, { tableValuesA: '' }, { slopeR: '' }, { interceptR: '' }, { exponentR: '' }, { amplitudeR: '' }, { offsetR: '' }, { slopeG: '' }, { interceptG: '' }, { exponentG: '' }, { amplitudeG: '' }, { offsetG: '' }, { slopeB: '' }, { interceptB: '' }, { exponentB: '' }, { amplitudeB: '' }, { offsetB: '' }, { slopeA: '' }, { interceptA: '' }, { exponentA: '' }, { amplitudeA: '' }, { offsetA: '' }],
            FeConvolveMatrixAttrs: [{ in: '' }, { result: 'convolve' }, { kernelMatrix: '-1 -1 -1 -1 8 -1 -1 -1 -1' }, { divisor: 1 }, { bias: 0 }, { targetX: 2 }, { targetY: 2 }, { edgeMode: 'duplicate' }, { kernelUnitLength: 1 }, { preserveAlpha: false }, { order: 3 }],
            FeSpecularLightingFePointLightAttrs: [{ x: 400 }, { y: 300 }, { z: 100 }, { in: '' }, { result: 'specpoint' }, { lightingColor: 'red' }, { surfaceScale: 1 }, { specularConstant: 1 }, { specularExponent: 20 }, { kernelUnitLength: 1 }],
            FeSpecularLightingFeSpotLightAttrs: [{ limitingConeAngle: 30 }, { pointsAtX: 0 }, { pointsAtY: 0 }, { pointsAtZ: 30 }, { x: 500 }, { y: 400 }, { z: 0 }, { in: '' }, { result: 'specspot' }, { lightingColor: 'red' }, { surfaceScale: 1 }, { specularConstant: 1 }, { specularExponent: 1 }, { kernelUnitLength: 1 }],
            FeSpecularLightingFeDistantLightAttrs: [{ azimuth: 0 }, { elevation: 0 }, { in: '' }, { result: 'specspot' }, { lightingColor: 'yellow' }, { surfaceScale: 20 }, { specularConstant: 2 }, { specularExponent: 4 }, { kernelUnitLength: 1 }],
            FeDiffuseLightingFePointLightAttrs: [{ x: 400 }, { y: 300 }, { z: 10 }, { in: '' }, { result: 'specpoint' }, { lightingColor: 'red' }, { surfaceScale: 1 }, { diffuseConstant: 1 }, { kernelUnitLength: 1 }],
            FeDiffuseLightingFeSpotLightAttrs: [{ limitingConeAngle: 30 }, { pointsAtX: 0 }, { pointsAtY: 0 }, { pointsAtZ: 30 }, { x: 500 }, { y: 400 }, { z: 20 }, { in: '' }, { result: 'specspot' }, { lightingColor: 'yellow' }, { surfaceScale: 2 }, { diffuseConstant: 2 }, { kernelUnitLength: 1 }],
            FeDiffuseLightingFeDistantLightAttrs: [{ azimuth: 0 }, { elevation: 10 }, { in: '' }, { result: 'specspot' }, { lightingColor: 'yellow' }, { surfaceScale: 1 }, { diffuseConstant: 2 }, { kernelUnitLength: 1 }],
            offsetX: 1,
            offsetY: 0,
            offsetElement: [5, 20],
            results: [],
            foo: 'FeOffset',
            inc: 0,
            attrIndex: [],
            nameOfEls: [],
            FeMergeAttrs: [{ in: 'foo' }, { in2: 'bar' }, { in3: 'baz' }, { in4: '' }, { result: '' }],
            SourceGraphicAttrs: [{x: '50%'}, {y:'50%'}, {fill:''}, {stroke:''}, {strokeWidth: 1}, {paintOrder: 'stroke'}, {fontSize: 400}, {textLength: 500}, {lengthAdjust: 'spacingAndGlyphs'}, {textAnchor: 'middle'}, {alignmentBaseline: 'middle'}, {text: 'SVG'}],
            gradientAttrs: [{x1: 0}, {x2: 0}, {y1: 1}, {y2: 0}, {spreadMethod: 'reflect'}, {gradientTransform: 0}, {gradientUnits:'objectBoundingBox'}, {id: 'linear'}],
            images: [],
            selectedSourceGraphic: 'text',
            filterData: [],
            filterName: '',
            filterNames: [],
            feBlendDefaults: { type: 'feBlend', attributes: [{ in: '' }, { in2: '' }, {result: 'blend'}, {mode:'normal'} ]},
            feColorMatrixDefaults: { type: 'feColorMatrix', attributes: [{ in: '' }, { result: '' }, { type: 'matrix' }, { values: `1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0`}]},
            feComponentTransferDefaults: { type: 'feComponentTransfer', attributes: [{ in: '' }, { result: '' }], children: [{ type: 'feFuncR', attributes: [{ type: 'discrete' }, { tableValues: '0 1' }] }, { type: 'feFuncG', attributes: [{ type: 'discrete' }, { tableValues: '0 1' }] }, { type: 'feFuncB', attributes: [{ type: 'discrete' }, { tableValues: '0 1' }] }, { type: 'feFuncA', attributes: [{ type: 'discrete' }, { tableValues: '0 1' }]}]},
            feCompositeDefaults: {type: 'feComposite', attributes: [{operator: 'over'}, {in: ''}, {in2: ''}, {result: ''}]},
            feConvolveMatrixDefaults: { type: 'feConvolveMatrix', attributes: [{ in: '' }, { result: '' }, { kernelMatrix: '-1 -1 -1 -1 8 -1 -1 -1 -1' }, { divisor: 1 }, { bias: 0 }, { targetX: 2 }, { targetY: 2 }, { edgeMode: 'duplicate' }, { kernelUnitLength: 1 }, { preserveAlpha: false }, { order: 3 }]},
            feDiffuseLightingFeDistantLightDefaults: { type: 'feDiffuseLighting', attributes: [{ in: '' }, { result: 'diffuseDistant' }, { lightingColor: 'yellow' }, { surfaceScale: 1 }, { diffuseConstant: 2 }, { kernelUnitLength: 1 }], children: [{type:'feDistantLight', attributes: [{azimuth: 0}, {elevation: 0}]}]},
            feDiffuseLightingFePointLightDefaults: { type: 'feDiffuseLighting', attributes: [{ in: '' }, { result: '' }, { lightingColor: 'red' }, { surfaceScale: 1 }, { diffuseConstant: 1 }, { kernelUnitLength: 1 }], children: [{ type: 'fePointLight', attributes: [{ x: 400 }, { y: 300 }, { z: 10 }]}]},
            feDiffuseLightingFeSpotLightDefaults: { type: 'feDiffuseLighting', attributes: [{ in: '' }, { result: '' }, { lightingColor: 'red' }, { surfaceScale: 1 }, { diffuseConstant: 1 }, { kernelUnitLength: 1 }], children: [{ type: 'feSpotLight', attributes: [{ limitingConeAngle: 30 }, { pointsAtX: 0 }, { pointsAtY: 0 }, { pointsAtZ: 30 }, { x: 500 }, { y: 400 }, { z: 20 }]}]},
            feDisplacementMapDefaults: { type: 'feDisplacementMap', attributes: [{ in: '' }, { in2: '' }, { xChannelSelector: 'R' }, { yChannelSelector: 'R' }, { scale: 5 }, { result: '' }]},
            feFloodDefaults: { type: 'feFlood' , attributes: [{ floodOpacity: '1' }, { in: '' }, { floodColor: 'coral' }, { result: '' }] },
            feGaussianBlurDefaults: { type: 'feGaussianBlur', attributes: [{ stdDeviation: 1 }, { in: '' }, { result: '' }] },
            feImageDefaults: {type: 'feImage', attributes:[{x: 0},{y:0}, {width: 500}, {height: 500}, {preserveAspectRatio: 'none'}, {href: 's.svg'}]},
            feMergeDefaults: { type: 'feMerge', attributes: [{in:''}, {result: ''}], children: [{type: 'feMergeNode', attributes: [{in: ''}, {in: ''}]}]},
            feMorphologyDefaults: { type: 'feMorphology', attributes: [{ operator: 'dilate' }, { in: '' }, { radius: 2 }, { result: '' }] },
            feOffsetDefaults: { type: 'feOffset', attributes: [{ dx: 0 }, { dy: 5 }, { in: '' }, { result: '' }]},
            feSpecularLightingFeDistantLightDefaults: { type: 'feSpecularLighting', attributes: [{ in: '' }, { result: '' }, { lightingColor: 'red' }, { surfaceScale: 1 }, { specularConstant: 1 }, { specularExponent: 20 }, { kernelUnitLength: 1 }], children: [{ type: 'feDistantLight', attributes: [{ azimuth: 0 }, { elevation: 0 }]}]},
            feSpecularLightingFePointLightDefaults: { type: 'feSpecularLighting', attributes: [{ in: '' }, { result: '' }, { lightingColor: 'red' }, { surfaceScale: 1 }, { specularConstant: 1 }, { specularExponent: 20 }, { kernelUnitLength: 1 }], children: [{ type: 'fePointLight', attributes: [{ x: 400 }, { y: 300 }, { z: 10 }]}]},
            feSpecularLightingFeSpotLightDefaults: { type: 'feSpecularLighting', attributes: [{ in: '' }, { result: '' }, { lightingColor: 'red' }, { surfaceScale: 1 }, { specularConstant: 1 }, { specularExponent: 20 }, { kernelUnitLength: 1 }], children: [{ type: 'feSpotLight', attributes: [{ limitingConeAngle: 30 }, { pointsAtX: 0 }, { pointsAtY: 0 }, { pointsAtZ: 30 }, { x: 500 }, { y: 400 }, { z: 20 }]}]},
            feTileDefaults: { type: 'feTile', attributes: [{in:''}, {result: ''}]},
            feTurbulenceDefaults: { type: 'feTurbulence', attributes: [{ in: '' }, { result: '' }, { baseFrequency: .005 }, { numOctaves: 5 }, { seed: 0 }, { type: 'turbulence' }, { stitchTiles: 'stitch' }]}
            
        }
    }

    async componentDidMount() {

        const res = await fetch('/linear_gradient');
        const json = await res.json();
        this.setState({linearGradients: json})
        this.setState({stops: json[json.length - 1][`stops`]})  
        
         fetch('/filter_data')
             .then(res => res.json())
             .then(data => {
                 console.log('post stops' + JSON.stringify(data));
       
        this.setState({ filterNames: data.map(item => item.name)})
    })
    }

    handleText = (e) => this.setState({ text: e.target.value });


    handleSourceChange = (item, index) => e => {
        const attrs = this.state.SourceGraphicAttrs.slice()
        console.log('attrs', attrs);
        const obj = {[`${e.target.name}`]:e.target.value}
        
        attrs.splice(index,1, obj)
        
        console.log(e.target.value, 'hsg');
        console.log(e.target.name, 'hsg');
        console.log('item', item);
        this.setState({SourceGraphicAttrs: attrs})        
        console.log('attrs', attrs);
        
    }
    
    handleGradientChange = (item, index) => e => {
        console.log('gradient');
        console.log(`item ${JSON.stringify(item)}`);
        console.log(`index ${index}`);
        console.log(`e name ${e.target.name}`);
        console.log(`e value ${e.target.value}`);
        
        const gradAttrs = this.state.gradientAttrs.slice();
        const obj = {[`${e.target.name}`]:e.target.value}
        gradAttrs.splice(index, 1,  obj)
        this.setState({gradientAttrs: gradAttrs});
        
        
    }

    handleStop =   () => e => {
        console.log(e.target.name);

        this.setState({[`${e.target.name}`]: e.target.value})
        
    }

    handleDeleteStop = (index) => e => {
        console.log(`delete index  ${index}`);
        const stops = this.state.stops.slice();
        stops.splice(index,1)
        this.setState({stops})
        
    }

    handleNewLinearGradient = () => e => {

        console.log('handle new linear gradient');

        let data = {
            name: Object.values(this.state.gradientAttrs.find(item => Object.keys(item) == 'id')),
            stops: [],
            x1: +(Object.values(this.state.gradientAttrs.find(item => Object.keys(item) == 'x1'))),
            x2: +(Object.values(this.state.gradientAttrs.find(item => Object.keys(item) == 'x2'))),
            y1: +(Object.values(this.state.gradientAttrs.find(item => Object.keys(item) == 'y1'))),
            y2: +(Object.values(this.state.gradientAttrs.find(item => Object.keys(item) == 'y2'))),
            spreadMethod: Object.values(this.state.gradientAttrs.find(item => Object.keys(item) == 'spreadMethod')),
            gradientTransform: +(Object.values(this.state.gradientAttrs.find(item => Object.keys(item) == 'gradientTransform'))),
            gradientUnits: Object.values(this.state.gradientAttrs.find(item => Object.keys(item) == 'gradientUnits')),

        }

        fetch('/linear_gradient',
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify(data)
            }
        )
            .then( res => res.json())
            .then(data => { console.log('post stops' + JSON.stringify(data));


                const foo = this.state.linearGradients.slice();
                foo.push(data)


                this.setState({ linearGradients: foo })


            })
        
    }
    handleNewFilterData = () => {

        console.log('handle new filter data');

        let data = {
            name: this.state.filterName,
            filterData: this.state.filterData,
            // attributes: this.state.filterData.attributes,
            // children: this.state.filterData.children

        }
        console.log(data);
        

        fetch('/filter_data',
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify(data)
            }
        )
            .then( res => res.json())
            .then(data => { console.log('post filter data' + JSON.stringify(data));


                console.log(data.filterData);
                

                this.setState({ filterData: data.filterData })


            })
        
    }


    handlePushStop = () => e => {

        console.log('push stop');
        let stops = this.state.stops.slice();
        stops.push({offset: this.state.offset, stopColor: this.state.stopColor, stopOpacity: this.state.stopOpacity})
        this.setState({stops: stops})
        let data = {
            name: Object.values(this.state.gradientAttrs.find(item => Object.keys(item) == 'id')),
            stops: stops
        }

        fetch('/linear_gradient',
            {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify(data)
            }
        )
            .then( res => res.json())
            .then(data => { 
                
                console.log('post stops' + JSON.stringify(data));
                
                const foo = this.state.linearGradients.slice();
                const info = foo.findIndex( item => item.name === data.name);
                foo.splice(info, 1 , data)
                
                
                
                this.setState({linearGradients: foo})
                console.log('post stops' + JSON.stringify(data));
            })
        
    }

    handleClick(i) {
        const radius = this.state.radius.slice();
        console.log('circles', radius)
        radius[i] = radius[i] + 1
        this.setState({ radius: radius });
    }

    handleInputY = (e) => {
        console.log('y', e.target.value)

        console.log(this.state.offsetY)
        this.setState({ offsetY: e.target.value })
    }

    handleInputX = (e) => {
        console.log('x', e.target.value)

        console.log(this.state.offsetX)
        this.setState({ offsetX: e.target.value })
    }

    handleDelete = (param, key) => (e) => {
        console.log('e', e);
        console.log('etarget', e.target);
        console.log('param', param);
        console.log('key', key);
        const els = this.state.elements.slice()
        const ai = this.state.attrIndex.slice()
        console.log('elsooo', els);
        els.splice(key, 1)
        ai.splice(key, 1)

        let props = this.state[`${param}Attrs${key}`]
        console.log('PROPS', props);

        this.setState({ elements: els })
        this.setState({ attrIndex: ai })
        delete this.state[`${param}Attrs${key}`];
        console.log('elsooo', els);

    }

    handleMoveUp = (param, key) => (e) => {
        console.log('e', e);
        console.log('etarget', e.target);
        console.log('param', param);
        console.log('key', key);

        // if(key !== this.state.elements.length - 1) {
        const els = this.state.elements.slice()
        const ai = this.state.attrIndex.slice()

        console.log('elsooo', els);
        console.log('els key', els[key]);

        console.log('ai', ai);
        let splice = els.splice(key, 1)
        console.log('splice', splice);
        let spliceai = ai.splice(key, 1)
        ai.splice(key - 1, 0, spliceai[0])
        els.splice(key - 1, 0, splice[0])




        this.setState({ elements: els })
        this.setState({ attrIndex: ai })
        // delete this.state[`${param}Attrs${key}`];
        console.log('ai', ai);
        console.log('elso', els);
        // }
    }
    // $ctrl.moveUp = function (idx) {
        //     if (idx !== 0) {
            //         var splice = $ctrl.data.splice(idx, 1)
            //         $ctrl.data.splice(idx - 1, 0, splice[0])
            //     }
            // }
            
            handleMoveDown = (param, key) => (e) => {
                console.log('e', e);
                console.log('etarget', e.target);
                console.log('param', param);
                console.log('key', key);
                
                // if(key !== this.state.elements.length - 1) {
                    const els = this.state.elements.slice()
                    const ai = this.state.attrIndex.slice()
      
        console.log('elsooo', els);
        console.log('els key', els[key]);
       
        console.log('ai', ai);
        let splice = els.splice(key, 1)
        console.log('splice',splice);
        let spliceai = ai.splice(key, 1)
        ai.splice(key + 1, 0, spliceai[0])
        els.splice(key + 1, 0, splice[0])
        
        
        
        
        this.setState({ elements: els })
        this.setState({ attrIndex: ai })
        // delete this.state[`${param}Attrs${key}`];
        console.log('ai', ai);
        console.log('elso', els);
            // }
    }


    // $ctrl.moveDown = function (idx) {
    //     if (idx !== $ctrl.data.length - 1) {
    //         var splice = $ctrl.data.splice(idx, 1)
    //         $ctrl.data.splice(idx + 1, 0, splice[0])
    //     }

    // }

    handleSelectSourceGraphic = (e) => {
        this.setState({selectedSourceGraphic: e.target.value})
    }

    handleSelectedLinearGradient = (e) => {
        this.setState({ stops: this.state.linearGradients[this.state.linearGradients.findIndex(item => item.name === e.target.value)][`stops`]})
        const sga = this.state.SourceGraphicAttrs.slice();
        sga[2] = {fill: `url(#${e.target.value})`}
        this.setState({ SourceGraphicAttrs: sga})
        const ga = this.state.gradientAttrs.slice();
        ga[7] = {id: e.target.value}
        this.setState({gradientAttrs: ga})
    }
     handleSelectedFilterName = (e) => {
        console.log(e.target.value);
        fetch(`/filter_data/name/?name=${e.target.value}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                console.log(data[0].filterData);

                this.setState({ filterData: data[0].filterData })
            })
        
        
        // this.setState({ stops: this.state.linearGradients[this.state.linearGradients.findIndex(item => item.name === e.target.value)][`stops`]})
        // const sga = this.state.SourceGraphicAttrs.slice();
        // sga[2] = {fill: `url(#${e.target.value})`}
        // this.setState({ SourceGraphicAttrs: sga})
        // const ga = this.state.gradientAttrs.slice();
        // ga[7] = {id: e.target.value}
        // this.setState({gradientAttrs: ga})
    }

    handleNewFilter = e => {
        console.log(e.target.value);
        const filterData = this.state.filterData.slice();
        switch (e.target.value) {

            case 'feBlend': 
    
                filterData.push(this.state.feBlendDefaults);
                this.setState({filterData});
                break;

            case 'feColorMatrix': 
    
                filterData.push(this.state.feColorMatrixDefaults);
                this.setState({filterData});
                break;

            case 'feComponentTransfer':

                filterData.push(this.state.feComponentTransferDefaults);
                this.setState({ filterData });
                break;


            case 'feComposite': {

                const filterData = this.state.filterData.slice();
                filterData.push(this.state.feCompositeDefaults);
                this.setState({ filterData });
                break;
            }

            case 'feConvolveMatrix':

                filterData.push(this.state.feConvolveMatrixDefaults);
                this.setState({ filterData });
                break;

            case 'feDiffuseLightingFeDistantLight':

                filterData.push(this.state.feDiffuseLightingFeDistantLightDefaults);
                this.setState({ filterData });
                break;

            case 'feDiffuseLightingFePointLight':

                filterData.push(this.state.feDiffuseLightingFePointLightDefaults);
                this.setState({ filterData });
                break;

            case 'feDiffuseLightingFeSpotLight':

                filterData.push(this.state.feDiffuseLightingFeSpotLightDefaults);
                this.setState({ filterData });
                break;

            case 'feDisplacementMap':

                filterData.push(this.state.feDisplacementMapDefaults);
                this.setState({ filterData });
                break;

            case 'feFlood':

                filterData.push(this.state.feFloodDefaults);
                this.setState({ filterData });
                break;

            case 'feGaussianBlur': {

                const filterData = this.state.filterData.slice();
                filterData.push(this.state.feGaussianBlurDefaults);
                this.setState({filterData});
                break;
            }

            case 'feImage':

                filterData.push(this.state.feImageDefaults);
                this.setState({ filterData });
                break;

            case 'feMerge':

                filterData.push(this.state.feMergeDefaults);
                this.setState({ filterData });
                break;
            
                
                
                case 'feMorphology': 
                
                filterData.push(this.state.feMorphologyDefaults);
                this.setState({filterData});
                break;
                
                case 'feOffset': {
    
                    const filterData = this.state.filterData.slice();
                    filterData.push(this.state.feOffsetDefaults);
                    this.setState({filterData});
                    break;
                }

            case 'feSpecularLightingFeDistantLight': 

                filterData.push(this.state.feSpecularLightingFeDistantLightDefaults);
                this.setState({filterData});
                break;

            case 'feSpecularLightingFePointLight': 

                filterData.push(this.state.feSpecularLightingFePointLightDefaults);
                this.setState({filterData});
                break;

            case 'feSpecularLightingFeSpotLight': 

                filterData.push(this.state.feSpecularLightingFeSpotLightDefaults);
                this.setState({filterData});
                break;

            case 'feTile':

                filterData.push(this.state.feTileDefaults);
                this.setState({ filterData });
                break;

            case 'feTurbulence':

                filterData.push(this.state.feTurbulenceDefaults);
                this.setState({ filterData });
                break;

            default:
                console.log('you should never see me');

                break;
        }
    }


    handleChange = (e) => {
        console.log('selected index', e.target.selectedIndex);
        
        const els = this.state.elements.slice()
        const nameOfElss = this.state.nameOfEls.slice()
        const edge = EdgeDetection;
        const offset = FeOffset;
        const blur = FeGaussianBlur;
        const composite = FeComposite;
        const merge = FeMerge;
        const morphology = FeMorphology;
        const flood = FeFlood;
        const image = FeImage;
        const tile = FeTile;
        const blend = FeBlend;
        const colormatrix = FeColorMatrix;
        const displacementmap = FeDisplacementMap;
        const turbulence = FeTurbulence;
        const transfer = FeComponentTransfer;
        const convolve = FeConvolveMatrix;
        const specpoint = FeSpecularLightingFePointLight;
        const specspot = FeSpecularLightingFeSpotLight;
        const specdistant = FeSpecularLightingFeDistantLight;
        const diffusepoint = FeDiffuseLightingFePointLight;
        const diffusespot = FeDiffuseLightingFeSpotLight;
        const diffusedistant = FeDiffuseLightingFeDistantLight;
        nameOfElss.push(e.target.value + 'Attrs' + this.state.inc)
        switch (e.target.value) {
            case 'FeGaussianBlur':

                els.push(blur);
                break;
            case 'FeOffset':

                els.push(offset);
                break;
            case 'EdgeDetection':

                els.push(edge);
                break;

            case 'FeComposite':

                els.push(composite);
                break;

            case 'FeMerge':

                els.push(merge);
                break;

            case 'FeMorphology':

                els.push(morphology);
                break;

            case 'FeFlood':

                els.push(flood);
                break;

            case 'FeImage':

                els.push(image);
                break;

            case 'FeTile':

                els.push(tile);
                break;

            case 'FeBlend':

                els.push(blend);
                break;

            case 'FeColorMatrix':

                els.push(colormatrix);
                break;

            case 'FeDisplacementMap':

                els.push(displacementmap);
                break;

            case 'FeTurbulence':

                els.push(turbulence);
                break;

            case 'FeComponentTransfer':

                els.push(transfer);
                break;

            case 'FeConvolveMatrix':

                els.push(convolve);
                break;

            case 'FeSpecularLightingFePointLight':

                els.push(specpoint)
                break;

            case 'FeSpecularLightingFeSpotLight':

                els.push(specspot)
                break;

            case 'FeSpecularLightingFeDistantLight':

                els.push(specdistant)
                break;

            case 'FeDiffuseLightingFePointLight':

                els.push(diffusepoint)
                break;

            case 'FeDiffuseLightingFeSpotLight':

                els.push(diffusespot)
                break;

            case 'FeDiffuseLightingFeDistantLight':

                els.push(diffusedistant)
                break;

            default:
                console.log('you should never see me');

                break;
        }

        console.log('e.tartget.value', e.target.value)
        console.log('elsss', els);

        this.setState({ elements: els })
        this.setState({ foo: e.target.value })
        console.log('inc', this.state.inc);
        this.setState({ nameOfEls: nameOfElss })
        // let at = `${this}${e.target.value}Attrs`
        // console.log('at',at);
        const ai = this.state.attrIndex.slice();
        ai.push(this.state.inc)
        this.setState({ attrIndex: ai })
        console.log('attrindex', this.state.attrIndex)
        this.setState({ [`${e.target.value}Attrs${this.state.inc}`]: this.state[`${e.target.value}Attrs`] })
        this.setState({ inc: this.state.inc + 1 })
        // this.setState({[this.state.inc]: this.state.inc + 1})
        console.log('inc', this.state.inc);

        // this.setState({[inc]: inc})
        console.log('after switch elements', this.state.elements);

    }

    handleAttrs = (e) => {
        // e.stopPropagation();
        // e.nativeEvent.stopImmediatePropagation();
        console.log(this.state[`${this.state.foo}Attrs${this.state.inc - 1}`])
        console.log(e);

    }

    handlePassedEl = (param, key, i) => e => {
        console.log(e.target);
        console.log(e.target.name);
        console.log('param', param);
        console.log('key', key);
        console.log('i', i);
        const els = this.state[`${param}Attrs${this.state.attrIndex[key]}`].slice();
        console.log('handleEls', els);

    }

    handleStopChange = (param, index) => e => {
        console.log(param);
        console.log(index);
        console.log(e.target.name);
        console.log(e.target.value);
        const stops = this.state.stops.slice();
        const obj = { ...stops[index]}
        console.log(obj);
        obj[`${e.target.name}`] = e.target.value;
        console.log(obj);
        
        stops.splice(index,1, obj )
        this.setState({stops: stops})
        
        
    }

    handleInputChanges = (param, key) => e => {
        console.log('param and key', param, key);

        console.log('e ', e);
        console.log('changes e name ', e.target.name);
        console.log('changes evalue ', e.target.value);

        console.log('e', e);
        // console.log('e',e.target.name);

        const els = this.state[`${param}Attrs${this.state.attrIndex[key]}`].slice();
        console.log('els:', els);
        const n = e.target.name;
        const val = e.target.value;
        const add_obj = {};
        add_obj[n] = val
        console.log('typeof', typeof val);

        console.log('add obj', add_obj);

        console.log(`name = ${n} and value = ${val}`);

        console.log('input change', e.target.value)
        console.log('input name', e.target.name)
        // const blurAttr = this.state[`${this.state.foo}Attrs`].map(item => Object.keys(item)).reduce((prev, curr) => curr.concat(prev),[])
        const blurAttrIndex = this.state[`${param}Attrs${this.state.attrIndex[key]}`].findIndex(item => {
            console.log('a', item);
            console.log('b', Object.keys(item));
            console.log('c', item[Object.keys(item)]);

            return Object.keys(item) == e.target.name
        })
        console.log('blurattrindex', blurAttrIndex);
        els.splice(blurAttrIndex, 1, add_obj);

        this.setState({ [`${param}Attrs${this.state.attrIndex[key]}`]: els });
        console.log('elsafterstatechange', els);

        console.log(`from handleInputChange${param}Attrs${this.state.attrIndex[key]}`);

    }


    handleInputChange = e => {
        console.log('e', e);
        // console.log('e',e.target.name);

        const els = this.state[`${this.state.foo}Attrs${this.state.inc - 1}`].slice();
        console.log('els:', els);
        const n = e.target.name;
        const val = e.target.value;
        const add_obj = {};
        add_obj[n] = val
        console.log('typeof', typeof val);

        console.log('add obj', add_obj);

        console.log(`name = ${n} and value = ${val}`);

        console.log('input change', e.target.value)
        console.log('input name', e.target.name)
        // const blurAttr = this.state[`${this.state.foo}Attrs`].map(item => Object.keys(item)).reduce((prev, curr) => curr.concat(prev),[])
        const blurAttrIndex = this.state[`${this.state.foo}Attrs${this.state.inc - 1}`].findIndex(item => {
            console.log('a', item);
            console.log('b', Object.keys(item));
            console.log('c', item[Object.keys(item)]);

            return Object.keys(item) == e.target.name
        })
        console.log('blurattrindex', blurAttrIndex);
        els.splice(blurAttrIndex, 1, add_obj);
        this.setState({ [`${this.state.foo}Attrs${this.state.inc - 1}`]: els });
        console.log('elsafterstatechange', els);
        console.log(`from handleInputChange${this.state.foo}Attrs${this.state.inc - 1}`);

    }

    handleFuncData = (item, index, kidIndex, idx, a) => e => {
        console.log(item);
        console.log(index);
        console.log(kidIndex);
        console.log(idx);
        console.log(a);
        console.log(e.target.name);
        console.log(e.target.value);

        const filterData = [...this.state.filterData];
        console.log(filterData);
        filterData[index].children[kidIndex].attributes[idx][Object.keys(filterData[index].children[kidIndex].attributes[idx])] = e.target.value;
        console.log(filterData);
        this.setState({filterData})
        
        
        
    }

    handleFilterName = () => e => {
        console.log(e.target.value);
        this.setState({filterName: e.target.value})
        
    }

    handleFilterData = index => e => {
        
        console.log(index);
        console.log(e.target.value);
        console.log(e.target.name);
        const filterData = this.state.filterData.slice();
        let foo = filterData[index].attributes
        let bar = foo.findIndex(item => Object.keys(item) == e.target.name) 
        // bar = e.target.value;
        foo.splice(bar, 1, { [`${e.target.name}`]: isNaN(e.target.value) || isNaN(parseInt(e.target.value))  ? e.target.value : parseInt(e.target.value)})
        console.log(bar);
        console.log(foo);
        
        this.setState({ filterData})

        // filterData: [{ type: 'feOffset', attributes: [{ dx: 0 }, { dy: 5 }, { in: 'SourceGraphic' }, { result: '' }] }, { type: 'feComposite', attributes: [{ operator: 'over' }, { in: 'foo' }, { in2: 'bar' }, { result: 'composite' }] }],
    }


    render() {

        let stateEndingInNumber = Object.keys(this.state).filter(item => {

            return item.match(/\d$/)
        })
        let stateEndingInNumbers = stateEndingInNumber.map(item => {
            return (
                <h1 key={item}>{item}</h1>
            )
        })

        // console.log('elementss', this.state.elements);

        let circles = this.state.numberOfCircles.map((c, i) => {

            return (

                <Circle key={c}
                    rad={this.state.radius[c]}
                    cx={this.state.cx[c]}
                    onClick={() => this.handleClick(c)}
                    filter={i == 0 ? '' : 'url(#f)'}
                />
            )


        })

        // let filterElements = Object.keys(this.state).filter(item => item.includes('lement'))
        // console.log('filterElements ', filterElements);


        let els = this.state.elements.map((el, index, array) => {
            console.log('el', el);
            console.log('el name', el.name);
            console.log('index', index);
            console.log('array', array);
            console.log('inc', this.state.inc);
            // let inc = this.state.inc;
            let props = this.state[`${el.name}Attrs${this.state.attrIndex[index]}`]
            console.log('propws:', this.state[`${el.name}Attrs${this.state.inc - 1}`]);
            console.log('propwssss:', this.state[`${el.name}Attrs${this.state.attrIndex[index]}`]);
            console.log('props:', props);
            console.log(this.state);

            var newObj = Object.assign({ key: index }, ...props)
            console.log(`obj:${JSON.stringify(newObj)}`);


            return (
                React.createElement(el, newObj)
            )
        })

        let stopEls = this.state.stops.map((el,index,arrar) => {
             
            return (
                <stop offset={index} stop-color={el} />
            )
        })


        return (
           

                <div className="App">
                <svg width='500' height='500'>
                    <text textAnchor='middle' x='50%' y='50%' style={{fontSize: '500px', fill: 'orange'}} alignmentBaseline='middle' textLength='500' lengthAdjust='spacingAndGlyphs' className={this.state.filterData.length > 0 ? 'newFilter': ''} >SVG</text>
                    <filter id='filterData'>
                    {this.state.filterData.map( (item,index) => {
                        console.log(item.attributes);
                        // console.log(JSON.stringify(item.children[item.children.findIndex( i => i.type === 'feFuncR')].attributes));
                        
       

                        const attrs = item.attributes.reduce((prev, curr) => {
                            let key = Object.keys(curr)[0];
                            console.log(Object.keys(curr));
                            console.log(prev);
                            console.log(curr);
                            
                            if(Object.values(curr) != ''){
                                
                                prev[key] = curr[key]; return prev;
                            } else {return prev;}
                                                } ,{} )
                        console.log(attrs);

                        switch (item.type){
                            case 'feComponentTransfer': {

                                const funcRAttrs = item.children[item.children.findIndex(i => i.type === 'feFuncR')].attributes.reduce((prev, curr) => {
                                    let key = Object.keys(curr)[0];
                                    console.log(Object.keys(curr));
                                    console.log(prev);
                                    console.log(curr);

                                    if (Object.values(curr) != '') {

                                        prev[key] = curr[key]; return prev;
                                    } else { return prev; }
                                }, {}) 
                                const funcGAttrs = item.children[item.children.findIndex(i => i.type === 'feFuncG')].attributes.reduce((prev, curr) => {
                                    let key = Object.keys(curr)[0];
                                    console.log(Object.keys(curr));
                                    console.log(prev);
                                    console.log(curr);

                                    if (Object.values(curr) != '') {

                                        prev[key] = curr[key]; return prev;
                                    } else { return prev; }
                                }, {}) 
                                const funcBAttrs = item.children[item.children.findIndex(i => i.type === 'feFuncB')].attributes.reduce((prev, curr) => {
                                    let key = Object.keys(curr)[0];
                                    console.log(Object.keys(curr));
                                    console.log(prev);
                                    console.log(curr);

                                    if (Object.values(curr) != '') {

                                        prev[key] = curr[key]; return prev;
                                    } else { return prev; }
                                }, {}) 
                                const funcAAttrs = item.children[item.children.findIndex(i => i.type === 'feFuncA')].attributes.reduce((prev, curr) => {
                                    let key = Object.keys(curr)[0];
                                    console.log(Object.keys(curr));
                                    console.log(prev);
                                    console.log(curr);

                                    if (Object.values(curr) != '') {

                                        prev[key] = curr[key]; return prev;
                                    } else { return prev; }
                                }, {}) 

                            return (
                                <item.type key={index} {...attrs}>
                                    <feFuncR   {...funcRAttrs}/>
                                    <feFuncG   {...funcGAttrs}/>
                                    <feFuncB   {...funcBAttrs}/>
                                    <feFuncA   {...funcAAttrs}/>
                                </item.type>
                            )
                            
                        }
                        

                            case 'feDiffuseLighting': {
                                console.log(item.children);
                                
                                if (item.children[item.children.findIndex(i => i.type === 'feDistantLight')]) {

                                    const feDistantLightAttrs = item.children[item.children.findIndex(i => i.type === 'feDistantLight')].attributes.reduce((prev, curr) => {
                                        let key = Object.keys(curr)[0];
                                        console.log(Object.keys(curr));
                                        console.log(prev);
                                        console.log(curr);
                                        
                                        if (Object.values(curr) != '') {
                                            
                                            prev[key] = curr[key]; return prev;
                                        } else { return prev; }
                                    }, {}) 
                                    console.log(feDistantLightAttrs);
                                    
                                    return (
                                        <item.type key={index} {...attrs}>
                                            <feDistantLight {...feDistantLightAttrs} />
                                        </item.type>
                                    )
                                }

                                if (item.children[item.children.findIndex(i => i.type === 'fePointLight')]) {
                                const fePointLightAttrs = item.children[item.children.findIndex(i => i.type === 'fePointLight')].attributes.reduce((prev, curr) => {
                                    let key = Object.keys(curr)[0];
                                    console.log(Object.keys(curr));
                                    console.log(prev);
                                    console.log(curr);

                                    if (Object.values(curr) != '') {

                                        prev[key] = curr[key]; return prev;
                                    } else { return prev; }
                                }, {}) 

                                    return (
                                        <item.type key={index} {...attrs}>
                                            <fePointLight {...fePointLightAttrs} />
                                        </item.type>
                                    )

                                }
                                if (item.children[item.children.findIndex(i => i.type === 'feSpotLight')]) {
                                const feSpotLightAttrs = item.children[item.children.findIndex(i => i.type === 'feSpotLight')].attributes.reduce((prev, curr) => {
                                    let key = Object.keys(curr)[0];
                                    console.log(Object.keys(curr));
                                    console.log(prev);
                                    console.log(curr);

                                    if (Object.values(curr) != '') {

                                        prev[key] = curr[key]; return prev;
                                    } else { return prev; }
                                }, {}) 

                                    return (
                                        <item.type key={index} {...attrs}>
                                            <feSpotLight {...feSpotLightAttrs} />
                                        </item.type>
                                    )

                                }
                            }
                            case 'feSpecularLighting': {
                                console.log(item.children);
                                
                                if (item.children[item.children.findIndex(i => i.type === 'feDistantLight')]) {

                                    const feDistantLightAttrs = item.children[item.children.findIndex(i => i.type === 'feDistantLight')].attributes.reduce((prev, curr) => {
                                        let key = Object.keys(curr)[0];
                                        console.log(Object.keys(curr));
                                        console.log(prev);
                                        console.log(curr);
                                        
                                        if (Object.values(curr) != '') {
                                            
                                            prev[key] = curr[key]; return prev;
                                        } else { return prev; }
                                    }, {}) 
                                    console.log(feDistantLightAttrs);
                                    
                                    return (
                                        <item.type key={index} {...attrs}>
                                            <feDistantLight {...feDistantLightAttrs} />
                                        </item.type>
                                    )
                                }

                                if (item.children[item.children.findIndex(i => i.type === 'fePointLight')]) {
                                const fePointLightAttrs = item.children[item.children.findIndex(i => i.type === 'fePointLight')].attributes.reduce((prev, curr) => {
                                    let key = Object.keys(curr)[0];
                                    console.log(Object.keys(curr));
                                    console.log(prev);
                                    console.log(curr);

                                    if (Object.values(curr) != '') {

                                        prev[key] = curr[key]; return prev;
                                    } else { return prev; }
                                }, {}) 

                                    return (
                                        <item.type key={index} {...attrs}>
                                            <fePointLight {...fePointLightAttrs} />
                                        </item.type>
                                    )

                                }
                                if (item.children[item.children.findIndex(i => i.type === 'feSpotLight')]) {
                                const feSpotLightAttrs = item.children[item.children.findIndex(i => i.type === 'feSpotLight')].attributes.reduce((prev, curr) => {
                                    let key = Object.keys(curr)[0];
                                    console.log(Object.keys(curr));
                                    console.log(prev);
                                    console.log(curr);

                                    if (Object.values(curr) != '') {

                                        prev[key] = curr[key]; return prev;
                                    } else { return prev; }
                                }, {}) 

                                    return (
                                        <item.type key={index} {...attrs}>
                                            <feSpotLight {...feSpotLightAttrs} />
                                        </item.type>
                                    )

                                }
                            }

                            case 'feMerge': 

                                return (
                                    <item.type key={index} {...attrs}>
                                        {Array(this.state.filterData.length).fill().map( item => {
                                            return (
                                                <feMergeNode in='SourceGraphic' />
                                            )
                                        })}
                                    </item.type>
                                )
                            

                            default:

                            return (
                                
                                <item.type key={index}  {...attrs} />
                                   
                            )
                        }
                        
                    })}
                    </filter>
                </svg>


                    {this.state.filterData.map( (i, index) => {
                        console.log(i.attributes);
                        console.log(i.children);
                        // feComponentTransferDefaults: {type: 'feComponentTransfer', attributes:[{in:''},{result:''}], children:[{type: 'feFuncR', attributes:[{type: 'discrete'}, {tableValues:'0 1'}]}]},
                        return (
                            <div className='filterData' key={index}>
                     
                            
                            {i.attributes.map( item => {
                                    console.log(i);
                                    console.log(i.type);
                                    console.log(Object.keys(item)[0]);
                                    
                                    console.log(Object.keys(item));
                                    console.log(index);
                                    
                                
                                    if ((i.type =='feComponentTransfer') && Object.keys(item)[0] === 'type') {
                                        return (<select onChange={this.handleFilterData(index)} name={Object.keys(item)} key={Object.keys(item)}>
                                            <option disabled selected >{Object.keys(item)}</option>
                                            <option>discrete</option>
                                            <option>table</option>
                                            <option>linear</option>
                                            <option>gamma</option>
                                            <option>identity</option>
                                        </select>)
                                        // if(item.type === 'gamma') {
                                        //     return (<label>amp<input name='amplitude' value='4'/></label>)
                                        // }
                                    }

                                    // else if ('feComponentTransfer' ) {
                                    //     console.log(i.children[0].attributes);
                                        
                                    //     {i.children[0].attributes.map(attr => {
                                    //         return (<label>{Object.keys(attr)}</label>)
                                    //     })}
                                    // }

                                else if(Object.keys(item)[0] === 'dx') {
                                    return (<label key={Object.keys(item)}>{Object.keys(item)}<input onChange={this.handleFilterData(index)} name={Object.keys(item)} type='range' value={Object.values(item)}/></label>)
                                }
                                else if ( i.type === 'feComposite' && Object.keys(item)[0] === 'operator') {
                                    return (<select onChange={this.handleFilterData(index)} name={Object.keys(item)} key={Object.keys(item)}>
                                        <option disabled selected >{Object.keys(item)}</option>
                                        <option>over</option>
                                        <option>in</option>
                                        <option>out</option>
                                        <option>atop</option>
                                        <option>xor</option>
                                            </select>)
                            } 
                            //need to add arithmetic logic
                                else if (Object.keys(item)[0] === 'operator') {
                                    return (<select onChange={this.handleFilterData(index)} name={Object.keys(item)} key={Object.keys(item)}>
                                        <option>{Object.keys(item)}</option>
                                        <option>dilate</option>
                                        <option>erode</option>
                                    </select>)
                                } 

                            else { 
                                    return (<label key={Object.keys(item)} >{Object.keys(item)}<input type='text' name={Object.keys(item)} value={Object.values(item)} onChange={this.handleFilterData(index)} /></label>)
                                }
                            }
                            
                            )}

                           
                                {i.children ? i.children.map( (kid, kidIndex) => {
                                    console.log(kid);
                                    
                                    return (<label key={kid.type}>{kid.type}
                                                {kid.attributes.map( (a, idx) => {
                                                    console.log(kid.attributes[0]);
                                                    console.log(a);
                                                    
                                        if(Object.keys(a)== 'azimuth') {
                                            
                                            return (<label key={Object.keys(a)}>{Object.keys(a)}<input type='range' min="0" max="360" step="1" name={Object.keys(a)} value={Object.values(a)} onChange={this.handleFuncData(i, index, kidIndex, idx, a)} /></label>)
                                        }
                                        else if (Object.keys(a) == 'elevation'){
                                            return (<label key={Object.keys(a)}>{Object.keys(a)}<input type='range' min="0" max="40" step=".1" name={Object.keys(a)} value={Object.values(a)} onChange={this.handleFuncData(i, index, kidIndex, idx, a)} /></label>)

                                        } 
                                        else if (Object.keys(a) == 'limitingConeAngle'){
                                            return (<label key={Object.keys(a)}>{Object.keys(a)} value={Object.values(a)}<input type='range' min="0" max="360" step="1" name={Object.keys(a)} value={Object.values(a)} onChange={this.handleFuncData(i, index, kidIndex, idx, a)} /></label>)

                                        } 
                                        else if (Object.keys(a) == 'type'){
                                            return (<select onChange={this.handleFilterData(index)} name={Object.keys(a)} key={Object.keys(a)}>
                                                <option disabled selected >{Object.keys(a)}</option>
                                                <option>discrete</option>
                                                <option>table</option>
                                                <option>linear</option>
                                                <option>gamma</option>
                                                <option>identity</option>
                                            </select>)

                                        } 
                                        else {

                                                    return (
                                                        <label key={Object.keys(a)}>{Object.keys(a)}<input name={Object.keys(a)} value={Object.values(a)} onChange={this.handleFuncData(i,index, kidIndex,idx,a)}/></label>
                                                    )

                                                }
                                                })}
                                            </label>)
                                }) : ''}

                            </div>
                        );

                    })}
                    <button onClick={this.handleNewFilterData}>new filter data</button>
                    <label>name:<input name='filterName' value={this.state.filterName} onChange={this.handleFilterName()} /></label>
                    <SourceGraphicEditor  changeText={this.handleText} attrs={this.state.SourceGraphicAttrs} changeSource={this.handleSourceChange}/>
                    <GradientEditor createNewLinearGradient={this.handleNewLinearGradient} attrs={this.state.gradientAttrs} changeGradient={this.handleGradientChange} />
                    <StopAdder addStop={this.handleStop} pushStop={this.handlePushStop} />
                    <div className='select-wrapper'>
                        <FilterSelect selectedIndex={this.handleSelectedIndex} selectChange={this.handleChange} />
                        <FilterMenu selectFilter={this.handleNewFilter} />
                        <SourceGraphicSelect  selectSourceGraphic={this.handleSelectSourceGraphic}/>
                        <FilterNameSelect emitSelectedFilterName={this.handleSelectedFilterName} names={this.state.filterNames}/>
                        <LinearGradientSelect emitSelectedLinearGradient={this.handleSelectedLinearGradient} names={this.state.linearGradients.map(item => {
                            console.log('item name ' +item.name);
                            
                            return item.name;
                        })}/>
                    </div>
                    <svg width='0' height='0'>
                        <defs>
                        <RectWithGradient fill={Object.values(this.state.gradientAttrs.find(item => Object.keys(item) == 'id'))} />
                            <Gradient 
                                id={Object.values(this.state.gradientAttrs.find(item => Object.keys(item) == 'id'))}
                                x1={Object.values(this.state.gradientAttrs.find(item => Object.keys(item) == 'x1'))}
                                x2={Object.values(this.state.gradientAttrs.find(item => Object.keys(item) == 'x2'))}
                                y1={Object.values(this.state.gradientAttrs.find(item => Object.keys(item) == 'y1'))}
                                y2={Object.values(this.state.gradientAttrs.find(item => Object.keys(item) == 'y2'))}
                                spreadMethod={Object.values(this.state.gradientAttrs.find(item => Object.keys(item) == 'spreadMethod'))}
                                gradientTransform={Object.values(this.state.gradientAttrs.find(item => Object.keys(item) == 'gradientTransform'))}
                                gradientUnits={Object.values(this.state.gradientAttrs.find(item => Object.keys(item) == 'gradientUnits'))}
                            >
                                {this.state.stops.map( (stop, index) => {
                                    return (
                                        <stop key={index} offset={stop.offset} stopColor={stop.stopColor} stopOpacity={stop.stopOpacity} />
                                    )
                                })}
                            </Gradient>
                            <LinearGradients gradientData={this.state.linearGradients}/>
                            <rect id='bi' width='10' height='10' fill='url(#p)' />
                            <linearGradient id="coin" x2="50%" y2="40%" spreadMethod="reflect">
                                <stop stopColor="white" offset="82%" />
                                <stop stopColor="gold" offset="92%" />
                                <stop stopColor="gold" offset="30%" />
                                <stop stopColor="goldenrod" offset="70%" />
                                <stop stopColor="darkgoldenrod" offset="100%" />
                            </linearGradient>
                            <RadialGradient />
                            <rect id='gold' width='100' height='100' fill='url(#coin)' />
                            <rect id='lgr' width='100' height='100' fill={`url(#${Object.values(this.state.gradientAttrs.find(item => Object.keys(item) == 'id'))}`} />
                            <rect id='rad' x='0' y='0' width='500' height='500' fill='url(#rg)' />
                            <circle id='circ' cx='250' cy='250' r='200' fill='url(#rg)' />
                            <Pattern />
                            <EmptyFilter>
                                {els}
                            </EmptyFilter>
                            <filter id='f' width='200%' height='200%' x='-20%' y='-20%' colorInterpolationFilters='sRGB'>
                                {els}
                            </filter>
                        </defs>
                    </svg>
                    <div className='rep-svg-wrapper'>
                        <HTMLRepresentation 
                            deleteFilter={this.handleDelete} 
                            moveUp={this.handleMoveUp} 
                            moveDown={this.handleMoveDown}
                            changeInputs={this.handleInputChanges} 
                            passEl={this.handlePassedEl}
                            >
                            {els}
                        </HTMLRepresentation >
                        <LinearGradientRepresentation>
                            {this.state.stops.map((el,index,array) => {
                                return (
                                    <div className='linear-rep' key={index}>
                                        <label  >{index}
                                            <input key={el[index]} onChange={this.handleStopChange(el, index)} type='range'min="0" max="1" step="0.01" name='offset' value={el.offset} />
                                            <input key={el[index]} onChange={this.handleStopChange(el, index)} type='text' name='stopColor' value={el.stopColor} />
                                            <input key={el[index]} onChange={this.handleStopChange(el, index)} type='range'min="0" max="1" step="0.01" name='stopOpacity' value={el.stopOpacity} />
                                            <button onClick={this.handleDeleteStop(index)}>DELETE</button>
                                        </label>
                                    </div>
                                )
                            })}
                        </LinearGradientRepresentation>
                        <svg id='sourceGraphic' viewBox='0 0 500 500' width='100%' preserveAspectRatio='xMinYMin meet'>
                            {/* <Text/> */}
                            { this.state.selectedSourceGraphic == 'text' ? (
                            <SourceGraphic 
                                text={Object.values(this.state.SourceGraphicAttrs[11])} 
                                elements={this.state.elements} 
                                x={Object.values(this.state.SourceGraphicAttrs[0])}
                                y={Object.values(this.state.SourceGraphicAttrs[1])}
                                fill={Object.values(this.state.SourceGraphicAttrs[2]) }
                                stroke={Object.values(this.state.SourceGraphicAttrs[3])}
                                strokeWidth={Object.values(this.state.SourceGraphicAttrs[4])}
                                paintOrder={Object.values(this.state.SourceGraphicAttrs[5])}
                                fontSize={Object.values(this.state.SourceGraphicAttrs[6])}
                                textLength={Object.values(this.state.SourceGraphicAttrs[7])}
                                lengthAdjust={Object.values(this.state.SourceGraphicAttrs[8])}
                                textAnchor={Object.values(this.state.SourceGraphicAttrs[9])}
                                alignmentBaseline={Object.values(this.state.SourceGraphicAttrs[10])}
                            />
                              )  : this.state.selectedSourceGraphic == 'image' ?   (
                        <image className={   this.state.elements.length? 'filter': ''} href='http://mikelahay.com/images/cooper.png' width='500' height='500' preserveAspectRatio='none'/>
                              ) : (
                        <Circle elements={this.state.elements}/>
                    ) }

                        </svg>
                    </div>
                
                </div>
            
        );
    }
}

export default FilterRoute;
