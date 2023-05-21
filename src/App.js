import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ProjectsPage from './components/ProjectsPage';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/about' component={AboutPage} />
                <Route path='/projects' component={ProjectsPage} />
                {/* Add as many routes as you have pages */}
            </Switch>
        </Router>
    );
}

export default App;