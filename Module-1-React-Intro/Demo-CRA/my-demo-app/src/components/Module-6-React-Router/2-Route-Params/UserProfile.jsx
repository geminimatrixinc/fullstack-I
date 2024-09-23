// UserProfile.js
import React from 'react';
import { useParams } from 'react-router-dom';

const UserProfile = (props) => {

    const { id, courseId } = useParams(); // Extracting the user ID from the URL

    return <h2>User Profile: {id}</h2>;
};

export default UserProfile;
