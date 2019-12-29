import React, {createContext, useState} from 'react';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        { title: 'Fire book', id: 1 },
        { title: 'Water book', id: 2 },
        { title: 'Air book', id: 3 },
        { title: 'Earth book', id: 4 },
    ]);
    return <BookContext.Provider value={{books}}>
        {props.children}
    </BookContext.Provider>
};

export default BookContextProvider;