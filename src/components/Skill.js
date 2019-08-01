import React, {Component} from 'react';

class Skill extends Component {
    render() {
        const value = this.props.skill.value;
        return(
            <div className="col-sm-12">
                <h7>{this.props.skill.name}</h7>
                <div className="progress">
                    <div className="progress-bar bg-info" role="progressbar" style={{"width":  value + "%"}} aria-valuenow={value} aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>
        );
    }
}

export default Skill;