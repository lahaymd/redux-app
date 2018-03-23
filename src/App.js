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

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      numberOfCircles: [0,1],
      radius: [10, 19],
      cx: [50,100],
      elements: [FeOffset, FeGaussianBlur],
      blurAttrs:[{stdDeviation:0},{in:'SourceGraphic'},{result:'blur'}],
      offsetX: 1,
      offsetY: 0,
      offsetElement: [5,20],
      results:[]
    }
  }

  

  handleClick(i) {
    const radius = this.state.radius.slice();
    console.log('circles',radius)
    radius[i] = radius[i] + 1
    this.setState({ radius: radius });
  }

  handleFilterElements() {
    const elements = this.state.offsetElement.slice();
    elements.push(2)
    console.log('elements', elements)
    this.setState({ offsetElement: elements });
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

  handleChange = (e) => {
    const els = this.state.elements.slice()
    const edge = EdgeDetection;
    const offset = FeOffset;
    const blur = FeGaussianBlur;
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
    
      default:
      console.log('fucker');
      
        break;
    }

    console.log('e.tartget.value',e.target.value)
    console.log('elsss', els);
    
    this.setState({elements: els})
    console.log('after switch elements', this.state.elements);
    
  }

  handleAttrs = (e) => {
    // e.stopPropagation();
    // e.nativeEvent.stopImmediatePropagation();
    console.log(this.state.blurAttrs)
    console.log(e);
    
  }

handleInputChange = e => {
  const els = this.state.blurAttrs.slice();
  console.log('els',els);
  const n = e.target.name;
  const val = e.target.value;
  const add_obj = {};
  add_obj[n] = val
  console.log('typeof' , typeof val);
  
  console.log('add obj',add_obj);
  
  console.log(`name = ${n} and value = ${val}`);
  
  console.log('input change', e.target.value)
  console.log('input name', e.target.name)
  const blurAttr = this.state.blurAttrs.map(item => Object.keys(item)).reduce((prev, curr) => curr.concat(prev),[])
  const blurAttrIndex = this.state.blurAttrs.findIndex(item => {
    console.log('a',item); 
    console.log('b',Object.keys(item));
    console.log('c',item[Object.keys(item)] );
    
    return Object.keys(item) == e.target.name})
    console.log('blurattrindex',blurAttrIndex);
    els.splice(blurAttrIndex,1, add_obj);
  
  this.setState({ blurAttrs: els });
}




  render() {


    console.log('elementss', this.state.elements);

    let circles = this.state.numberOfCircles.map(c=> {
   
     return (

       <Circle key={c}
         rad={this.state.radius[c]}
         cx={this.state.cx[c]}
         onClick={() => this.handleClick(c)}
       />
      )
      
     
    })

    let filterElements = Object.keys(this.state).filter(item => item.includes('lement'))
    console.log('filterElements ', filterElements);
    

    let els = this.state.elements.map((el, index, array) => {
      console.log('el',el);
      
                return (
                 React.createElement(el,{key:index})
                )
    }) 

    let offset = this.state.offsetElement.map((e,i,foo, bar) => {
      console.log('e: '+e+ ' i '+i + ' f00: '+foo + ' bar: '+ bar);
      
      return (
        <FeOffset key={e *Math.random()}  offsetX={parseInt(this.state.offsetX )+ i} offsetY={this.state.offsetY} />
      )
    })

    return (
      <div className="App">
        <RenderSelectedElementCard 
        alertAttrs={this.handleAttrs} 
        selectedElement={this.state.elements[this.state.elements.length-1].name} 
        attrs={this.state.blurAttrs}
        changeInputs={this.handleInputChange}
        />
      <FilterSelect  selectChange={this.handleChange}/>
      <svg>
        <defs>
          <filter>
            <EdgeDetection/>
            {els}
          </filter>
          </defs>
        </svg>
        <HTMLRepresentation >
          {offset}
        </HTMLRepresentation >
      <FilterElementEditor 
        dx={this.state.offsetX}
        dy={this.state.offsetY}
        onChangeX={this.handleInputX}
          onChangeY={this.handleInputY}
      />
       <button onClick={()=> this.handleFilterElements()}>add filter</button>
      <svg>
        <defs>
          <EmptyFilter t={this.state.offsetElement.length - 2}>
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
            </filter>
        </defs>
        {circles}
      </svg>
      </div>
    );
  }
}

export default App;
