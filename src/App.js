import React, {Component} from 'react';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import './App.css';
import Contact from './components/Contact';
import Profile from './components/Profile';
import SkillList from './components/SkillList';
import Education from './components/Education';
import Card from './components/Card';
import Octicon, {Person, Briefcase, MortarBoard, Tools, DeviceMobile} from '@primer/octicons-react';

class App extends Component {
  render() {
    const resume = this.props.data;
    return (
      <Router>
        <div className="app container-fluid">
          <div className="row">
            <nav className="col-md-1 d-md-block bg-dark sidebar">
              <div className="sidebar-sticky">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <NavLink exact to={'.'} className="nav-link">
                      <Octicon icon={Person} size="medium"/>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to={'experience'} className="nav-link">
                      <Octicon icon={Briefcase} size="medium"/>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to={'skills'} className="nav-link">
                      <Octicon icon={Tools} size="medium"/>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to={'education'} className="nav-link">
                      <Octicon icon={MortarBoard} size="medium"/>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to={'contact'} className="nav-link">
                      <Octicon icon={DeviceMobile} size="medium"/>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </nav>
          

            <div className="col-md-10 mr-sm-auto col-lg-10 px-4">
            <Route
              exact path={'/'}
              render={({match}) => <Profile profile={resume.profile}/>}
            />

            <Route
              exact path={'/experience'}
              render={({match}) => <Card work={resume.workExperience}/>}
            />

            <Route
              exact path={'/skills'}
              render={({match}) => <SkillList skills={resume.skills}/>}
            />

            <Route
              exact path={'/education'}
              render={({match}) => <Education education={resume.education}/>}
            />

            <Route
              exact path={'/contact'}
              render={({match}) => <Contact profile={resume.profile}/>}
            />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
