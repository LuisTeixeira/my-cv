import React, {Component} from 'react';
import Job from './Job';

class Card extends Component {
    render() {
        const work = this.props.work.slice().reverse();

        return(
            <div className="card border-0 shadow mb-4">
                <div className="card-body">
                    <h1>Job Experience</h1>
                    <hr/>
                    {
                        work.slice().reverse().map((key, index) => {
                            return(
                                <Job
                                    key={key}
                                    details={work[index]}
                                />
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Card;