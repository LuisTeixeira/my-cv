import React, {Component} from 'react';
import Job from './Job';

class Card extends Component {
    render() {
        const work = this.props.work;

        return(
            <div className="card_container">
                <div className="card_content">
                {
                    work.map((key, index) => {
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