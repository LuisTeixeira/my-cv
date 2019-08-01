import React from 'react';

const Contact = (props) => {
    const { email, website, github, linkedin } = props.profile;
    return(
        <div className="card border-0 shadow p-2 mb-4">
            <div className="card-body">
                <h3 className='contact_header'>Contact</h3>
                <hr/>
                <p>
                    <a 
                        href={"mailto:" + email}
                        style={{textDecoration: 'none'}}
                    >
                        {email}
                    </a>
                </p>

                <p>
                    <a 
                        href={website}
                        style={{textDecoration: 'none'}}
                        target="_blank"
                        rel = "noopener noreferrer"
                    >
                        {website}
                    </a>
                </p>

                <p>
                    <a 
                        href={github}
                        style={{textDecoration: 'none'}}
                        target="_blank"
                        rel = "noopener noreferrer"
                    >
                        {github}
                    </a>
                </p>

                <p>
                    <a 
                        href={linkedin}
                        style={{textDecoration: 'none'}}
                        target="_blank"
                        rel = "noopener noreferrer"
                    >
                        {linkedin}
                    </a>
                </p>
            </div>
        </div>
    );
}

export default Contact;