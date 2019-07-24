import React, {Component} from 'react';
import photo from '../profile.jpg';

class Profile extends Component {
    render() {
        const profile = this.props.profile;

        return (
            <div className="profile">
                <img className="profile_image" src={photo} alt="Profile"/>
                <h1 className="profile_header">{profile.name}</h1>
                <h4 className="profile_subheader">
                    {profile.location.city}
                </h4>

                <p>{profile.summary}</p>
            </div>
        );
    }
}

export default Profile;