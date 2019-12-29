import React, {Component, useContext} from 'react';
import NavbarF from "./Fcomponents/Navbar";
import NavbarC from "./Ccomponents/Navbar";
import BooklistC from "./Ccomponents/Booklist";
import BooklistF from "./Fcomponents/Booklist";
import ThemeContextProvider from "./Ccontexts/ThemeContext";
import ThemeToggle from "./Ccomponents/ThemeToggle";
import AuthContextProvider from "./Ccontexts/AuthContext";
import SongList from "./Hcomponents/SongList";
import BookContextProviderC from "./Ccontexts/BookContext";
import BookContextProviderF from "./Fcontexts/BookContext";
import BookForm from "./Fcomponents/BookForm";

function contextComponent() {
    return <div className="App">
        <AuthContextProvider>
            <ThemeContextProvider>
                <NavbarC/>
                <BookContextProviderC>
                    <BooklistC/>
                </BookContextProviderC>
                <ThemeToggle/>
            </ThemeContextProvider>
        </AuthContextProvider>
    </div>;
}

function hooksComponent() {
    return <div className="App">
        <SongList/>
    </div>;
}

function finalComponent() {
    return <div className="FinalApp">
        <BookContextProviderF>
            <NavbarF/>
            <BooklistF/>
            <BookForm/>
        </BookContextProviderF>
    </div>;
}

class App extends Component {
    render() {
        const isHooks = false;
        const isFinal = true;

        if (isFinal) {
            return  finalComponent()
        }

        return (
            isHooks ? hooksComponent() : contextComponent()
        );
    }
}

export default App;