import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './types/unity.d.ts';

createRoot(document.getElementById("root")!).render(<App />);
