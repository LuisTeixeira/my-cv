import React, {Component} from 'react';
import './App.css';
import Contact from './components/Contact';
import Profile from './components/Profile';
import SkillList from './components/SkillList';
import Education from './components/Education';
import Card from './components/Card';
import LanguageList from './components/LanguageList';

class App extends Component {
  render() {
    const resume = this.props.data;
    return (
      <div>
        <div className="app container-fluid">
          <div className="row">
            <div className="col-md-4 d-md-block">
              <Profile profile={resume.profile}/>
              <Contact profile={resume.profile}/>
              <hr/>
              <SkillList skills={resume.skills}/>
              <LanguageList languages={resume.languages}/>
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
