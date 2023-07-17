import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Theme from './styles/ThemeProvider.jsx'
import GlobalStyle from './styles/GlobalStyle.js';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Theme>
        <GlobalStyle/>
        <App />
    </Theme>
);
