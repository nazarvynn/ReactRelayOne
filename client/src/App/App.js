import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
    return (
        <Router>
            <>
                <header>Header</header>
                <div className="container">
                    Container
                </div>
                <footer>
                    Footer
                </footer>
            </>
        </Router>
    );
}

export default App;
