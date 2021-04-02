import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
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

export default App;
