import React, {Component} from 'react';

class Job extends Component {
    render() {
        const details = this.props.details;
        return(
            <div>
                <h3>{details.company}</h3>
                <h4>{details.position}</h4>
                <h6>
                    {
                        details.current ? 
                        `Current Job as of ${details.startDate}` : 
                        `${details.startDate} to ${details.endDate}`
                    }
                </h6>
                <br/>

                <p className="job_paragraph">{details.summary}</p>
                <ul className="job_list">
                {
                    details.achievments.map((key, index) => {
                    return <li key={index}>{details.achievments[index]}</li>
                    })
                }
                </ul>
                <hr/>
            </div>
        );
    }
}

export default Job;