import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import RouterTest from './RouterTest';
import Filter from './Filter';
import FilterRoute from './FilterRoute';
import GradientEditor from './GradientEditor';
import LinearGradientRoute from './LinearGradientRoute';
import RadialGradientRoute from './RadialGradientRoute';
import PatternRoute from './PatternRoute';
// import SourceGraphicEditor from './SourceGraphicEditor';
import FilterIcon from './FilterIcon';


class App extends Component {




  render() {



    return (
      <Provider store={store}>
    <Router>
        <div className="AppRouter">
           
          <nav>
            <ul>
                <li>
                  <FilterIcon />
                {/* <svg viewBox='0 0 10 10' preserveAspectRatio='xMinYMid' height='1em' className='svg-icon'><circle cx='5' cy='5' r='5' /></svg> */}
                  <Link to='/'>Filter</Link>
                </li>
                <li id='linear-nav'>
                <svg viewBox='0 0 10 10' preserveAspectRatio='xMinYMid' height='1em' fill='url(#rainbow)' className='svg-icon'><circle cx='5' cy='5' r='5' /></svg>
                  <Link to='/linear'>Linear Gradient</Link>
                </li>
                <li>
                <svg viewBox='0 0 10 10' preserveAspectRatio='xMinYMid' height='1em' fill='url(#rainbowBullseye)' className='svg-icon'><circle cx='5' cy='5' r='5' /></svg>
                  <Link to='/radial'>Radial Gradient</Link>
                </li>
                <li>
                <svg viewBox='0 0 10 10' preserveAspectRatio='xMinYMid' height='1em' fill='url(#circles)' className='svg-icon'><pattern viewBox="0 0 100 100" preserveAspectRatio="none" x="0" y="0" width="0.25" height="0.25" id="circles" patternUnits="objectBoundingBox" patternContentUnits="userSpaceOnUse"><rect fill="#F7931E" width="1000" height="1000" x="-500" y="-500"></rect><circle fill="#FF0000" stroke="#000000" stroke-miterlimit="10" cx="0" cy="0" r="50"></circle><circle fill="#29ABE2" stroke="#000000" stroke-miterlimit="10" cx="100" cy="0" r="50"></circle><circle fill="#ED1E79" stroke="#000000" stroke-miterlimit="10" cx="0" cy="100" r="50"></circle><circle fill="#D9E021" stroke="#000000" stroke-miterlimit="10" cx="100" cy="100" r="50"></circle></pattern><circle cx='5' cy='5' r='5' /></svg>
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
    </Provider>
    );
  }
}

export default App;
