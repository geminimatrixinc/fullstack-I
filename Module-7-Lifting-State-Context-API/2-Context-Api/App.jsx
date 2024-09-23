import React from 'react';
import { ThemeProvider } from './ThemeContext';
import ThemeToggle from './ThemeToggle';
import ThemedComponent from './ThemedComponent';

const App = () => {
    return (
        <ThemeProvider>
            <div className="App">
                <h1>Context API Example</h1>
                <ThemeToggle />
                <ThemedComponent />
            </div>
        </ThemeProvider>
    );
};

export default App;
