import React, {Component} from 'react';
import Skill from './Skill';

class SkillList extends Component {
    render() {
        const skills = this.props.skills;

        return(
            <div className="card border-0 shadow p-2 mb-4">
                <div className="card-body">
                    <h3 className="skills-list_header">Skills</h3>
                    <hr/>
                    <div className="row">
                        {
                            skills.map((key, index) => <Skill key={key} skill={skills[index]}/>)
                        }
                        <hr/>
                    </div>
                </div>
            </div>
        );
    }
}

export default SkillList;