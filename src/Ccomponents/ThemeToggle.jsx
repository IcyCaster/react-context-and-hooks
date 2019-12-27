import React, {Component} from 'react';
import {ThemeContext} from "../Ccontexts/ThemeContext";

class ThemeToggle extends Component {
    render() {
        return (
            <ThemeContext.Consumer>{(context) => {
                const {toggleTheme} = context;
                return <button onClick={toggleTheme}>
                       Toggle the theme!
                   </button>
            }}
            </ThemeContext.Consumer>
        );
    }
}

export default ThemeToggle;