// src/components/BookCard.js

import React from 'react';
import './style/styler.css'; // Import the CSS file

const BookCard = ({ book, onAddToBookshelf, onDiscard, onDelete }) => {
    return (
        <div className="card mb-3 ">
            <div className="card-body card-background">
                <h5 className="card-title ">{book.title}</h5>
                <p className="card-text card-color">Author: {book.author_name?.join(', ')}</p>
                <p className="card-text card-color">Edition: {book.edition_count}</p>
                <button className="btn btn-success mr-2" onClick={() => onAddToBookshelf(book)}>Add to Bookshelf</button>
                {/* {onDelete && <button className="btn btn-danger" onClick={() => onDelete(book)}>Delete</button>} */}
            </div>
        </div>
    );
};

export default BookCard;
