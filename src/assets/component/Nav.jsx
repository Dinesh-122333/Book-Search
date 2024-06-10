// src/components/Nav.js

import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3 py-3 shadow">
            <Link className="navbar-brand" to="/">Book Search</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Search Books</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/bookshelf">My Bookshelf</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
