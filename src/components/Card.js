import React, {Component} from 'react';
import Job from './Job';

class Card extends Component {
    render() {
        const work = this.props.work.slice().reverse();

        return(
            <div className="card_container">
                <h1>Job Experience</h1>
                <br/>
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
        );
    }
}

export default Card;