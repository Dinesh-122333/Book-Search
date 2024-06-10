// src/components/Home.js

import React from 'react';
import { Link } from 'react-router-dom';
// import './style/Home.css'; // Import CSS file for home page
import img from './Images/Title.png'

const Home = () => {
    return (
        <div className="container d-flex flex-column align-items-center pt-5">
        <h1 className="text-center pt-3 homer">Welcome to Book Search</h1>
        <img src={img} alt="Title" className="img-fluid w-50 my-4"/>
        <div className="d-flex justify-content-center pt-3">
            <Link to="/search" className="btn btn-outline-success me-2">Search Books</Link>
            <Link to="/bookshelf" className="btn btn-outline-secondary ms-2">My Bookshelf</Link>
        </div>
    </div>
    );
};

export default Home;
