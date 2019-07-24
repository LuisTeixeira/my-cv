import React, {Component} from 'react';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Contact from './components/Contact';
import Profile from './components/Profile';
import SkillList from './components/SkillList';
import Education from './components/Education';
import Card from './components/Card';

class App extends Component {
  render() {
    const resume = this.props.data;
    return (
      <Router>
        <div className="app">

          <Profile profile={resume.profile}/>

          <ul className="nav_container">
            <nav className="nav">
              <NavLink exact to={'.'} className="nav_btn">Experience</NavLink>
              <NavLink to={'skills'} className="nav_btn">Skills</NavLink>
              <NavLink to={'education'} className="nav_btn">Education</NavLink>
              <NavLink to={'contact'} className="nav_btn">Contact</NavLink>
            </nav>
          </ul>

          <Route
            exact path={'/'}
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
      </Router>
    );
  }
}

export default App;
