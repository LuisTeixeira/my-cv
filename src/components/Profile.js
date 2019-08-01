import React, {Component} from 'react';
import photo from '../profile-medium.jpg';

class Profile extends Component {
    render() {
        const profile = this.props.profile;

        return (
            <div className="card border-0 shadow p-2 mb-4">
                <div className="card-body">
                    <div style={{"textAlign": "center"}}>
                        <img className="rounded-circle" src={photo} alt="Profile"/>
                    </div>
                    <h1 className="profile_header">{profile.name}</h1>
                    <h4 className="profile_subheader">
                        {profile.location.city}
                    </h4>

                    <p>{profile.summary}</p>
                </div>
            </div>
        );
    }
}

export default Profile;