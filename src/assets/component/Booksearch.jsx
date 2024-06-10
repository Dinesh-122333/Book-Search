// src/components/BookSearch.js

import React, { useState } from 'react';
import axios from 'axios';
import BookCard from './Bookcard';

const BookSearch = ({ onAddToBookshelf }) => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = async (e) => {
        setQuery(e.target.value);
        if (e.target.value) {
            const response = await axios.get(`https://openlibrary.org/search.json?q=${e.target.value}&limit=10&page=1`);
            setResults(response.data.docs);
        } else {
            setResults([]);
        }
    };

    const handleDiscard = (bookToDiscard) => {
        setResults(results.filter(book => book.key !== bookToDiscard.key));
    };

    return (
        
        <div className='pt-5'>
            <input
                type="text"
                placeholder="Search for a book..."
                value={query}
                onChange={handleSearch}
                className="form-control mb-3"
            />
            <div>
                {results.map(book => (
                    <BookCard
                        key={book.key}
                        book={book}
                        onAddToBookshelf={onAddToBookshelf}
                        onDiscard={handleDiscard}
                    />
                ))}
            </div>
        </div>
    );
};

export default BookSearch;
