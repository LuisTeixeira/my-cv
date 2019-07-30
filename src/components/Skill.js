import React, {Component} from 'react';

class Skill extends Component {
    render() {
        const value = this.props.skill.value;
        const description = this.props.skill.description;
        return(
            <div className="col-sm-6">
                <div className="card mt-2">
                    <div className="card-body">
                        <h5>{this.props.skill.name}</h5>
                        <hr/>
                        <p>{description}</p>
                        <div className="progress">
                            <div className="progress-bar bg-info" role="progressbar" style={{"width":  value + "%"}} aria-valuenow={value} aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Skill;