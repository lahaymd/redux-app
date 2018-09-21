import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import RouterTest from './RouterTest';
import Filter from './Filter';
import FilterRoute from './FilterRoute';
import GradientEditor from './GradientEditor';
import LinearGradientRoute from './LinearGradientRoute';
import RadialGradientRoute from './RadialGradientRoute';
import PatternRoute from './PatternRoute';
// import SourceGraphicEditor from './SourceGraphicEditor';


class App extends Component {




  render() {



    return (
    <Router>
        <div className="AppRouter">
          <nav>
            <ul>
                <li>
                <svg viewBox='0 0 10 10' preserveAspectRatio='xMinYMid' height='1em' className='svg-icon'><circle cx='5' cy='5' r='5' /></svg>
                  <Link to='/'>Filter</Link>
                </li>
                <li>
                <svg viewBox='0 0 10 10' preserveAspectRatio='xMinYMid' height='1em' className='svg-icon'><circle cx='5' cy='5' r='5' /></svg>
                  <Link to='/linear'>Linear Gradient</Link>
                </li>
                <li>
                <svg viewBox='0 0 10 10' preserveAspectRatio='xMinYMid' height='1em' className='svg-icon'><circle cx='5' cy='5' r='5' /></svg>
                  <Link to='/radial'>Radial Gradient</Link>
                </li>
                <li>
                <svg viewBox='0 0 10 10' preserveAspectRatio='xMinYMid' height='1em' className='svg-icon'><circle cx='5' cy='5' r='5' /></svg>
                  <Link to='/pattern'>Pattern</Link>
                </li>
            </ul>
          </nav>
          <Route exact path='/' component={FilterRoute}/>
          <Route exact path='/linear' component={LinearGradientRoute}/>
          <Route exact path='/radial' component={RadialGradientRoute}/>
          <Route exact path='/pattern' component={PatternRoute}/>
        </div>
    </Router>
    );
  }
}

export default App;
