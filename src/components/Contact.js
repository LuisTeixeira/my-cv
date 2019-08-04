import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLinkedinIn, faGithubAlt} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope, faGlobe} from '@fortawesome/fontawesome-free-solid'

const Contact = (props) => {
    const { email, website, github, linkedin } = props.profile;
    return(
        <div className="card border-0 shadow p-2 mb-4">
            <div className="card-body">
                <h3 className='contact_header'>Contact</h3>
                <hr/>

                <div className="row">
                    <div className="col-3">
                        <a href={"mailto:" + email}
                           style={{textDecoration: 'none', color: 'inherit', textAlign: 'center'}}>
                            <h3><FontAwesomeIcon icon={faEnvelope}/></h3>
                        </a>
                    </div>
                    <div className="col-3">
                        <a 
                            href={website}
                            style={{textDecoration: 'none', color: 'inherit', textAlign: 'center'}}
                            target="_blank"
                            rel = "noopener noreferrer"
                        >
                            <h3><FontAwesomeIcon icon={faGlobe}/></h3>
                        </a>
                    </div>
                    <div className="col-3">
                        <a 
                            href={github}
                            style={{textDecoration: 'none', color: 'inherit', textAlign: 'center'}}
                            target="_blank"
                            rel = "noopener noreferrer"
                        >
                            <h3><FontAwesomeIcon icon={faGithubAlt}/></h3>
                        </a>
                    </div>
                    <div className="col-3">
                        <a 
                            href={linkedin}
                            style={{textDecoration: 'none', color: 'inherit', textAlign: 'center'}}
                            target="_blank"
                            rel = "noopener noreferrer"
                        >
                            <h3><FontAwesomeIcon icon={faLinkedinIn}/></h3>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;