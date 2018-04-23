import React, { Component } from 'react';
import Filter from './Filter';
import Circle from './Circle';
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

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      numberOfCircles: [1],
      radius: [10, 100],
      cx: [50,'50%'],
      elements: [],
      blurAttrs:[{stdDeviation:0},{in:''},{result:'blur'}],
      EdgeDetectionAttrs:[{type:'matrix'},{values:'-1 -1 -1 -1 8 -1 -1 -1 -1'},{in:''},{result:'edge'}],
      FeGaussianBlurAttrs:[{stdDeviation:1},{in:''},{result:'blur'}],
      FeOffsetAttrs: [{ dx: 0 }, { dy: 0 }, { in: '' }, { result: 'offset' }],
      FeCompositeAttrs: [ {operator: 'over'}, { in: '' }, { in2: '' },{k1: 0}, {k2: 1}, {k3: 1}, {k4: 0}, { result: 'composite' }],
      FeMorphologyAttrs: [ {operator: 'dilate'}, { in: '' }, { radius: 2 }, { result: 'morph' }],
      FeFloodAttrs: [ {floodOpacity: '1'}, { in: '' }, { floodColor: 'coral' }, { result: 'flood' }],
      FeImageAttrs: [{ result: 'image' }, { x: 0 }, { y: 0 }, { width: 500 }, { height: 500 }, { par: 'none' }, { image: 'https://cdn.cnn.com/cnnnext/dam/assets/150807073434-donald-trump-gop-debate-thumbs-up-august-6-full-169.jpg' }],
      FeTileAttrs: [{ result: 'image' }, {in: '' }],
      FeBlendAttrs: [ {in: ''}, {in2:''}, {mode: 'normal'}, {result:'blend'}],
      FeColorMatrixAttrs: [ {in: ''}, {values:`1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0`}, {type: 'matrix'}, {result:'colormatrix'}],
      FeDisplacementMapAttrs: [{ in: '' }, { in2: '' }, { xChannelSelector: 'R' }, { yChannelSelector: 'R' }, {scale:5}, {result:'displace'}],
      FeTurbulenceAttrs: [{ in: '' },{result:'displace'}, {baseFrequency: .005}, {numOctaves: 5}, {seed: 0}, {type: 'turbulence'}, {stitchTiles: 'stitch'}],
      FeComponentTransferAttrs: [{ in: '' }, { result: 'transfer' }, { typeR: 'discrete' }, { tableValuesR: '' }, { typeG: 'discrete' }, { tableValuesG: '' }, { typeB: 'discrete' }, { tableValuesB: '' }, { typeA: 'discrete' }, { tableValuesA: '' }, { slopeR: '' }, { interceptR: '' }, { exponentR: '' }, { amplitudeR: '' }, { offsetR: '' }, { slopeG: '' }, { interceptG: '' }, { exponentG: '' }, { amplitudeG: '' }, { offsetG: '' }, { slopeB: '' }, { interceptB: '' }, { exponentB: '' }, { amplitudeB: '' }, { offsetB: '' }, { slopeA: '' }, { interceptA: '' }, { exponentA: '' }, { amplitudeA: '' }, { offsetA: '' }],
      FeConvolveMatrixAttrs: [{ in: '' },{result:'convolve'}, {kernelMatrix: '-1 -1 -1 -1 8 -1 -1 -1 -1'}, {divisor: 1} , {bias: 0} , {targetX: 2} , {targetY: 2} , {edgeMode: 'duplicate'} , {kernelUnitLength: 1} , {preserveAlpha: false} , {order: 3}],
      FeSpecularLightingFePointLightAttrs: [{ x: 400 }, { y: 300 }, { z: 100 }, { in: '' }, { result: 'specpoint' }, { lightingColor: 'red' }, { surfaceScale: 1 }, { specularConstant: 1 }, { specularExponent: 20 }, { kernelUnitLength: 1 }],
      FeSpecularLightingFeSpotLightAttrs: [{limitingConeAngle: 30}, { pointsAtX: 0 }, { pointsAtY: 0 }, { pointsAtZ: 30 }, { x: 500 }, { y: 400 }, { z: 0 }, { in: '' }, { result: 'specspot' }, { lightingColor: 'red' }, { surfaceScale: 1 }, { specularConstant: 1 }, { specularExponent: 1 }, { kernelUnitLength: 1 }],
      FeSpecularLightingFeDistantLightAttrs: [{azimuth: 0}, {elevation: 0}, { in: '' }, { result: 'specspot' }, { lightingColor: 'yellow' }, { surfaceScale: 20 }, { specularConstant: 2 }, { specularExponent: 4 }, { kernelUnitLength: 1 }],
      FeDiffuseLightingFePointLightAttrs: [{ x: 400 }, { y: 300 }, { z: 10 }, { in: '' }, { result: 'specpoint' }, { lightingColor: 'red' }, { surfaceScale: 1 }, { diffuseConstant: 1 }, { kernelUnitLength: 1 }],
      FeDiffuseLightingFeSpotLightAttrs: [{limitingConeAngle: 30}, { pointsAtX: 0 }, { pointsAtY: 0 }, { pointsAtZ: 30 }, { x: 500 }, { y: 400 }, { z: 20 }, { in: '' }, { result: 'specspot' }, { lightingColor: 'yellow' }, { surfaceScale: 2 }, { diffuseConstant: 2 }, { kernelUnitLength: 1 }],
      FeDiffuseLightingFeDistantLightAttrs: [{azimuth: 0}, {elevation: 10}, { in: '' }, { result: 'specspot' }, { lightingColor: 'yellow' }, { surfaceScale: 1 }, { diffuseConstant: 2 }, { kernelUnitLength: 1 }],
      offsetX: 1,
      offsetY: 0,
      offsetElement: [5,20],
      results:[],
      foo: 'FeOffset',
      inc: 0,
      attrIndex: [],
      nameOfEls: [],
      FeMergeAttrs: [{in: 'foo'}, {in2: 'bar'}, {in3: 'baz'}, {in4:''}, {result:''} ]
    }
  }

  

  handleClick(i) {
    const radius = this.state.radius.slice();
    console.log('circles',radius)
    radius[i] = radius[i] + 1
    this.setState({ radius: radius });
  }

    handleNewFilterElements() {
      
      const els = this.state.elements.slice();
      els.push(EdgeDetection);
      console.log('els', els);
      this.setState({ elements: els });

  }
  handleInputY = (e) => {
    console.log('y',e.target.value)

    console.log(this.state.offsetY)
    this.setState({ offsetY: e.target.value })
  }

   handleInputX = (e) =>{
    console.log('x',e.target.value)
   
     console.log(this.state.offsetX)
    this.setState({offsetX: e.target.value})
  }
  
  handleDelete = (param, key) =>  (e) => {
    console.log('e',e);
    console.log('etarget',e.target);
    console.log('param',param);
    console.log('key',key);
    const els = this.state.elements.slice()
    const ai = this.state.attrIndex.slice()
    console.log('elsooo', els);
    els.splice(key, 1)
    ai.splice(key, 1)

    let props = this.state[`${param}Attrs${key}`]
    console.log('PROPS', props);
    
    this.setState({elements: els})
    this.setState({attrIndex: ai})
    delete this.state[`${param}Attrs${key}`];
    console.log('elsooo', els);
    
  }

  handleChange = (e) => {
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
    nameOfElss.push(e.target.value+'Attrs'+this.state.inc)
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
     
    console.log('e.tartget.value',e.target.value)
    console.log('elsss', els);
    
    this.setState({elements: els})
    this.setState({foo:e.target.value})
    console.log('inc',this.state.inc);
    this.setState({nameOfEls: nameOfElss })
    // let at = `${this}${e.target.value}Attrs`
    // console.log('at',at);
    const ai = this.state.attrIndex.slice();
    ai.push(this.state.inc)
    this.setState({attrIndex: ai})
    console.log('attrindex',this.state.attrIndex)
    this.setState({[`${e.target.value}Attrs${this.state.inc}`]: this.state[`${e.target.value}Attrs`]})
    this.setState({inc: this.state.inc + 1})
    // this.setState({[this.state.inc]: this.state.inc + 1})
    console.log('inc',this.state.inc);
    
    // this.setState({[inc]: inc})
    console.log('after switch elements', this.state.elements);
    
  }

  handleAttrs = (e) => {
    // e.stopPropagation();
    // e.nativeEvent.stopImmediatePropagation();
    console.log(this.state[`${this.state.foo}Attrs${this.state.inc -1}`])
    console.log(e);
    
  }

