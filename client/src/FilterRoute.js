import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import RouterTest from './RouterTest';
import { SketchPicker } from 'react-color';
import Filter from './Filter';
import Circle from './Circle';
import SourceGraphic from './SourceGraphic';
import SourceGraphicEditor from './SourceGraphicEditor';
import './App.css';
import Pattern from './Pattern';
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
import FilterMenu from './FilterMenu';
import WebCam from './WebCam';
import ColorMatrix from './ColorMatrix';
import TableValues from './TableValues';
import ConcatFilters from './ConcatFilters';
import Canvas from './Canvas';

class FilterRoute extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showSourceGraphicEditor: true,
            elements: [],
            stops: [],
            linearGradients: [],
            offset: '',
            stopColor: '',
            stopOpacity: '',
            SourceGraphicAttrs: [{x: '50%'}, {y:'50%'}, {fill:''}, {stroke:''}, {strokeWidth: 1}, {paintOrder: 'stroke'}, {fontSize: 400}, {textLength: 500}, {lengthAdjust: 'spacingAndGlyphs'}, {textAnchor: 'middle'}, {alignmentBaseline: 'middle'}, {text: 'SVG'}],
            gradientAttrs: [{x1: 0}, {x2: 1}, {y1: 0}, {y2: 0}, {spreadMethod: 'reflect'}, {gradientTransform: 0}, {gradientUnits:'objectBoundingBox'}, {id: 'linear'}],
            images: [],
            selectedSourceGraphic: 'text',
            filterData: [],
            filterName: '',
            filterNames: [],
            feBlendDefaults: { type: 'feBlend', attributes: [{ in: '' }, { in2: '' }, {result: 'blend'}, {mode:'normal'} ]},
            feColorMatrixDefaults: { type: 'feColorMatrix', attributes: [{ in: '' }, { result: 'colorMatrix' }, { type: 'matrix' }, { values: `1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0`}]},
            feComponentTransferDefaults: { type: 'feComponentTransfer', attributes: [{ in: '' }, { result: 'componentTransfer' }], children: [{ type: 'feFuncR', attributes: [{ type: 'discrete' }, { tableValues: '0 1' }, {slope: 1}, {intercept: 0}, {amplitude: 1}, {exponent: 1}, {offset:0}] }, { type: 'feFuncG', attributes: [{ type: 'discrete' }, { tableValues: '0 1' }, {slope: 1}, {intercept: 0}, {amplitude: 1}, {exponent: 1}, {offset:0}] }, { type: 'feFuncB', attributes: [{ type: 'discrete' }, { tableValues: '0 1' }, {slope: 1}, {intercept: 0}, {amplitude: 1}, {exponent: 1}, {offset:0}] }, { type: 'feFuncA', attributes: [{ type: 'discrete' }, { tableValues: '0 1' }, {slope: 1}, {intercept: 0}, {amplitude: 1}, {exponent: 1}, {offset:0}]}]},
            feCompositeDefaults: {type: 'feComposite', attributes: [{operator: 'over'}, {in: ''}, {in2: ''},{k1: 0}, {k2:1}, {k3:1}, {k4:0}, {result: 'composite'}]},
            feConvolveMatrixDefaults: { type: 'feConvolveMatrix', attributes: [{ in: '' }, { result: 'convolveMatrix' }, { kernelMatrix: '-1 -1 -1 -1 8 -1 -1 -1 -1' }, { divisor: 1 }, { bias: 0 }, { targetX: 2 }, { targetY: 2 }, { edgeMode: 'duplicate' }, { kernelUnitLength: 1 }, { preserveAlpha: false }, { order: 3 }]},
            feDiffuseLightingFeDistantLightDefaults: { type: 'feDiffuseLighting', attributes: [{ in: '' }, { result: 'diffuseDistant' }, { lightingColor: 'yellow' }, { surfaceScale: 1 }, { diffuseConstant: 2 }, { kernelUnitLength: 1 }], children: [{type:'feDistantLight', attributes: [{azimuth: 0}, {elevation: 0}]}]},
            feDiffuseLightingFePointLightDefaults: { type: 'feDiffuseLighting', attributes: [{ in: '' }, { result: 'diffusePoint' }, { lightingColor: 'red' }, { surfaceScale: 1 }, { diffuseConstant: 1 }, { kernelUnitLength: 1 }], children: [{ type: 'fePointLight', attributes: [{ x: 400 }, { y: 300 }, { z: 10 }]}]},
            feDiffuseLightingFeSpotLightDefaults: { type: 'feDiffuseLighting', attributes: [{ in: '' }, { result: 'diffuseSpot' }, { lightingColor: 'red' }, { surfaceScale: 1 }, { diffuseConstant: 1 }, { kernelUnitLength: 1 }], children: [{ type: 'feSpotLight', attributes: [{ limitingConeAngle: 30 }, { pointsAtX: 0 }, { pointsAtY: 0 }, { pointsAtZ: 30 }, { x: 500 }, { y: 400 }, { z: 20 }]}]},
            feDisplacementMapDefaults: { type: 'feDisplacementMap', attributes: [{ in: '' }, { in2: '' }, { xChannelSelector: 'R' }, { yChannelSelector: 'R' }, { scale: 5 }, { result: 'displace' }]},
            feFloodDefaults: { type: 'feFlood' , attributes: [{ floodOpacity: '1' }, { in: '' }, { floodColor: 'coral' }, { result: 'flood' }] },
            feGaussianBlurDefaults: { type: 'feGaussianBlur', attributes: [{ stdDeviation: [1 , 1] }, { in: '' }, { result: 'blur' }] },
            feImageDefaults: {type: 'feImage', attributes:[{x: 0},{y:0}, {width: 500}, {height: 500}, {preserveAspectRatio: 'none'}, {href: '#rect'}, {result: 'image'}]},
            feMergeDefaults: { type: 'feMerge', attributes: [{in:''}, {result: 'merge'}], children: [{type: 'feMergeNode', attributes: [{in: 'SourceGraphic'}, {in: 'SourceGraphic'}]}]},
            feMorphologyDefaults: { type: 'feMorphology', attributes: [{ operator: 'dilate' }, { in: '' }, { radius: [2, 2] }, { result: 'morph' }] },
            feOffsetDefaults: { type: 'feOffset', attributes: [{ dx: 0 }, { dy: 5 }, { in: '' }, { result: 'offset' }]},
            feSpecularLightingFeDistantLightDefaults: { type: 'feSpecularLighting', attributes: [{ in: '' }, { result: 'specularDistant' }, { lightingColor: 'red' }, { surfaceScale: 1 }, { specularConstant: 1 }, { specularExponent: 20 }, { kernelUnitLength: 1 }], children: [{ type: 'feDistantLight', attributes: [{ azimuth: 0 }, { elevation: 0 }]}]},
            feSpecularLightingFePointLightDefaults: { type: 'feSpecularLighting', attributes: [{ in: '' }, { result: 'specularPoint' }, { lightingColor: 'red' }, { surfaceScale: 1 }, { specularConstant: 1 }, { specularExponent: 20 }, { kernelUnitLength: 1 }], children: [{ type: 'fePointLight', attributes: [{ x: 400 }, { y: 300 }, { z: 10 }]}]},
            feSpecularLightingFeSpotLightDefaults: { type: 'feSpecularLighting', attributes: [{ in: '' }, { result: 'specularSpot' }, { lightingColor: 'red' }, { surfaceScale: 1 }, { specularConstant: 1 }, { specularExponent: 20 }, { kernelUnitLength: 1 }], children: [{ type: 'feSpotLight', attributes: [{ limitingConeAngle: 30 }, { pointsAtX: 0 }, { pointsAtY: 0 }, { pointsAtZ: 30 }, { x: 500 }, { y: 400 }, { z: 20 }]}]},
            feTileDefaults: { type: 'feTile', attributes: [{in:''}, {result: 'tile'}]},
            feTurbulenceDefaults: { type: 'feTurbulence', attributes: [{ in: '' }, { result: 'turbulence' }, { baseFrequency: [.05, .05] }, { numOctaves: 5 }, { seed: 0 }, { type: 'turbulence' }, { stitchTiles: 'stitch' }]}
            
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
            stops: this.state.stops,
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

    handleMergeNodes = (index, idx) => e => {
        // const feMergeDefaults = {...this.state.feMergeDefaults}
        // console.log(feMergeDefaults);
        // feMergeDefaults.children[0].attributes.push({in: 'SourceGraphic'})
        // console.log(feMergeDefaults);
        // this.setState({feMergeDefaults})

        console.log(index);
        console.log(idx);
        // console.log(e.target.value);
        // console.log(e.target.name);
        const newfilterData = [...this.state.filterData]
        console.log(newfilterData);
        const x = newfilterData[index].children[0].attributes.slice();
        console.log(x);
        x.push({ in: 'SourceGraphic' });
        console.log(x);
        // x.splice(idx, 1, { [`${e.target.name}`]: isNaN(e.target.value) || isNaN(parseInt(e.target.value)) ? e.target.value : parseFloat(e.target.value) })
        newfilterData[index].children[0].attributes = x;
        this.setState({ filterData: newfilterData })



        
    }

    handleNewFilterData = () => {
        console.log('handle new filter data');
        let data = {
            name: this.state.filterName,
            filterData: this.state.filterData,
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

    handleConcatFilterData = (e) => {
        console.log(e.target.value);
        fetch(`/filter_data/name/?name=${e.target.value}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                console.log(data[0].filterData);
                const filterData = [...this.state.filterData]
                console.log(filterData);
                filterData.push(data[0].filterData)
                console.log(filterData);
                const flat =filterData.reduce( (prev, curr) => prev.concat(curr),[])
                console.log(flat);
                
                this.setState({ filterData: flat })
            })
        // console.log('handle concat filter data');
        // let data = {
        //     name: this.state.filterName,
        //     filterData: this.state.filterData,
        // }
        // console.log(data);
        
        // fetch('/filter_data',
        //     {
        //         method: 'POST',
        //         headers: {
        //             'Accept': 'application/json',
        //             'Content-Type': 'application/json',
        //             'Access-Control-Allow-Origin': '*'
        //         },
        //         body: JSON.stringify(data)
        //     }
        // )
        //     .then( res => res.json())
        //     .then(data => { console.log('post filter data' + JSON.stringify(data));
        //         console.log(data.filterData);
        //         this.setState({ filterData: data.filterData })
        //     })
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

    handleDelete = ( key) => (e) => {
        console.log('key', key);
        const filterData = [...this.state.filterData]
        console.log(filterData);
        filterData.splice(key,1)
        this.setState({filterData})
        console.log(filterData);
    }
    
    handleMoveUp = (key) => (e) => {
        console.log('key', key);
        const filterData = [...this.state.filterData]
        console.log(filterData);
        let splice = filterData.splice(key, 1)
        console.log('splice', splice);
        filterData.splice(key - 1, 0, splice[0])
        this.setState({filterData})
    }
    
    handleMoveDown = (key) => (e) => {
        console.log('key', key);
        const filterData = [...this.state.filterData];
        console.log(filterData);
        let splice = filterData.splice(key, 1)
        console.log('splice',splice);
        filterData.splice(key + 1, 0, splice[0])
        this.setState({filterData})
    }

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

    }

    handleToggleSourceGraphicEditor = (e) => {
        console.log('htsge');
        this.setState({showSourceGraphicEditor: !this.state.showSourceGraphicEditor})
        
    }

    handleNewFilter = e => {
        console.log(e.target.value);
        const filterData = this.state.filterData.slice();
        switch (e.target.value) {

            case 'feBlend': 
                const feBlendDefaults = { ...this.state.feBlendDefaults }
                filterData.push(feBlendDefaults);
                this.setState({filterData});
                break;

            case 'feColorMatrix': 
                const feColorMatrixDefaults = { ...this.state.feColorMatrixDefaults }
                filterData.push(feColorMatrixDefaults);
                this.setState({filterData});
                break;

            case 'feComponentTransfer':
                const feComponentTransferDefaults = { ...this.state.feComponentTransferDefaults }
                filterData.push(feComponentTransferDefaults);
                this.setState({ filterData });
                break;


            case 'feComposite': {

                const feCompositeDefaults = { ...this.state.feCompositeDefaults }
                filterData.push(feCompositeDefaults);
                this.setState({ filterData });
                break;
            }

            case 'feConvolveMatrix':
                const feConvolveMatrixDefaults = { ...this.state.feConvolveMatrixDefaults }
                filterData.push(feConvolveMatrixDefaults);
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
                const feDisplacementMapDefaults = { ...this.state.feDisplacementMapDefaults }
                filterData.push(feDisplacementMapDefaults);
                this.setState({ filterData });
                break;

            case 'feFlood':
                const feFloodDefaults = { ...this.state.feFloodDefaults }
                filterData.push(feFloodDefaults);
                this.setState({ filterData });
                break;

            case 'feGaussianBlur': {

                const feGaussianBlurDefaults = { ...this.state.feGaussianBlurDefaults }
                filterData.push(feGaussianBlurDefaults);
                this.setState({filterData});
                break;
            }

            case 'feImage':
                const feImageDefaults = { ...this.state.feImageDefaults }
                filterData.push(feImageDefaults);
                this.setState({ filterData });
                break;

            case 'feMerge':
                const feMergeDefaults = { ...this.state.feMergeDefaults }
                filterData.push(feMergeDefaults);
                this.setState({ filterData });
                break;
            
                case 'feMorphology': 
                const feMorphologyDefaults = { ...this.state.feMorphologyDefaults }
                filterData.push(feMorphologyDefaults);
                this.setState({filterData});
                break;
                
                case 'feOffset': {
    
                    const feOffsetDefaults = {...this.state.feOffsetDefaults}
                    filterData.push(feOffsetDefaults);
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

                const feTileDefaults = { ...this.state.feTileDefaults }
                filterData.push(feTileDefaults);
                this.setState({ filterData });
                break;

            case 'feTurbulence':

                const feTurbulenceDefaults = { ...this.state.feTurbulenceDefaults }
                filterData.push(feTurbulenceDefaults);
                this.setState({ filterData });
                break;

            default:
                console.log('you should never see me');

                break;
        }
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

    handleFuncData = (item, index, kidIndex, idx, a) => e => {
        console.log(item);
        console.log(index);
        console.log(kidIndex);
        console.log(idx);
        console.log(a);
        console.log(e.target.name);
        console.log(e.target.value);
        const newArr = this.state.filterData.map(obj => ({ ...obj }))
        console.log(newArr);    
        const newArray = newArr.map(obj => ({ ...obj }))[index].children
            .map(ob => ({ ...ob }));
        console.log(newArray);
        const nA = newArray[kidIndex].attributes.map(o => ({ ...o }))
        console.log(nA);
        const g = nA.map((item1, i) => {
            console.log(i);
            console.log(idx);
            console.log(item1);
            if (idx == i) {console.log('fuck');
             item1 = Object.assign({}, {[`${Object.keys(item1)}`]: e.target.value}) };
            console.log(item1);
            return item1; })
        console.log(nA);
        console.log(g);
        // const filterData = [...this.state.filterData];
        // console.log(filterData);
        // filterData[index].children[kidIndex].attributes[idx][Object.keys(filterData[index].children[kidIndex].attributes[idx])] = e.target.value;
        console.log(newArr[index].children[kidIndex].attributes)
        console.log(newArray[kidIndex])
        console.log(newArray);
        newArray[kidIndex].attributes = g;
        console.log(newArray);
        
        newArr[index].children = newArray;

        console.log(newArr);
        this.setState({filterData: newArr})
        
        
        
    }

    handleFilterName = () => e => {
        console.log(e.target.value);
        this.setState({filterName: e.target.value})
        
    }

    handleChangeComplete =   (index,idx,item) =>(color)  => {
        console.log(index);
        console.log(idx);
        console.log(color)
        console.log(item);
        const newColor = Object.assign({}, color)
        console.log(newColor);
        const hex = newColor.hex
        console.log(hex);
        console.log(x);
   
  
        const newArr = this.state.filterData.map(obj => ({ ...obj }))
        const newArray = newArr.map(obj => ({ ...obj }))[index].attributes
                            .map(o => ({...o}));
        console.log(newArray);
        const newA = newArray[idx]
        console.log(newA);
        
        const bar = Object.assign({}, { [`${Object.keys(item)}`] : hex })
        const g = newArray.map((item1, i) => {
            console.log(bar);
            console.log(i);
            console.log(idx);
            console.log(item1);



            if (Object.keys(item1)[0] == Object.keys(item)[0]) { 
                console.log('meow');
             item1 = Object.assign({}, bar) };
            console.log(Object.keys(item1));
            console.log(Object.keys(item));
            
            return item1;
        })
        console.log(newArray);
        console.log(g);
        
        
        const newfilterData = [...this.state.filterData]
        console.log(this.state.filterData);
        
        console.log(newfilterData);
        const foo = {...newfilterData[index]}
        console.log(foo);
        const baz = [...foo.attributes]
        console.log(baz);
            const d = {...baz[idx]};
        console.log(d);
        
        // const a = Object.assign({}, baz[idx])
        // console.log(a);
        
        const x = [...newfilterData[index].attributes];
        
        // const e =baz.map( (item, i) => {
        //     console.log(bar);
        //     console.log(i);
        //     console.log(idx);
        //     console.log(item);
            
            
            
        //     if (Object.keys(item) == 'lightingColor') { item = Object.assign({}, bar)};
        //     return item;
        // })
        // baz.splice(idx, 1, bar)
        // baz.splice(idx, 1, bar)
        // console.log(bar);
        
        console.log(baz);
        // console.log(e);
        
        const quz = [...baz]
        console.log(quz);
        
        // x.splice(idx, 1, bar)
        const b = Object.assign({})
        console.log(newfilterData);
        this.state
console.log(newArray);

        // newfilterData[index].attributes = answer;
        newArr[index].attributes = g;
        console.log(newArr);
        
        this.setState({ filterData: newArr })
        
    };

    handleNumberOfTableValues = (index, idx, kidIndex) => e => {
        console.log(index);
        console.log(idx);
        console.log(kidIndex);
        console.log(e.target.value);
        console.log(e.target.name);
        console.log(e.target);
        console.log(e.target.index);

        console.log(Object.values(this.state.filterData[index].children[kidIndex].attributes[1])[0].split(' '));
        const newTableValues = Object.values(this.state.filterData[index].children[kidIndex].attributes[1])[0].split(' ') 
        const mimi = Array(parseInt(e.target.value)).fill(0).map( (item,index) => index/e.target.value)
        console.log(mimi);
        console.log(mimi.join(' '));
        const mimi1 = mimi.join(' ');
        
        newTableValues.splice(parseInt(e.target.name), 1, e.target.value)
        console.log(newTableValues);
        const newTableValues1 = newTableValues.join(' ');

        const newfilterData = [...this.state.filterData]
        console.log(newfilterData);
        const x = newfilterData[index].children[kidIndex].attributes.slice();
        console.log(x);

        x.splice(idx, 1, { tableValues: mimi1 })
        // x.splice(idx, 1, { tableValues: newTableValues1 })
        newfilterData[index].children[kidIndex].attributes = x;
        this.setState({ filterData: newfilterData })

    }

    handleRGBData = (index, idx, kidIndex) =>  e => {
        console.log(index);
        console.log(idx);
        console.log(kidIndex);
        console.log('clicked');
        console.log(e);
        console.log(e.target);
        console.log(e.target.getBoundingClientRect());
        console.log(e.target.getBoundingClientRect().top);
        console.log(e.clientY - e.target.getBoundingClientRect().top )
        console.log(e.pageX);
        console.log(e.clientX);
        console.log(e.pageY);
        console.log(e.clientY);

        const ctx = e.target.getContext('2d');
        var imgData = ctx.getImageData(e.clientX - e.target.getBoundingClientRect().left, e.clientY - e.target.getBoundingClientRect().top , 1, 1),
            red = imgData.data[0],
            green = imgData.data[1],
            blue = imgData.data[2],
            alpha = imgData.data[3];
        console.log(red + " " + green + " " + blue + " " + alpha); 
        const newfilterData = [...this.state.filterData]
        console.log(newfilterData);
        const feFuncR = Object.values(newfilterData[index].children[0].attributes[1])[0].split(' ')
        const feFuncG = Object.values(newfilterData[index].children[1].attributes[1])[0].split(' ')
        const feFuncB = Object.values(newfilterData[index].children[2].attributes[1])[0].split(' ')
        const feFuncA = Object.values(newfilterData[index].children[3].attributes[1])[0].split(' ')
        console.log(feFuncR);
        console.log(feFuncR.length);
        console.log(feFuncR.length/256);
        console.log(256/feFuncR.length);
        console.log(Math.floor(red/(256/feFuncR.length)))
        console.log(red);
        console.log(red/256);
        console.log(256/red);
        feFuncR[Math.floor(red / (256 / feFuncR.length))] = 0
        feFuncG[Math.floor(green / (256 / feFuncG.length))] = 0
        feFuncB[Math.floor(blue / (256 / feFuncB.length))] = 0
        feFuncA[Math.floor(alpha / (256 / feFuncA.length))] = 0
        console.log(feFuncR);
        const feFuncR1 = feFuncR.join(' ')
        const feFuncG1 = feFuncG.join(' ')
        const feFuncB1 = feFuncB.join(' ')
        const feFuncA1 = feFuncA.join(' ')
        console.log(feFuncR1);
        if(kidIndex == 0) {
            console.log('red')
        }
        
        const r = newfilterData[index].children[0].attributes.slice();
        const g = newfilterData[index].children[1].attributes.slice();
        const b = newfilterData[index].children[2].attributes.slice();
        const a = newfilterData[index].children[3].attributes.slice();
        console.log(r);

        r.splice(idx, 1, { tableValues: feFuncR1 })
        g.splice(idx, 1, { tableValues: feFuncG1 })
        b.splice(idx, 1, { tableValues: feFuncB1 })
        a.splice(idx, 1, { tableValues: feFuncA1 })
        newfilterData[index].children[0].attributes = r;
        newfilterData[index].children[1].attributes = g;
        newfilterData[index].children[2].attributes = b;
        // newfilterData[index].children[3].attributes = a;
        this.setState({ filterData: newfilterData })
     
    }


    handleTableValues = (index,idx, kidIndex) => e => {
        console.log(index);
        console.log(idx);
        console.log(kidIndex);
        console.log(e.target.value);
        console.log(e.target.name);
        console.log(e.target);
        console.log(e.target.index);
        console.log(Object.values(this.state.filterData[index].children[kidIndex].attributes[1])[0].split(' '));
        const newTableValues = Object.values(this.state.filterData[index].children[kidIndex].attributes[1])[0].split(' ')
        newTableValues.splice(parseInt(e.target.name), 1, e.target.value)
        console.log(newTableValues);
        const newTableValues1 =newTableValues.join(' ');
        
        const newfilterData = [...this.state.filterData]
        console.log(newfilterData);
        const x = newfilterData[index].children[kidIndex].attributes.slice();
        console.log(x);

        x.splice(idx, 1, { tableValues: newTableValues1})
        newfilterData[index].children[kidIndex].attributes = x;
        this.setState({ filterData: newfilterData })
        
    }

    handleColorMatrixData = (index, idx, matrix) => e => {

        console.log(newMatrix);
        console.log(index);
        console.log(idx);
        console.log(matrix);
        
        console.log(e.target.value);
        console.log(e.target.name);
        console.log(e.target);
        console.log(e.target.index);
        // const newMatrix = Object.values(this.state.feColorMatrixDefaults.attributes[3])[0].split(' ')
        const newMatrix = Object.values(this.state.filterData[index].attributes[3])[0].split(' ')
        // console.log(newMatrix1);
        
        console.log(newMatrix);
        newMatrix.splice(parseInt(e.target.name), 1, e.target.value)
        console.log(newMatrix);
        const newMatrix1 = newMatrix.join(' ')
        console.log(newMatrix1);
        
        const newfilterData = [...this.state.filterData]
        console.log(newfilterData);
        const x = newfilterData[index].attributes.slice();
        console.log(x);
        
        x.splice(idx, 1, {values: newMatrix1 })
        newfilterData[index].attributes = x;
        this.setState({ filterData: newfilterData})
    }

    handleBaseFrequencyData = (index,idx, bindex) => e => {
        
        const newfilterData = [...this.state.filterData]
        console.log(index);
        console.log(idx);
        console.log(bindex);
        console.log(e.target.value);
        console.log(e.target.name);
        console.log(newfilterData[index].attributes[newfilterData[index].attributes.findIndex( (a,x) => x == 3)]);
        console.log(newfilterData[index].attributes.findIndex( (a,x) => x == 3));
        console.log(newfilterData[index].attributes.findIndex( (a,x) => Object.keys(a)[0] == e.target.name));
        console.log(newfilterData[index].attributes.findIndex(attrIndex => { console.log(Object.keys(attrIndex)[0]); console.log(e.target.name); Object.keys(attrIndex)[0] == e.target.name }))
        console.log(newfilterData[index].attributes[newfilterData[index].attributes.findIndex(attrIndex => Object.keys(attrIndex)[0] == e.target.name)])
        console.log(newfilterData);
        const x = newfilterData[index].attributes.slice();
        console.log(x);
        const baseFrequencyValue = Object.values(newfilterData[index].attributes[newfilterData[index].attributes.findIndex(attrIndex => Object.keys(attrIndex)[0] == e.target.name)])[0].slice()
        // const baseFrequencyValue = Object.values(newfilterData[index].attributes[2])[0].slice()
        console.log(baseFrequencyValue)
        baseFrequencyValue[bindex] = parseFloat(e.target.value);
        console.log(baseFrequencyValue)
        x[newfilterData[index].attributes.findIndex(attrIndex => Object.keys(attrIndex)[0] == e.target.name)] = {[`${e.target.name}`]:baseFrequencyValue};
        // x[2] = {[`${e.target.name}`]:baseFrequencyValue};
        // x.splice(idx, 1, { [`${e.target.name}`]: isNaN(e.target.value) || isNaN(parseInt(e.target.value)) ? e.target.value : parseFloat(e.target.value) })
        newfilterData[index].attributes = x;
        this.setState({ filterData: newfilterData})

        
    }

    handleFilterData = (index,idx) => e => {
        
        console.log(index);
        console.log(e.target.value);
        console.log(e.target.name);
        const newfilterData = [...this.state.filterData]
        console.log(newfilterData);
        const x = newfilterData[index].attributes.slice();
        console.log(x);
        
        x.splice(idx, 1, { [`${e.target.name}`]: isNaN(e.target.value) || isNaN(parseInt(e.target.value)) ? e.target.value : parseFloat(e.target.value) })
        newfilterData[index].attributes = x;
        this.setState({ filterData: newfilterData})

        
    }


    render() {

        let stopEls = this.state.stops.map((el,index,arrar) => {
             
            return (
                <stop offset={index} stop-color={el} />
            )
        })


        return (
           

                <div className="App">
                <svg width='500' height='500' id='sticky-svg'>
                    <text textAnchor='middle' x='50%' y='60%' style={{fontSize: '350px'}} fill={Object.values(this.state.SourceGraphicAttrs[2])} alignmentBaseline='middle' textLength='500' lengthAdjust='spacingAndGlyphs' className={this.state.filterData.length > 0 ? 'newFilter': ''} >SVG</text>
                    <filter id='filterData' colorInterpolationFilters='sRGB' width='200%' height='200%'>
                    {this.state.filterData.map( (item,index) => {
                        console.log(item.attributes);
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
                                console.log(item.children);
                                console.log(item.children[0].attributes);
                                
                                return (
                                    <item.type key={index} {...attrs}>
                                        {item.children[0].attributes.map((i,idx) => {
                                            console.log(i);
                                            return (
                                                <feMergeNode key={idx} in={Object.values(i)}  />
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
                        return (
                            <div className='filterData' key={i+index}>
                                <button onClick={this.handleDelete(index)}>DELETE</button>
                                <button onClick={this.handleMoveUp(index)}>MOVE UP</button>
                                <button onClick={this.handleMoveDown(index)}>MOVE DOWN</button>
                      
                            {i.attributes.map( (item, idx) => {
                                    console.log(i);
                                    console.log(i.type);
                                    console.log(Object.keys(item)[0]);
                                    console.log(Object.values(item)[0]);
                                    
                                    console.log(Object.keys(item));
                                    console.log(index);
                                    
                                    if(i.type === 'feMerge' && Object.keys(item)[0] === 'result') {
                                        return(
                                            <div key='merge-result'>
                                                <label key={Object.keys(item)+'result'} >{Object.keys(item)}<input type='text' name={Object.keys(item)} value={Object.values(item)} onChange={this.handleFilterData(index, idx)} /></label>
                                                <button key='merge-button' onClick={this.handleMergeNodes(index,idx)}>more mergeNodes</button>
                                            </div>
                                        )
                                    }
                                    if (i.type === 'feComposite' && Object.keys(item)[0] === 'operator') {
                                        return (<select onChange={this.handleFilterData(index, idx)} name={Object.keys(item)} key={Object.keys(item)}>
                                            <option disabled selected >{Object.keys(item)}</option>
                                            <option>over</option>
                                            <option>in</option>
                                            <option>out</option>
                                            <option>atop</option>
                                            <option>xor</option>
                                            <option>arithmetic</option>
                                        </select>)
                                    }
                                    
                                    if (i.type == 'feComposite' && Object.values(i.attributes[0])[0] == 'arithmetic') {
                                        console.log('comp arithmetic');
                                        console.log(Object.keys(item)[0]);
                                        
                                        // if(Object.keys(item)[0] == 'k1') {
                                            console.log('k1 son');
                                     return   Object.keys(item)[0].charAt(0) == 'k' ? 
                                             (
                                                <div key={Object.keys(item)[0] + idx}>
                                                    <label key={Object.keys(item) + 'range'}>{Object.keys(item)}<input onChange={this.handleFilterData(index, idx)} name={Object.keys(item)} type='range' min="0" max="2" step="0.1" value={Object.values(item)} />{Object.values(item)}</label>
                                                    <label key={Object.keys(item)}>{Object.keys(item)}<input onChange={this.handleFilterData(index, idx)} name={Object.keys(item)} type='text' value={Object.values(item)} />{Object.values(item)}</label>
                                                </div>
                                         ) : (<label key={Object.keys(item)}>{Object.keys(item)}<input onChange={this.handleFilterData(index, idx)} name={Object.keys(item)} type='text' value={Object.values(item)} />{Object.values(item)}</label>)
                                        // } else {return null;}
                                        
                                    } 
                                    if (i.type == 'feComposite' && Object.values(i.attributes[0])[0] != 'arithmetic') {
                                        console.log('comp arithmetic');
                                        console.log(Object.keys(item)[0]);
                                        
                                        // if(Object.keys(item)[0] == 'k1') {
                                            console.log('k1 son');
                                     return   Object.keys(item)[0].charAt(0) == 'k' ? 
                                             (
                                               null
                                         ) : (<label key={Object.keys(item)}>{Object.keys(item)}<input onChange={this.handleFilterData(index, idx)} name={Object.keys(item)} type='text' value={Object.values(item)} />{Object.values(item)}</label>)
                                        // } else {return null;}
                                        
                                    } 
                                    // else {
                                    //     if(Object.keys(item)[0].charAt(0) == 'k' ) {return null;}
                                    // }
                                    
                                    if ((i.type =='feComponentTransfer') && Object.keys(item)[0] === 'type') {
                                        return (<select onChange={this.handleFilterData(index)} name={Object.keys(item)} key={Object.keys(item)}>
                                            <option disabled selected >{Object.keys(item)}</option>
                                            <option>discrete</option>
                                            <option>table</option>
                                            <option>linear</option>
                                            <option>gamma</option>
                                            <option>identity</option>
                                        </select>)
                                    }
                                    

                                else if(Object.keys(item)[0] === 'dx') {
                                        return (
                                            <div key={Object.keys(item)[0]+idx}>
                                        <label key={Object.keys(item)+'range'}>{Object.keys(item)}<input onChange={this.handleFilterData(index, idx)} name={Object.keys(item)} type='range' min="-20" max="20" step="1" value={Object.values(item)} />{Object.values(item)}</label>
                                        <label key={Object.keys(item)}>{Object.keys(item)}<input onChange={this.handleFilterData(index, idx)} name={Object.keys(item)} type='text' value={Object.values(item)} />{Object.values(item)}</label>
                                            </div>
                                    )
                                }
                                else if(Object.keys(item)[0] === 'dy') {
                                        return (
                                            <div key={Object.keys(item)[0] + idx}>
                                        <label key={Object.keys(item)+'range'}>{Object.keys(item)}<input onChange={this.handleFilterData(index, idx)} name={Object.keys(item)} type='range' min="-20" max="20" step="1" value={Object.values(item)} />{Object.values(item)}</label>
                                        <label key={Object.keys(item)}>{Object.keys(item)}<input onChange={this.handleFilterData(index, idx)} name={Object.keys(item)} type='text' value={Object.values(item)} />{Object.values(item)}</label>
                                            </div>
                                    )
                                }
                                // else if(Object.keys(item)[0] === 'stdDeviation') {
                                //         return (
                                //             <div key={Object.keys(item)[0] + idx}>
                                //         <label key={Object.keys(item)+'range'}>{Object.keys(item)}<input onChange={this.handleFilterData(index, idx)} name={Object.keys(item)} type='range' min="0" max="20" step="1" value={Object.values(item)} />{Object.values(item)}</label>
                                //         <label key={Object.keys(item)}>{Object.keys(item)}<input onChange={this.handleFilterData(index, idx)} name={Object.keys(item)} type='text' value={Object.values(item)} />{Object.values(item)}</label>
                                //             </div>
                                //     )
                                // }

                                    else if (Object.keys(item)[0] === 'stdDeviation') {
                                        console.log(Object.values(item)[0]);
                                        console.log(Object.values(item)[0][0]);

                                        return (
                                            <div>
                                                {Object.values(item)[0].map((value, bindex) => {
                                                    return (
                                                        <div>
                                                            <label key={Object.keys(item) + 'a'}>{Object.keys(item)}<input onChange={this.handleBaseFrequencyData(index, idx, bindex)} name={Object.keys(item)} type='range' min="0" max="20" step="1" value={value} />{value}</label>
                                                            <label key={Object.keys(item)}>{Object.keys(item)}<input onChange={this.handleBaseFrequencyData(index, idx, bindex)} name={Object.keys(item)} type='text' value={value} />{value}</label>
                                                        </div>

                                                    )
                                                })}
                                            </div>
                                        )
                                    }
                                    else if (Object.keys(item)[0] === 'radius') {
                                        console.log(Object.values(item)[0]);
                                        console.log(Object.values(item)[0][0]);

                                        return (
                                            <div>
                                                {Object.values(item)[0].map((value, bindex) => {
                                                    return (
                                                        <div>
                                                            <label key={Object.keys(item) + 'a'}>{Object.keys(item)}<input onChange={this.handleBaseFrequencyData(index, idx, bindex)} name={Object.keys(item)} type='range' min="0" max="100" step=".1" value={value} />{value}</label>
                                                            <label key={Object.keys(item)}>{Object.keys(item)}<input onChange={this.handleBaseFrequencyData(index, idx, bindex)} name={Object.keys(item)} type='text' value={value} />{value}</label>
                                                        </div>

                                                    )
                                                })}
                                            </div>
                                        )
                                    }
                                // else if(Object.keys(item)[0] === 'radius') {
                                //         return (
                                //             <div key={Object.keys(item)[0] + idx}>
                                //         <label key={Object.keys(item)+'range'}>{Object.keys(item)}<input onChange={this.handleFilterData(index, idx)} name={Object.keys(item)} type='range' min="0" max="100" step=".1" value={Object.values(item)} />{Object.values(item)}</label>
                                //         <label key={Object.keys(item)}>{Object.keys(item)}<input onChange={this.handleFilterData(index, idx)} name={Object.keys(item)} type='text' value={Object.values(item)} />{Object.values(item)}</label>
                                //             </div>
                                //     )
                                // }

                                else if(Object.keys(item)[0] === 'baseFrequency') {
                                        console.log(Object.values(item)[0]);
                                        console.log(Object.values(item)[0][0]);
                                        
                                        return (
                                            <div>
                                            { Object.values(item)[0].map((value,bindex) => {
                                                return (
                                                    <div>
                                                        <label key={Object.keys(item) + 'a'}>{Object.keys(item)}<input onChange={this.handleBaseFrequencyData(index, idx, bindex)} name={Object.keys(item)} type='range' min=".001" max="1" step=".001" value={value} />{value}</label>
                                                        <label key={Object.keys(item)}>{Object.keys(item)}<input onChange={this.handleBaseFrequencyData(index, idx, bindex)}name={Object.keys(item)} type='text' value={value} />{value}</label>
                                                    </div>

                                                )
                                            })}
                                            </div>
                                    )
                                }

                                    else if (Object.keys(item)[0] === 'scale') {
                                        return (
                                            <div>
                                                <label key={Object.keys(item)}>{Object.keys(item)}<input onChange={this.handleFilterData(index, idx)} name={Object.keys(item)} type='range' min="-100" max="100" step="1" value={Object.values(item)} />{Object.values(item)}</label>
                                                <label key={Object.keys(item)}>{Object.keys(item)}<input onChange={this.handleFilterData(index, idx)} name={Object.keys(item)} type='text' value={Object.values(item)} />{Object.values(item)}</label>
                                            </div>
                                        )
                                    }

                                    else if (Object.keys(item)[0] === 'numOctaves' || Object.keys(item)[0] === 'seed') {
                                        return (
                                            <div>
                                        <label key={Object.keys(item)+'a'}>{Object.keys(item)}<input onChange={this.handleFilterData(index, idx)} name={Object.keys(item)} type='range' min="1" max="10" step="1" value={Object.values(item)} />{Object.values(item)}</label>
                                        <label key={Object.keys(item)}>{Object.keys(item)}<input onChange={this.handleFilterData(index, idx)} name={Object.keys(item)} type='text' value={Object.values(item)} />{Object.values(item)}</label>
                                            </div>
                                    )
                                }
                                else if(Object.keys(item)[0] === 'floodOpacity') {
                                        return (
                                            <div>
                                        <label key={Object.keys(item)+'a'}>{Object.keys(item)}<input onChange={this.handleFilterData(index, idx)} name={Object.keys(item)} type='range' min="0" max="1" step=".1" value={Object.values(item)} />{Object.values(item)}</label>
                                        <label key={Object.keys(item)}>{Object.keys(item)}<input onChange={this.handleFilterData(index, idx)} name={Object.keys(item)} type='text' value={Object.values(item)} />{Object.values(item)}</label>
                                            </div>
                                    )
                                }
                                else if(Object.keys(item)[0] === 'surfaceScale') {
                                        return (
                                            <div>
                                        <label key={Object.keys(item)+'a'}>{Object.keys(item)}<input onChange={this.handleFilterData(index, idx)} name={Object.keys(item)} type='range' min="1" max="100" step="1" value={Object.values(item)} />{Object.values(item)}</label>
                                        <label key={Object.keys(item)}>{Object.keys(item)}<input onChange={this.handleFilterData(index, idx)} name={Object.keys(item)} type='text' value={Object.values(item)} />{Object.values(item)}</label>
                                            </div>
                                    )
                                }
                                else if(Object.keys(item)[0] === 'diffuseConstant') {
                                        return (
                                            <div>
                                        <label key={Object.keys(item)+'a'}>{Object.keys(item)}<input onChange={this.handleFilterData(index, idx)} name={Object.keys(item)} type='range' min=".1" max="2" step=".1" value={Object.values(item)} />{Object.values(item)}</label>
                                        <label key={Object.keys(item)}>{Object.keys(item)}<input onChange={this.handleFilterData(index, idx)} name={Object.keys(item)} type='text' value={Object.values(item)} />{Object.values(item)}</label>
                                            </div>
                                    )
                                }
                                    else if (Object.keys(item)[0] === 'specularConstant' || Object.keys(item)[0] === 'specularExponent') {
                                        return (
                                            <div>
                                        <label key={Object.keys(item)+'a'}>{Object.keys(item)}<input onChange={this.handleFilterData(index, idx)} name={Object.keys(item)} type='range' min="1" max="50" step="1" value={Object.values(item)} />{Object.values(item)}</label>
                                        <label key={Object.keys(item)}>{Object.keys(item)}<input onChange={this.handleFilterData(index, idx)} name={Object.keys(item)} type='text' value={Object.values(item)} />{Object.values(item)}</label>
                                            </div>
                                    )
                                }
                                    else if (Object.keys(item)[0] === 'x' || Object.keys(item)[0] === 'y' || Object.keys(item)[0] === 'width' || Object.keys(item)[0] === 'height') {
                                        return (
                                            <div>
                                        <label key={Object.keys(item)+'a'}>{Object.keys(item)}<input onChange={this.handleFilterData(index, idx)} name={Object.keys(item)} type='range' min="1" max="500" step="1" value={Object.values(item)} />{Object.values(item)}</label>
                                        <label key={Object.keys(item)}>{Object.keys(item)}<input onChange={this.handleFilterData(index, idx)} name={Object.keys(item)} type='text' value={Object.values(item)} />{Object.values(item)}</label>
                                            </div>
                                    )
                                }
                                    else if (Object.keys(item)[0] === 'divisor' || Object.keys(item)[0] === 'bias' || Object.keys(item)[0] === 'targetX' || Object.keys(item)[0] === 'targetY' ) {
                                        return (
                                            <div>
                                        <label key={Object.keys(item)+'a'}>{Object.keys(item)}<input onChange={this.handleFilterData(index, idx)} name={Object.keys(item)} type='range' min="0" max="10" step="1" value={Object.values(item)} />{Object.values(item)}</label>
                                        <label key={Object.keys(item)}>{Object.keys(item)}<input onChange={this.handleFilterData(index, idx)} name={Object.keys(item)} type='text' value={Object.values(item)} />{Object.values(item)}</label>
                                            </div>
                                    )
                                }

                                else if(Object.keys(item)[0] === 'floodColor') {
                                        console.log(Object.values(this.state.filterData[index].attributes[idx])[0]);
                                        
                                        return (
                                            <SketchPicker color={Object.values(this.state.filterData[index].attributes[idx])[0]} onChange={this.handleChangeComplete(index,idx,item)}/>
                                    )
                                }

                                    else if (Object.keys(item)[0] == 'lightingColor') {
                                        return (
                                            <SketchPicker color={Object.values(this.state.filterData[index].attributes[idx])[0]} onChange={this.handleChangeComplete(index, idx, item)} />
                                        )

                                    } 
                            

                                else if ( i.type === 'feColorMatrix' && Object.keys(item)[0] === 'type') {
                                    return (<select onChange={this.handleFilterData(index,idx)} name={Object.keys(item)} key={Object.keys(item)}>
                                        <option disabled selected >{Object.keys(item)}</option>
                                        <option>matrix</option>
                                        <option>hueRotate</option>
                                        <option>saturate</option>
                                        <option>luminanceToAlpha</option>
                                            </select>)
                            }
                                    else if (i.type === 'feColorMatrix' && Object.keys(item)[0] === 'values' && Object.values(i.attributes[2])[0] === 'matrix' ) {
                                        console.log(Object.values(i.attributes[2]));
                                        
                                        return (<ColorMatrix key='ColorMatrix' changeMatrix={this.handleColorMatrixData(index, idx, Object.values(this.state.feColorMatrixDefaults.attributes[3])[0])} matrixValues={Object.values(this.state.filterData[index].attributes[3])[0]}/>)
                            }
                                    else if (i.type === 'feColorMatrix' && Object.keys(item)[0] === 'values' && Object.values(i.attributes[2])[0] === 'hueRotate' ) {
                                        console.log(Object.values(i.attributes[2]));
                                        
                                        return (<label key={Object.keys(item) + 'range'}>{Object.keys(item)}<input onChange={this.handleFilterData(index, idx)} name={Object.keys(item)} type='range' min="0" max="360" step="1" value={Object.values(item)} />{Object.values(item)}</label>)
                            }
                                    else if (i.type === 'feColorMatrix' && Object.keys(item)[0] === 'values' && Object.values(i.attributes[2])[0] === 'saturate' ) {
                                        console.log(Object.values(i.attributes[2]));
                                        
                                        return (<label key={Object.keys(item) + 'range'}>{Object.keys(item)}<input onChange={this.handleFilterData(index, idx)} name={Object.keys(item)} type='range' min="0" max="10" step="1" value={Object.values(item)} />{Object.values(item)}</label>)
                            }
                                else if ( i.type === 'feTurbulence' && Object.keys(item)[0] === 'type') {
                                    return (<select onChange={this.handleFilterData(index,idx)} name={Object.keys(item)} key={Object.keys(item)}>
                                        <option disabled selected >{Object.keys(item)}</option>
                                        <option>turbulence</option>
                                        <option>fractalNoise</option>
                                            </select>)
                            }
                                else if ( Object.keys(item)[0] === 'preserveAlpha') {
                                    return (<select onChange={this.handleFilterData(index,idx)} name={Object.keys(item)} key={Object.keys(item)}>
                                        <option disabled selected >{Object.keys(item)}</option>
                                        <option>true</option>
                                        <option>false</option>
                                            </select>)
                            }
                               
                                else if ( Object.keys(item)[0] === 'edgeMode') {
                                    return (<select onChange={this.handleFilterData(index,idx)} name={Object.keys(item)} key={Object.keys(item)}>
                                        <option disabled selected >{Object.keys(item)}</option>
                                        <option>duplicate</option>
                                        <option>wrap</option>
                                        <option>none</option>
                                            </select>)
                            }
                               
                            //need to add arithmetic logic
                                else if (Object.keys(item)[0] === 'operator') {
                                    return (<select onChange={this.handleFilterData(index,idx)} name={Object.keys(item)} key={Object.keys(item)}>
                                        <option>{Object.keys(item)}</option>
                                        <option>dilate</option>
                                        <option>erode</option>
                                    </select>)
                                } 
                                else if (Object.keys(item)[0] === 'kernelMatrix') {
                                    return (
                                        <div>
                                            <select onChange={this.handleFilterData(index,idx)} name={Object.keys(item)} key={Object.keys(item)}>
                                                <option>{Object.keys(item)}</option>
                                                <option>-1 -1 -1 -1 8 -1 -1 -1 -1</option>
                                                <option>1 0 0 0 0 0 0 0 -1</option>
                                                <option>3 0 0 0 0 0 0 0 -3</option>
                                                <option> 0 -1 0 -1 5 -1 0 -1 0</option>
                                                <option>0 0 0 -1 1 0 0 0 0</option>
                                                <option>-2 -1 0 -1 1 1 0 1 2</option>
                                                <option>0 0 0 0 0 0 0 0 1</option>
                                            </select>
                                            <label key={Object.keys(item)} >{Object.keys(item)}<input type='text' name={Object.keys(item)} value={Object.values(item)} onChange={this.handleFilterData(index, idx)} /></label>
                                        </div>
                                    )
                                } 
                                    else if (Object.keys(item)[0] === 'xChannelSelector' || Object.keys(item)[0] === 'yChannelSelector' ) {
                                    return (
                                            <select onChange={this.handleFilterData(index,idx)} name={Object.keys(item)} key={Object.keys(item)}>
                                                <option>{Object.keys(item)}</option>
                                                <option>R</option>
                                                <option>G</option>
                                                <option>B</option>
                                                <option>A</option>
                                            </select>
                                    )
                                } 
                                else if (Object.keys(item)[0] === 'mode') {
                                    return (<select onChange={this.handleFilterData(index,idx)} name={Object.keys(item)} key={Object.keys(item)}>
                                        <option>{Object.keys(item)}</option>
                                        <option>normal</option>
                                        <option>screen</option>
                                        <option>lighten</option>
                                        <option>darken</option>
                                        <option>multiply</option>
                                        <option>overlay</option>
                                         <option>color-dodge</option>
                                        <option>color-burn</option>
                                        <option>hard-light</option>
                                        <option>soft-light</option>
                                        <option>difference</option>
                                        <option>exclusion</option>
                                        <option>hue</option>
                                        <option>saturation</option>
                                        <option>color</option>
                                        <option>luminosity</option>
                                    </select>)
                                } 
                                else if (Object.keys(item)[0] === 'href') {
                                    return (
                                    <div>
                                    <select onChange={this.handleFilterData(index,idx)} name={Object.keys(item)} key={Object.keys(item)}>
                                        <option>{Object.keys(item)}</option>
                                        <option>#rect</option>
                                        <option>#circ</option>
                                        <option>#gold</option>
                                        <option>#bi</option>
                                        <option>#rad</option>
                                        <option>images/tiger.svg</option>
                                        <option>images/a.svg</option>
                                        <option>images/s.svg</option>
                                        <option>images/wrigley.jpeg</option>
                                        <option>http://www.mikelahay.com/images/cooper.png</option>

                                    </select>
                                            <label key={Object.keys(item)} >{Object.keys(item)}<input type='text' name={Object.keys(item)} value={Object.values(item)} onChange={this.handleFilterData(index, idx)} /></label>
                                    </div>
                                    )
                                } 
                                else if (Object.keys(item)[0] === 'preserveAspectRatio') {
                                    return (
                                    <div>
                                    <select onChange={this.handleFilterData(index,idx)} name={Object.keys(item)} key={Object.keys(item)}>
                                        <option>{Object.keys(item)}</option>
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
                                            <label key={Object.keys(item)} >{Object.keys(item)}<input type='text' name={Object.keys(item)} value={Object.values(item)} onChange={this.handleFilterData(index, idx)} /></label>
                                    </div>
                                    )
                                } 

                            else { 
                                    return (<label key={Object.keys(item)} >{Object.keys(item)}<input type='text' name={Object.keys(item)} value={Object.values(item)} onChange={this.handleFilterData(index,idx)} /></label>)
                                }
                            }
                            
                            )}

                                {i.children ? i.children.map( (kid, kidIndex) => {
                                    console.log(i);
                                    console.log(i.children);
                                    console.log(index);
                                    console.log(kid);
                                    console.log(kidIndex);
                                    console.log(Object.values(kid.attributes[0])[0]);
                                    
                                    return (<label key={kid.type}>{kid.type}
                                                {kid.attributes.map( (a, idx) => {
                                                    console.log(kid.attributes[0]);
                                                    console.log(a);
                                                    console.log(kid.type);
                                                    const regex = /Func/
                                                    console.log(regex.test(kid.type));

                                                    if (Object.keys(a) == 'type'){
                                            return (<select onChange={this.handleFuncData(i, index, kidIndex, idx, a)} name={Object.keys(a)} key={Object.keys(a)}>
                                            <option disabled selected >{Object.keys(a)}</option>
                                            <option>discrete</option>
                                            <option>table</option>
                                            <option>linear</option>
                                            <option>gamma</option>
                                            <option>identity</option>
                                        </select>)

                                    }
                                                

                                            if (regex.test(kid.type)) {
                                            console.log('feFuncR');
                                            
                                                if (Object.values(kid.attributes[0])[0] === 'discrete' || Object.values(kid.attributes[0])[0] === 'table') {
                                                console.log('im discrete');
                                                
                                                if(Object.keys(a) == 'tableValues') {
                                                    console.log('im tablevalues');
                                                    

                                                    // return (<label key={Object.keys(a)}>{Object.keys(a)}<input name={Object.keys(a)} value={Object.values(a)} onChange={this.handleFuncData(i, index, kidIndex, idx, a)} /></label>)
                                                    return (
                                                        <TableValues key='TableValues' pixelData={this.handleRGBData(index, idx, kidIndex)} changeTableValues={this.handleTableValues(index, idx, kidIndex)} changeNumberOfTableValues={this.handleNumberOfTableValues(index, idx, kidIndex)} tableValues={Object.values(this.state.filterData[index].children[kidIndex].attributes[1])[0]}/>
                                                        // <ColorMatrix key='ColorMatrix' changeMatrix={this.handleColorMatrixData(index, idx, Object.values(this.state.feColorMatrixDefaults.attributes[3])[0])} matrixValues={Object.values(this.state.filterData[index].attributes[3])[0]} />)
                                                        // <label key={Object.keys(a)}>{Object.keys(a)}<input name={Object.keys(a)} value={Object.values(a)} onChange={this.handleFuncData(i, index, kidIndex, idx, a)} /></label>
                                                )
                                                } else {
                                                    return null;
                                                }
                                            }
                                            // if (Object.values(kid.attributes[0])[0] === 'table') {
                                            //     console.log('im table');
                                                
                                            //     if(Object.keys(a) == 'tableValues') {
                                            //         console.log('im tablevalues');
                                                    

                                            //         return (<label key={Object.keys(a)}>{Object.keys(a)}<input name={Object.keys(a)} value={Object.values(a)} onChange={this.handleFuncData(i, index, kidIndex, idx, a)} /></label>)
                                            //     } else {
                                            //         return null;
                                            //     }
                                            // }
                                            
                                            if (Object.values(kid.attributes[0])[0] === 'linear') {
                                                console.log('im linear');
                                                
                                                if (Object.keys(a) == 'slope' || Object.keys(a) == 'intercept' ) {
                                                    console.log('im tablevalues');
                                                    

                                                    return (
                                                        <div>
                                                            <label key={Object.keys(a)}>{Object.keys(a)}<input name={Object.keys(a)} value={Object.values(a)} onChange={this.handleFuncData(i, index, kidIndex, idx, a)} /></label>
                                                            <label key={Object.keys(a)}>{Object.keys(a)}<input type='range' min="-2" max="2" step=".1" name={Object.keys(a)} value={Object.values(a)} onChange={this.handleFuncData(i, index, kidIndex, idx, a)} /></label>
                                                        </div>
                                                        
                                                    )
                                                } else {
                                                    return null;
                                                }
                                            }

                                            if (Object.values(kid.attributes[0])[0] === 'gamma') {
                                                console.log('im gamma');
                                                
                                                if (Object.keys(a) == 'amplitude' || Object.keys(a) == 'exponent' || Object.keys(a) == 'offset' ) {
                                                    console.log('im tablevalues');
                                                    

                                                    return (
                                                        <div>
                                                            <label key={Object.keys(a)}>{Object.keys(a)}<input name={Object.keys(a)} value={Object.values(a)} onChange={this.handleFuncData(i, index, kidIndex, idx, a)} /></label>
                                                            <label key={Object.keys(a)}>{Object.keys(a)}<input type='range' min="-2" max="2" step=".1" name={Object.keys(a)} value={Object.values(a)} onChange={this.handleFuncData(i, index, kidIndex, idx, a)} /></label>
                                                        </div>
                                                    )
                                                } else {
                                                    return null;
                                                }
                                            }
                                            


                                        }
                                                    
                                        if(Object.keys(a)== 'azimuth') {
                                            
                                            return (<label key={Object.keys(a)}>{Object.keys(a)}<input type='range' min="0" max="360" step="1" name={Object.keys(a)} value={Object.values(a)} onChange={this.handleFuncData(i, index, kidIndex, idx, a)} /></label>)
                                        }
                                        else if (Object.keys(a) == 'elevation'){
                                            return (<label key={Object.keys(a)}>{Object.keys(a)}<input type='range' min="0" max="40" step=".1" name={Object.keys(a)} value={Object.values(a)} onChange={this.handleFuncData(i, index, kidIndex, idx, a)} /></label>)

                                        } 
                                        else if (Object.keys(a) == 'limitingConeAngle'){
                                            return (<label key={Object.keys(a)}>{Object.keys(a)} value={Object.values(a)}<input type='range' min="0" max="360" step="1" name={Object.keys(a)} value={Object.values(a)} onChange={this.handleFuncData(i, index, kidIndex, idx, a)} /></label>)

                                        }
                                        
                                        else if (Object.keys(a) == 'x' || Object.keys(a) == 'y' || Object.keys(a) == 'z' || Object.keys(a) == 'pointsAtX' || Object.keys(a) == 'pointsAtY' || Object.keys(a) == 'pointsAtZ' ) {
                                            return (
                                                <div>
                                                    <label key={Object.keys(a) + 'a'}>{Object.keys(a)}<input onChange={this.handleFuncData(i, index, kidIndex, idx, a)}  name={Object.keys(a)} type='range' min="1" max="500" step="1" value={Object.values(a)} />{Object.values(a)}</label>
                                                    <label key={Object.keys(a)}>{Object.keys(a)}<input onChange={this.handleFuncData(i, index, kidIndex, idx, a)}  name={Object.keys(a)} type='text' value={Object.values(a)} />{Object.values(a)}</label>
                                                </div>
                                            )
                                        }
                                    
                                        
                                        // else if (Object.values(kid.attributes[0])[0] === 'discrete') {
                                            
                                        // }
   
             
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
                    <div className='select-wrapper'>
                    <button onClick={this.handleToggleSourceGraphicEditor}>HIDE/SHOW</button>
                        <FilterMenu selectFilter={this.handleNewFilter} />
                        <SourceGraphicSelect  selectSourceGraphic={this.handleSelectSourceGraphic}/>
                        <FilterNameSelect emitSelectedFilterName={this.handleSelectedFilterName} names={this.state.filterNames}/>
                        <ConcatFilters emitSelectedFilterName={this.handleConcatFilterData} names={this.state.filterNames}/>
                        <LinearGradientSelect emitSelectedLinearGradient={this.handleSelectedLinearGradient} names={this.state.linearGradients.map(item => {
                            console.log('item name ' +item.name);
                            
                            return item.name;
                        })}/>
                    </div>
                    <button onClick={this.handleNewFilterData}>new filter data</button>
                    {/* <button onClick={this.handleMergeNodes}>more mergeNodes</button> */}
                    <label>name:<input name='filterName' value={this.state.filterName} onChange={this.handleFilterName()} /></label>
                    <SourceGraphicEditor   showSourceGraphicEditor={this.state.showSourceGraphicEditor} changeText={this.handleText} attrs={this.state.SourceGraphicAttrs} changeSource={this.handleSourceChange}/>
                    <GradientEditor createNewLinearGradient={this.handleNewLinearGradient} attrs={this.state.gradientAttrs} changeGradient={this.handleGradientChange} />
                    <StopAdder addStop={this.handleStop} pushStop={this.handlePushStop} />
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
                            <filter id='f' width='200%' height='200%' x='-20%' y='-20%' colorInterpolationFilters='sRGB'>
                                {/* {els} */}
                            </filter>
                        </defs>
                    </svg>
                    <div className='rep-svg-wrapper'>
                        <LinearGradientRepresentation>
                            {this.state.stops.map((el,index,array) => {
                                return (
                                    <div className='linear-rep' key={index}>
                                        <label  >offset
                                            <input key={el[index]} onChange={this.handleStopChange(el, index)} type='range'min="0" max="1" step="0.01" name='offset' value={el.offset} />
                                        </label>
                                        <label  >stop-color
                                            <input key={el[index]} onChange={this.handleStopChange(el, index)} type='text' name='stopColor' value={el.stopColor} />
                                        </label>
                                        <label  >stop-opactiy
                                            <input key={el[index]} onChange={this.handleStopChange(el, index)} type='range'min="0" max="1" step="0.01" name='stopOpacity' value={el.stopOpacity} />
                                        </label>
                                            <button onClick={this.handleDeleteStop(index)}>DELETE</button>
                                    </div>
                                )
                            })}
                        </LinearGradientRepresentation>
                        <svg id='sourceGraphic' viewBox='0 0 500 500' width='100%' preserveAspectRatio='xMinYMin meet'>
                            { this.state.selectedSourceGraphic == 'text' ? (
                            <SourceGraphic 
                                text={Object.values(this.state.SourceGraphicAttrs[11])} 
                                elements={this.state.filterData} 
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
                        <image className={   this.state.filterData.length? 'filter': ''} href='http://mikelahay.com/images/cooper.png' width='500' height='500' preserveAspectRatio='none'/>
                              ) : this.state.selectedSourceGraphic == 'webcam' ? (
                                    <WebCam id='video'/>
                              ) : (
                        <Circle elements={this.state.filterData}/>
                    ) }

                        </svg>
                        {/* <Canvas width='250' height='250'/> */}
                    </div>
                
                </div>
            
        );
    }
}

export default FilterRoute;
