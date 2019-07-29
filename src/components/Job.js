import React, {Component} from 'react';

class Job extends Component {
    render() {
        const details = this.props.details;
        return(
            <div className="card border-0 shadow mb-4">
                <div className="card-body">
                    <h3>{details.company}</h3>
                    <h4>{details.position}</h4>
                    <hr/>
                    {
                        details.current ? 
                        `Current Job as of ${details.startDate}` : 
                        `${details.startDate} to ${details.endDate}`
                    }
                    <br/>

                    <p className="job_paragraph">{details.summary}</p>
                    <ul className="job_list">
                    {
                        details.achievments.map((key, index) => {
                        return <li key={index}>{details.achievments[index]}</li>
                        })
                    }
                    </ul>
                </div>

            </div>
        );
    }
}

export default Job;