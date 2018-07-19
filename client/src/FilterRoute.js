import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import RouterTest from './RouterTest';
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
import FilterMenu from './FilterMenu'

class FilterRoute extends Component {

    constructor(props) {
        super(props);
        this.state = {
            elements: [],
            stops: [],
            linearGradients: [],
            offset: '',
            stopColor: '',
            stopOpacity: '',
            SourceGraphicAttrs: [{x: '50%'}, {y:'50%'}, {fill:''}, {stroke:''}, {strokeWidth: 1}, {paintOrder: 'stroke'}, {fontSize: 400}, {textLength: 500}, {lengthAdjust: 'spacingAndGlyphs'}, {textAnchor: 'middle'}, {alignmentBaseline: 'middle'}, {text: 'SVG'}],
            gradientAttrs: [{x1: 0}, {x2: 0}, {y1: 1}, {y2: 0}, {spreadMethod: 'reflect'}, {gradientTransform: 0}, {gradientUnits:'objectBoundingBox'}, {id: 'linear'}],
            images: [],
            selectedSourceGraphic: 'text',
            filterData: [],
            filterName: '',
            filterNames: [],
            feBlendDefaults: { type: 'feBlend', attributes: [{ in: '' }, { in2: '' }, {result: 'blend'}, {mode:'normal'} ]},
            feColorMatrixDefaults: { type: 'feColorMatrix', attributes: [{ in: '' }, { result: 'colorMatrix' }, { type: 'matrix' }, { values: `1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0`}]},
            feComponentTransferDefaults: { type: 'feComponentTransfer', attributes: [{ in: '' }, { result: 'componentTransfer' }], children: [{ type: 'feFuncR', attributes: [{ type: 'discrete' }, { tableValues: '0 1' }] }, { type: 'feFuncG', attributes: [{ type: 'discrete' }, { tableValues: '0 1' }] }, { type: 'feFuncB', attributes: [{ type: 'discrete' }, { tableValues: '0 1' }] }, { type: 'feFuncA', attributes: [{ type: 'discrete' }, { tableValues: '0 1' }]}]},
            feCompositeDefaults: {type: 'feComposite', attributes: [{operator: 'over'}, {in: ''}, {in2: ''}, {result: 'composite'}]},
            feConvolveMatrixDefaults: { type: 'feConvolveMatrix', attributes: [{ in: '' }, { result: 'convolveMatrix' }, { kernelMatrix: '-1 -1 -1 -1 8 -1 -1 -1 -1' }, { divisor: 1 }, { bias: 0 }, { targetX: 2 }, { targetY: 2 }, { edgeMode: 'duplicate' }, { kernelUnitLength: 1 }, { preserveAlpha: false }, { order: 3 }]},
            feDiffuseLightingFeDistantLightDefaults: { type: 'feDiffuseLighting', attributes: [{ in: '' }, { result: 'diffuseDistant' }, { lightingColor: 'yellow' }, { surfaceScale: 1 }, { diffuseConstant: 2 }, { kernelUnitLength: 1 }], children: [{type:'feDistantLight', attributes: [{azimuth: 0}, {elevation: 0}]}]},
            feDiffuseLightingFePointLightDefaults: { type: 'feDiffuseLighting', attributes: [{ in: '' }, { result: 'diffusePoint' }, { lightingColor: 'red' }, { surfaceScale: 1 }, { diffuseConstant: 1 }, { kernelUnitLength: 1 }], children: [{ type: 'fePointLight', attributes: [{ x: 400 }, { y: 300 }, { z: 10 }]}]},
            feDiffuseLightingFeSpotLightDefaults: { type: 'feDiffuseLighting', attributes: [{ in: '' }, { result: 'diffuseSpot' }, { lightingColor: 'red' }, { surfaceScale: 1 }, { diffuseConstant: 1 }, { kernelUnitLength: 1 }], children: [{ type: 'feSpotLight', attributes: [{ limitingConeAngle: 30 }, { pointsAtX: 0 }, { pointsAtY: 0 }, { pointsAtZ: 30 }, { x: 500 }, { y: 400 }, { z: 20 }]}]},
            feDisplacementMapDefaults: { type: 'feDisplacementMap', attributes: [{ in: '' }, { in2: '' }, { xChannelSelector: 'R' }, { yChannelSelector: 'R' }, { scale: 5 }, { result: 'displace' }]},
            feFloodDefaults: { type: 'feFlood' , attributes: [{ floodOpacity: '1' }, { in: '' }, { floodColor: 'coral' }, { result: 'flood' }] },
            feGaussianBlurDefaults: { type: 'feGaussianBlur', attributes: [{ stdDeviation: 1 }, { in: '' }, { result: 'blur' }] },
            feImageDefaults: {type: 'feImage', attributes:[{x: 0},{y:0}, {width: 500}, {height: 500}, {preserveAspectRatio: 'none'}, {href: 's.svg'}, {result: 'image'}]},
            feMergeDefaults: { type: 'feMerge', attributes: [{in:''}, {result: 'merge'}], children: [{type: 'feMergeNode', attributes: [{in: 'SourceGraphic'}, {in: 'SourceGraphic'}]}]},
            feMorphologyDefaults: { type: 'feMorphology', attributes: [{ operator: 'dilate' }, { in: '' }, { radius: 2 }, { result: 'morph' }] },
            feOffsetDefaults: { type: 'feOffset', attributes: [{ dx: 0 }, { dy: 5 }, { in: '' }, { result: 'offset' }]},
            feSpecularLightingFeDistantLightDefaults: { type: 'feSpecularLighting', attributes: [{ in: '' }, { result: 'specularDistant' }, { lightingColor: 'red' }, { surfaceScale: 1 }, { specularConstant: 1 }, { specularExponent: 20 }, { kernelUnitLength: 1 }], children: [{ type: 'feDistantLight', attributes: [{ azimuth: 0 }, { elevation: 0 }]}]},
            feSpecularLightingFePointLightDefaults: { type: 'feSpecularLighting', attributes: [{ in: '' }, { result: 'specularPoint' }, { lightingColor: 'red' }, { surfaceScale: 1 }, { specularConstant: 1 }, { specularExponent: 20 }, { kernelUnitLength: 1 }], children: [{ type: 'fePointLight', attributes: [{ x: 400 }, { y: 300 }, { z: 10 }]}]},
            feSpecularLightingFeSpotLightDefaults: { type: 'feSpecularLighting', attributes: [{ in: '' }, { result: 'specularSpot' }, { lightingColor: 'red' }, { surfaceScale: 1 }, { specularConstant: 1 }, { specularExponent: 20 }, { kernelUnitLength: 1 }], children: [{ type: 'feSpotLight', attributes: [{ limitingConeAngle: 30 }, { pointsAtX: 0 }, { pointsAtY: 0 }, { pointsAtZ: 30 }, { x: 500 }, { y: 400 }, { z: 20 }]}]},
            feTileDefaults: { type: 'feTile', attributes: [{in:''}, {result: 'tile'}]},
            feTurbulenceDefaults: { type: 'feTurbulence', attributes: [{ in: '' }, { result: 'turbulence' }, { baseFrequency: .005 }, { numOctaves: 5 }, { seed: 0 }, { type: 'turbulence' }, { stitchTiles: 'stitch' }]}
            
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

    handleMergeNodes = () => {
        const feMergeDefaults = {...this.state.feMergeDefaults}
        console.log(feMergeDefaults);
        feMergeDefaults.children[0].attributes.push({in: 'SourceGraphic'})
        console.log(feMergeDefaults);
        this.setState({feMergeDefaults})
        
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

    handleFilterData = (index,idx) => e => {
        
        console.log(index);
        console.log(e.target.value);
        console.log(e.target.name);
        const newfilterData = [...this.state.filterData]
        console.log(newfilterData);
        const x = newfilterData[index].attributes.slice();
        console.log(x);
        
        x.splice(idx, 1, { [`${e.target.name}`]: isNaN(e.target.value) || isNaN(parseInt(e.target.value)) ? e.target.value : parseInt(e.target.value) })
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
                                console.log(item.children);
                                console.log(item.children[0].attributes);
                                
                                return (
                                    <item.type key={index} {...attrs}>
                                        {/* {Array(this.state.filterData.length).fill().map( (item,i) => {
                                            return (
                                                <feMergeNode in='SourceGraphic' />
                                            )
                                        })} */}
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
                        // feComponentTransferDefaults: {type: 'feComponentTransfer', attributes:[{in:''},{result:''}], children:[{type: 'feFuncR', attributes:[{type: 'discrete'}, {tableValues:'0 1'}]}]},
                        return (
                            <div className='filterData' key={i+index}>
                     
                            
                            {i.attributes.map( (item, idx) => {
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
                                    }

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
                                    return (<label key={Object.keys(item)} >{Object.keys(item)}<input type='text' name={Object.keys(item)} value={Object.values(item)} onChange={this.handleFilterData(index,idx)} /></label>)
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
                    <div className='select-wrapper'>
                        {/* <FilterSelect selectedIndex={this.handleSelectedIndex} selectChange={this.handleChange} /> */}
                        <FilterMenu selectFilter={this.handleNewFilter} />
                        <SourceGraphicSelect  selectSourceGraphic={this.handleSelectSourceGraphic}/>
                        <FilterNameSelect emitSelectedFilterName={this.handleSelectedFilterName} names={this.state.filterNames}/>
                        <LinearGradientSelect emitSelectedLinearGradient={this.handleSelectedLinearGradient} names={this.state.linearGradients.map(item => {
                            console.log('item name ' +item.name);
                            
                            return item.name;
                        })}/>
                    </div>
                    <button onClick={this.handleNewFilterData}>new filter data</button>
                    <button onClick={this.handleMergeNodes}>more mergeNodes</button>
                    <label>name:<input name='filterName' value={this.state.filterName} onChange={this.handleFilterName()} /></label>
                    <SourceGraphicEditor  changeText={this.handleText} attrs={this.state.SourceGraphicAttrs} changeSource={this.handleSourceChange}/>
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
