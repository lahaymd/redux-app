import React, { Component } from 'react';
import Filter from './Filter';
import Circle from './Circle';
import FeOffset from './FeOffset';
import FeGaussianBlur from './FeGaussianBlur';
import FilterElementEditor from './FilterElementEditor';
import EdgeDetection from "./EdgeDetection";
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      numberOfCircles: [0,1],
      radius: [10, 19],
      items: ['foo', 'bar', 'baz'],
      circs: [30,20],
      cx: [50,100],
      elements: ['FeOffset', 'FeGaussianBlur'],
      offsetX: 0,
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


  // renderCircle(i) {
  //   return (
  //     <Circle 
  //       rad={this.state.radius[i]}
  //       cx={this.state.cx[i]}
  //       onClick={() => this.handleClick(i)}
  //     />
  //   );
  // }

  render() {
    let itemList = 
      this.state.items.map(item=>{
        return (
          <h1 key={item}>{item} </h1>
        )
      })

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
    



    let offset = this.state.offsetElement.map(e => {
      return (
        <FeOffset key={e *Math.random()}  offsetX={this.state.offsetX} offsetY={this.state.offsetY} />
      )
    })

   
    
    return (
      <div className="App">
      <FilterElementEditor 
        dx={this.state.offsetX}
        dy={this.state.offsetY}
        onChangeX={this.handleInputX}
          onChangeY={this.handleInputY}
      />
       {/* <div> {itemList}</div> */}
       <button onClick={()=> this.handleFilterElements()}>add filter</button>
      <svg>
        <defs>
            <filter width='200%' height='200%' id='f'>
              {/* <FeOffset offsetX={this.state.offsetX} offsetY={this.state.offsetY} /> */}
              {offset}
              <FeGaussianBlur result='' deviation='1' />
              <feComposite result='comp' operator='over' in='blur' in2='offset' />
              <EdgeDetection result=''/>
              <feComposite result='' operator='out' in2='offset' in='edge' />
            </filter>
            <filter width='200%' height='200%' id='edge'>
              <feConvolveMatrix  result='edge' order="3 3" preserveAlpha="true" kernelMatrix="-1 -1 -1 -1 8 -1 -1 -1 -1" />
              <feComposite operator='out' in2='SourceGraphic' in='edge' />
            </filter>
        </defs>
        {circles}
          {/* {this.renderCircle(0)} */}
          {/* {this.renderCircle(1)} */}
          {/* <Circle cx='120' rad={this.state.radius} onClick={()=> this.handleClick()}/> */}
          {/* <Circle  cx='50' rad={this.state.radius} onClick={() => this.handleClick()} /> */}
          <circle cx='20' cy='20' r='15' filter='url(#edge)'/>
      </svg>
      </div>
    );
  }
}

export default App;
