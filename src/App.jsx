import React, {Component} from 'react';
import Navbar from "./components/Navbar";
import Booklist from "./components/Booklist";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Navbar/>
                <Booklist/>
            </div>
        );
    }
}

export default App;