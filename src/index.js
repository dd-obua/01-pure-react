import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <StrictMode>
    <div>
      <h1>Denis</h1>
    </div>
  </StrictMode>
);
