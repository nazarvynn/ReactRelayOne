import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.PureComponent {
    render() {
        const list = [
            { label: 'Home', path: '/', active: false },
            { label: 'Create Post', path: '/createPost', active: false }
        ];
        const navigationList = list.map(({label, path, active}, index) => (
            <Link key={index} className={'me-3 py-2 text-dark text-decoration-none ' + (active ? 'active' : '')} to={path}>
                {label}
            </Link>
        ));

        return (
            <header className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
                <span className="logo">Logo</span>
                <nav className="navigation">
                    { navigationList }
                </nav>
            </header>
        );
    }
}