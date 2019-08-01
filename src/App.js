import React, {Component} from 'react';
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
      <div>
        <h1 className="warning">THIS WEBSITE IS UNDER CONSTRUCTION</h1>
        <h3>The final version will be up soon</h3>
        <div className="app container-fluid">
          <div className="row">
            <div className="col-md-4 d-md-block">
              <Profile profile={resume.profile}/>
              <hr/>
              <Contact profile={resume.profile}/>
              <hr/>
              <SkillList skills={resume.skills}/>
            </div>

            <div className="col-md-8 mr-sm-auto col-lg-8 px-4">
              <Card work={resume.workExperience}/>
              <hr/>
              <Education education={resume.education}/>
            </div>
          </div>
        </div>
        </div>
    );
  }
}

export default App;
