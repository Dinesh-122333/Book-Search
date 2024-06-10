import React, { useEffect, useState } from 'react';
import "./style/styler.css";

const Bookshelf = () => {
    const [bookshelf, setBookshelf] = useState([]);

    useEffect(() => {
        const savedBookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
        setBookshelf(savedBookshelf);
    }, []);

    const handleDelete = (bookToDelete) => {
        const newBookshelf = bookshelf.filter(book => book.key !== bookToDelete.key);
        setBookshelf(newBookshelf);
        localStorage.setItem('bookshelf', JSON.stringify(newBookshelf));
    };

    return (
        <div className="shelf-background">
            <div className="container mt-4">
            <h2>My Bookshelf</h2>
            <div className="row">
                {bookshelf.map((book, index) => (
                    <div key={index} className="col-md-4">
                        <div className="card mb-3">
                            <div className="card-body">
                                <h5 className="card-title">{book.title}</h5>
                                <p className="card-text">Author: {book.author_name?.join(', ')}</p>
                                <p className="card-text">Edition: {book.edition_count}</p>
                                <button className="btn btn-outline-danger mr-2 mb-2" onClick={() => handleDelete(book)}>Delete</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </div>
        
    );
};

export default Bookshelf;
