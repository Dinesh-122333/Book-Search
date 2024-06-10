// src/App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookSearch from './assets/component/Booksearch';
import Bookshelf from './assets/component/Bookshelf';
import Nav from './assets/component/Nav';
import Home from './assets/component/Home';
import './styles.css';

const App = () => {
    const [bookshelf, setBookshelf] = useState(JSON.parse(localStorage.getItem('bookshelf')) || []);

    const handleAddToBookshelf = (book) => {
        const newBookshelf = [...bookshelf, book];
        setBookshelf(newBookshelf);
        localStorage.setItem('bookshelf', JSON.stringify(newBookshelf));
    };

    return (
        <Router>
            <Nav />
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/search" element={<BookSearch onAddToBookshelf={handleAddToBookshelf} />} />
                    <Route path="/bookshelf" element={<Bookshelf />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
