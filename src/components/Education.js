import React from 'react';

const Education = (props) => {
    const {institution, course, degree, endDate} = props.education[0];
    return(
        <div className="education_container">
            <div className="education_modal">
                <div className="education">
                    <h1 className="education_header">Education</h1>
                    <div className="education_text">
                        <h4 className="education_subheader">{institution}</h4>
                        <h5>{degree} in {course}</h5>
                        <h5>Graduated in {endDate}</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Education;