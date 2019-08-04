import React, {Component} from 'react';
import photo from '../profile-medium.jpg';

class Profile extends Component {
    render() {
        const profile = this.props.profile;

        return (
            <div className="card border-0 shadow p-2 mb-4">
                <div className="card-body">
                    <div style={{"textAlign": "center"}}>
                        <img id="profile" className="rounded-circle img-fluid" src={photo} alt="Profile"/>
                    </div>
                    <h1 className="profile_header">{profile.name}</h1>
                    <h4 className="profile_subheader">
                        {profile.location.city}
                    </h4>

                    {profile.summary.map((key, index) => {
                        return(
                            <p>{profile.summary[index]}</p>
                        );
                    })}
                    </div>        
            </div>
        );
    }
}

export default Profile;