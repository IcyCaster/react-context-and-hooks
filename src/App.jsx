import React, {Component} from 'react';
import Navbar from "./components/Navbar";
import Booklist from "./components/Booklist";
import ThemeContextProvider from "./contexts/ThemeContext";

class App extends Component {
    render() {
        return (
            <div className="App">
                <ThemeContextProvider>
                <Navbar/>
                <Booklist/>
                </ThemeContextProvider>
            </div>
        );
    }
}

export default App;