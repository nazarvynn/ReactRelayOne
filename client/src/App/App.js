import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { RelayEnvironmentProvider } from 'react-relay/hooks';
import RelayEnvironment from '../RelayEnvironment';
import Header from './Common/Header'
import Footer from './Common/Footer'
import PostsList from './Pages/PostsList/PostsList';
import CreatePost from './Pages/Post/CreatePost';

function App() {
    return (
        <Router>
            <div className="container py-3">
                <Header />
                <main>
                    <Route path="/" exact component={PostsList} />
                    <Route path="/createPost" component={CreatePost} exact />
                </main>
                <Footer />
            </div>
        </Router>
    );
}

function AppRoot() {
    return (
        <RelayEnvironmentProvider environment={RelayEnvironment}>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </RelayEnvironmentProvider>
    );
}

export default AppRoot;
