import React, {Component} from 'react';
import Navbar from "./Ccomponents/Navbar";
import Booklist from "./Ccomponents/Booklist";
import ThemeContextProvider from "./Ccontexts/ThemeContext";
import ThemeToggle from "./Ccomponents/ThemeToggle";
import AuthContextProvider from "./Ccontexts/AuthContext";
import SongList from "./Hcomponents/SongList";

class App extends Component {
    render() {
        const isHooks = true;
        let contextComponent = <div className="App">
            <AuthContextProvider>
                <ThemeContextProvider>
                    <Navbar/>
                    <Booklist/>
                    <ThemeToggle/>
                </ThemeContextProvider>
            </AuthContextProvider>
        </div>;
        const hooksComponent = <div>
            <SongList/>
        </div>;
        return (
            isHooks ? hooksComponent : contextComponent
        );
    }
}

export default App;