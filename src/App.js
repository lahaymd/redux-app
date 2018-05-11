import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import RouterTest from './RouterTest';
import Filter from './Filter';
import FilterRoute from './FilterRoute';
// import SourceGraphicEditor from './SourceGraphicEditor';


class App extends Component {


  render() {



    return (
    <Router>
        <div className="AppRouter">
          {/* <nav>
            <ul>
                <li>
                <svg viewBox='0 0 10 10' preserveAspectRatio='xMinYMid' height='1em' className='svg-icon'><circle cx='5' cy='5' r='5' /></svg>
                  <Link to='/'>home</Link>
                </li>
                <li>
                <svg viewBox='0 0 10 10' preserveAspectRatio='xMinYMid' height='1em' className='svg-icon'><circle cx='5' cy='5' r='5' /></svg>
                  <Link to='/filter'>filter</Link>
                </li>
            </ul>
          </nav> */}
          <Route exact path='/' component={FilterRoute}/>
        </div>
    </Router>
    );
  }
}

export default App;
