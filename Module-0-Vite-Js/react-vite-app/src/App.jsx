


import { ThemeProvider } from './components/2-Context-Api/ThemeContext';
import ThemedComponent from './components/2-Context-Api/ThemedComponent';
import ThemeToggle from './components/2-Context-Api/ThemeToggle';

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
