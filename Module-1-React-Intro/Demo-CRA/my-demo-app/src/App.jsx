// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import UserProfile from './components/Module-6-React-Router/2-Route-Params/UserProfile';

const App = () => {
    return (
        <Router>
            <nav>
                <ul>
                    <li><Link to="/user/1">User 1</Link></li>
                    <li><Link to="/user/2">User 2</Link></li>
                    <li><a href="/user/500">User Link</a></li>
                </ul>
            </nav>

            <Routes>
                <Route path="/user/:id" element={<UserProfile />} />
                <Route path="/user/:id/course/:courseId" element={<h1>User Course</h1>} />
                <Route path="*" element={ <h1>Not Found</h1> } />
            </Routes>

        </Router>
    );
};

export default App;
