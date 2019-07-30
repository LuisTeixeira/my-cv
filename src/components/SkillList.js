import React, {Component} from 'react';
import Skill from './Skill';

class SkillList extends Component {
    render() {
        const skills = this.props.skills;

        return(
            <div className="skills-list_container">
                <div className="skills-list_modal">
                    <h1 className="skills-list_header">Skill Set</h1>
                    <br/>
                    <div className="row">
                        {
                            skills.map((key, index) => <Skill key={key} skill={skills[index]}/>)
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default SkillList;