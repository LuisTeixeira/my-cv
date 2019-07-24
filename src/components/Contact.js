import React from 'react';
import CSSTransactionGroup from 'react-addons-css-transition-group';

const Contact = (props) => {
    const { email, website, github, linkedin } = props.profile;
    const layout = {display: 'flex', flexDirection: 'column', alignItems: 'center'}
    return(
        <div className='contact_container' style={{display: 'flex'}}>
            <div className='contact_modal'>
                <CSSTransactionGroup
                    style={layout}
                    component='div'
                    transitionName='slide'
                    transitionEnterTimeout={5000}
                    transitionLeaveTimeout={3000}
                >
                    <h1 className='contact_header'>Contact</h1>

                    <h3>
                        <a 
                            href={"mailto:" + email}
                            style={{textDecoration: 'none'}}
                        >
                            {email}
                        </a>
                    </h3>

                    <h3>
                        <a 
                            href={website}
                            style={{textDecoration: 'none'}}
                            target="_blank"
                            rel = "noopener noreferrer"
                        >
                            {website}
                        </a>
                    </h3>

                    <h3>
                        <a 
                            href={github}
                            style={{textDecoration: 'none'}}
                            target="_blank"
                            rel = "noopener noreferrer"
                        >
                            {github}
                        </a>
                    </h3>

                    <h3>
                        <a 
                            href={linkedin}
                            style={{textDecoration: 'none'}}
                            target="_blank"
                            rel = "noopener noreferrer"
                        >
                            {linkedin}
                        </a>
                    </h3>

                </CSSTransactionGroup>
            </div>
        </div>
    );
}

export default Contact;