import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './assets/colors.css';
import App from './App.tsx';

const redirectTarget = new URLSearchParams(window.location.search).get(
    'redirect'
);

if (redirectTarget) {
    window.history.replaceState(null, '', redirectTarget);
}

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>
);
