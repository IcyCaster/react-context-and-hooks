import React, {Component} from 'react';
import {ThemeContext} from "../Ccontexts/ThemeContext";

class Booklist extends Component {
    render() {
        return (
            <ThemeContext.Consumer>{(context) => {
                const {isLightTheme, light, dark } = context;
                const theme = isLightTheme ? light : dark;

                return <div className='book-list' style={{color: theme.syntax, background: theme.bg}}>
                    <ul>
                        <li style={{background: theme.ui}}>Fire book</li>
                        <li style={{background: theme.ui}}>Water book</li>
                        <li style={{background: theme.ui}}>Earth book</li>
                        <li style={{background: theme.ui}}>Air book</li>
                    </ul>
                </div>
            }}
            </ThemeContext.Consumer>
        );
    }
}

export default Booklist;