import React from 'react';

const Contact = (props) => {
    const { email, website, github, linkedin } = props.profile;
    return(
        <div>
                    <h3 className='contact_header'>Contact</h3>

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

    );
}

export default Contact;