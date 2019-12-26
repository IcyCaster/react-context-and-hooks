import React, {Component} from 'react';
import Navbar from "./components/Navbar";
import Booklist from "./components/Booklist";
import ThemeContextProvider from "./contexts/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";
import AuthContextProvider from "./contexts/AuthContext";

class App extends Component {
    render() {
        return (
            <div className="App">
                <AuthContextProvider>
                    <ThemeContextProvider>
                        <Navbar/>
                        <Booklist/>
                        <ThemeToggle/>
                    </ThemeContextProvider>
                </AuthContextProvider>
            </div>
        );
    }
}

export default App;