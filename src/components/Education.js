import React from 'react';

const Education = (props) => {
    const {institution, course, degree, endDate} = props.education[0];
    return(
        <div className="card border-0 shadow mb-4">
            <div className="card-body">
                <h1 className="education_header">Education</h1>
                <hr/>
                <h3>{institution}</h3>
                <h4>{degree} in {course}</h4>
                <h6>Graduated in {endDate}</h6>
            </div>
        </div>
    );
}

export default Education;