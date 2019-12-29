import React, {useContext} from 'react';
import {ThemeContext} from "../Ccontexts/ThemeContext";
import {BookContext} from "../Ccontexts/BookContext";

const Booklist = () => {
    const {books} = useContext(BookContext);
    const {isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    return (
        <div className='book-list' style={{color: theme.syntax, background: theme.bg}}>
            <ul>
                {books.map(book => {
                    return (
                        <li key={book.id} style={{background: theme.ui}}>{book.title}</li>
                    )
                })}
            </ul>
        </div>
    );
};

export default Booklist;