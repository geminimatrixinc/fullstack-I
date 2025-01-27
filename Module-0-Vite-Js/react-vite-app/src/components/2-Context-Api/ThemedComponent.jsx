import React from 'react';
import { useTheme } from './ThemeContext';

const ThemedComponent = () => {
    const { theme } = useTheme();

    return (
        <div style={{
            backgroundColor: theme === 'light' ? '#ffffff' : '#333333',
            color: theme === 'light' ? '#000000' : '#ffffff',
            padding: '20px',
            borderRadius: '5px'
        }}>
            <h2>This is a {theme} themed component!</h2>
        </div>
    );
};

export default ThemedComponent;
