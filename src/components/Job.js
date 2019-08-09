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

                {details.summary.map((key, index) => {
                    return(
                        <p className="job_description">{details.summary[index]}</p>
                    );
                })}
                <h5>Achievements:</h5>
                <ul>
                {
                    details.achievments.map((key, index) => {
                    return <li key={key}>{details.achievments[index]}</li>
                    })
                }
                </ul>
                <h5>Keywords</h5>
                {
                    details.keywords.map((key,index) => {
                        return <span className="badge badge-info mr-2">{details.keywords[index]}</span>
                    })
                }
                <hr/>
            </div>
        );
    }
}

export default Job;