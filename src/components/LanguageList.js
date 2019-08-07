import React, {Component} from 'react';

class LanguageList extends Component {
    render() {
        const languages = this.props.languages;

        return(
            <div className="card border-0 shadow p-2 mb-4">
                <div className="card-body">
                    <h3>Languages</h3>
                    <hr/>
                    <div className="row">
                        {
                            languages.map((key, index) => {
                                const language = languages[index];
                                return (
                                    <div className="col-sm-12 mb-2">
                                        {language.language}
                                        <div className="progress">
                                            <div className="progress-bar bg-info" role="progressbar" style={{"width":  language.levelNumber + "%"}} aria-valuenow={language.levelNumber} aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default LanguageList;