handlePassedEl = (param,key,i) => e => {
  console.log(e.target);
  console.log(e.target.name);
  console.log('param', param);
  console.log('key', key);
  console.log('i', i);
  const els = this.state[`${param}Attrs${this.state.attrIndex[key]}`].slice();
  console.log('handleEls', els);

}

  handleInputChanges = (param, key) =>  e => {
  console.log('param and key' ,param, key);
  
  console.log('e ',e);
  console.log('changes e name ',e.target.name);
  console.log('changes evalue ',e.target.value);

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
  console.log('e',e);
  // console.log('e',e.target.name);
  
  const els = this.state[`${this.state.foo}Attrs${this.state.inc -1}`].slice();
  console.log('els:',els);
  const n = e.target.name;
  const val = e.target.value;
  const add_obj = {};
  add_obj[n] = val
  console.log('typeof' , typeof val);
  
  console.log('add obj',add_obj);
  
  console.log(`name = ${n} and value = ${val}`);
  
  console.log('input change', e.target.value)
  console.log('input name', e.target.name)
  // const blurAttr = this.state[`${this.state.foo}Attrs`].map(item => Object.keys(item)).reduce((prev, curr) => curr.concat(prev),[])
  const blurAttrIndex = this.state[`${this.state.foo}Attrs${this.state.inc -1}`].findIndex(item => {
    console.log('a',item); 
    console.log('b',Object.keys(item));
    console.log('c',item[Object.keys(item)] );
    
    return Object.keys(item) == e.target.name})
    console.log('blurattrindex',blurAttrIndex);
    els.splice(blurAttrIndex,1, add_obj);
  
  this.setState({ [`${this.state.foo}Attrs${this.state.inc - 1}`]: els });
  console.log('elsafterstatechange',els);
  
  console.log(`from handleInputChange${this.state.foo}Attrs${this.state.inc -1}`);
  
}


  render() {

    let stateEndingInNumber = Object.keys(this.state).filter(item => { 
    
      return item.match(/\d$/) 
    })
      let stateEndingInNumbers =stateEndingInNumber.map(item => {
      return (
        <h1 key={item}>{item}</h1>
      )})
      
    console.log('elementss', this.state.elements);

    let circles = this.state.numberOfCircles.map((c,i)=> {
   
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
      console.log('el',el);
      console.log('el name',el.name);
      console.log('index',index);
      console.log('array',array);
      console.log('inc', this.state.inc);
      // let inc = this.state.inc;
      let props = this.state[`${el.name}Attrs${this.state.attrIndex[index]}`]
      console.log('propws:', this.state[`${el.name}Attrs${this.state.inc-1}`]);
      console.log('propwssss:', this.state[`${el.name}Attrs${this.state.attrIndex[index]}`]);
      console.log('props:',props);
      console.log(this.state);
      
      var newObj = Object.assign({key:index}, ...props)
    console.log(`obj:${JSON.stringify(newObj)}`);
    
      
                return (
                  React.createElement(el,  newObj )
                )
    }) 

    return (
      <div className="App">
      {/* {stateEndingInNumbers} */}
        {/* <NewRep>
          {els}
        </NewRep> */}
        {/* <RenderSelectedElementCard 
        alertAttrs={this.handleAttrs} 
          selectedElement={this.state.elements.length ? this.state.elements[this.state.elements.length - 1].name : 'no filters yet'} 
          attrs={this.state.elements.length ? this.state[`${this.state.foo}Attrs${idx}`] : null}
        changeInputs={this.handleInputChange}
        /> */}
      <FilterSelect  selectChange={this.handleChange}/>
      <svg width='0' height='0'>
        <defs>
            <linearGradient id="coin" x2="50%" y2="40%" spreadMethod="reflect">
              <stop stop-color="gold" offset="30%" />
              <stop stop-color="goldenrod" offset="70%" />
              <stop stop-color="white" offset="82%" />
              <stop stop-color="gold" offset="92%" />
              <stop stop-color="darkgoldenrod" offset="100%" />
            </linearGradient>
            <RadialGradient/>
          <rect id='gold' width='100' height='100' fill='url(#coin)' />
          <rect id='rad' x='0' y='0' width='500' height='500' fill='url(#rg)' />
          <circle id='circ' cx='250' cy='250'r='200' fill='url(#rg)' />
          <Pattern/>
          <EmptyFilter>
            {els}
          </EmptyFilter>
            <filter id='f' width='200%' height='200%' color-interpolation-filters='sRGB'>
            {els}
          </filter>
          </defs>
        </svg>
        <HTMLRepresentation deleteFilter={this.handleDelete} changeInputs={this.handleInputChanges}  passEl={this.handlePassedEl}>
          {els}
        </HTMLRepresentation >
        
          <svg id='sourceGraphic' viewBox='0 0 500 500' preserveAspectRatio='xMinYMin meet'>
            {/* <Text/> */}
            {circles}
          </svg>
      </div>
    );
  }
}

export default App;
