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
import NewRep from './NewRep';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      numberOfCircles: [0,1],
      radius: [10, 19],
      cx: [50,100],
      elements: [],
      blurAttrs:[{stdDeviation:0},{in:'SourceGraphic'},{result:'blur'}],
      EdgeDetectionAttrs:[{type:'matrix'},{values:'10001'},{in:'SourceGraphic'},{result:'edge'}],
      FeGaussianBlurAttrs:[{stdDeviation:1},{in:'SourceAlpha'},{result:'blur'}],
      FeOffsetAttrs: [{ dx: 0 }, { dy: 0 }, { in: 'SourceGraphic' }, { result: 'offsett' }],
      FeCompositeAttrs: [ {operator: 'over'}, { in: 'SourceGraphic' }, { in2: 'SourceGraphic' }, { result: 'composite' }],
      offsetX: 1,
      offsetY: 0,
      offsetElement: [5,20],
      results:[],
      foo: 'FeOffset',
      inc: 0,
      nameOfEls: []
    }
  }

  

  handleClick(i) {
    const radius = this.state.radius.slice();
    console.log('circles',radius)
    radius[i] = radius[i] + 1
    this.setState({ radius: radius });
  }

  // handleFilterElements() {
  //   const elements = this.state.offsetElement.slice();
  //   elements.push(2)
  //   console.log('elements', elements)
  //   this.setState({ offsetElement: elements });
  // }
    
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
  


  handleChange = (e) => {
    const els = this.state.elements.slice()
    const nameOfElss = this.state.nameOfEls.slice()
    const edge = EdgeDetection;
    const offset = FeOffset;
    const blur = FeGaussianBlur;
    const composite = FeComposite;
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

handlePassedEl = (param,key) => e => {
  console.log(e.target);
  console.log(e.target.name);
  console.log('param', param);
  console.log('key', key);
  const els = this.state[`${param}Attrs${key}`].slice();
  console.log('handleEls', els);
  
  

  
  
}

  handleInputChanges = (param, key) =>  e => {
  console.log('e ',e);
  console.log('changes e name ',e.target.name);
  console.log('changes evalue ',e.target.value);

  console.log('e', e);
  // console.log('e',e.target.name);

  const els = this.state[`${param}Attrs${key}`].slice();
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
  const blurAttrIndex = this.state[`${param}Attrs${key}`].findIndex(item => {
    console.log('a', item);
    console.log('b', Object.keys(item));
    console.log('c', item[Object.keys(item)]);

    return Object.keys(item) == e.target.name
  })
  console.log('blurattrindex', blurAttrIndex);
  els.splice(blurAttrIndex, 1, add_obj);

    this.setState({ [`${param}Attrs${key}`]: els });
  console.log('elsafterstatechange', els);

    console.log(`from handleInputChange${param}Attrs${key}`);
  
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
      // <h1>{item}</h1>
    })
      let stateEndingInNumbers =stateEndingInNumber.map(item => {
      return (
        <h1 key={item}>{item}</h1>
      )})
      
      // .map(i => {

      //   return (
      //     <h1>{i}</h1>
      //   )
      // })
        

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

    let filterElements = Object.keys(this.state).filter(item => item.includes('lement'))
    console.log('filterElements ', filterElements);
    

    let els = this.state.elements.map((el, index, array) => {
      console.log('el',el);
      console.log('el name',el.name);
      console.log('index',index);
      console.log('array',array);
      console.log('inc', this.state.inc);
      // let inc = this.state.inc;
      let props = this.state[`${el.name}Attrs${index}`]
      console.log('propws:', this.state[`${el.name}Attrs${index}`]);
      console.log('props:',props);
      console.log(this.state);
      
      var newObj = Object.assign({key:index}, ...props)
    console.log(`obj:${JSON.stringify(newObj)}`);
    
      
                return (
                  React.createElement(el,  newObj )
                )
    }) 

    let offset = this.state.offsetElement.map((e,i,foo, bar) => {
      console.log('e: '+e+ ' i '+i + ' f00: '+foo + ' bar: '+ bar);
      
      return (
        <FeOffset key={e *Math.random()}  offsetX={parseInt(this.state.offsetX )+ i} offsetY={this.state.offsetY} />
      )
    })

  let idx = this.state.elements.length == 0 ? '' :this.state.inc -1
console.log('idx' , idx);
console.log('this.state.inc' , this.state.inc);

    return (
      <div className="App">
      {stateEndingInNumbers}
        <NewRep>
          {els}
        </NewRep>
        <RenderSelectedElementCard 
        alertAttrs={this.handleAttrs} 
          selectedElement={this.state.elements.length ? this.state.elements[this.state.elements.length - 1].name : 'no filters yet'} 
          attrs={this.state.elements.length ? this.state[`${this.state.foo}Attrs${idx}`] : null}
        changeInputs={this.handleInputChange}
        />
      <FilterSelect  selectChange={this.handleChange}/>
      <svg>
        <defs>
          <EmptyFilter>
            {els}
          </EmptyFilter>
          <filter id='f' width='200%' height='200%'>
        
            {/* <EdgeDetection/> */}
            {els}
          </filter>
          </defs>
        </svg>
        <HTMLRepresentation changeInputs={this.handleInputChanges}  passEl={this.handlePassedEl}>
          {els}
        </HTMLRepresentation >
      {/* <FilterElementEditor 
        dx={this.state.offsetX}
        dy={this.state.offsetY}
        onChangeX={this.handleInputX}
          onChangeY={this.handleInputY}
      /> */}
       {/* <button onClick={()=> this.handleFilterElements()}>add filter</button> */}
      <svg>
        <defs>
          {/* <EmptyFilter t={this.state.offsetElement.length - 2}>
            {offset}
              <EdgeDetection result='' />
              <feComposite result='' operator='out' in2='offset' in='edge' />
          </EmptyFilter>
            <filter width='200%' height='200%' id='f'>
              {offset}
              <FeGaussianBlur result='' deviation='1' />
              <feComposite result='comp' operator='over' in='blur' in2='offset' />
              <EdgeDetection result=''/>
              <feComposite result='' operator='out' in2='offset' in='edge' />
            </filter> */}
        </defs>
        {circles}
      </svg>
      </div>
    );
  }
}

export default App;
