import React, {useContext} from 'react';
import {BookContext} from "../Fcontexts/BookContext";


const Navbar = () => {
    const {books} = useContext(BookContext);
    return (
        <div className="navbar">
            <h1>Book list</h1>
            <p>Total: {books.length}</p>
        </div>
    );
};

export default Navbar;
