
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'

import { ThemeProvider } from './components/providers/ThemeProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ThemeProvider defaultTheme="light" storageKey="ai-voice-modulator-theme">
      <App />
    </ThemeProvider>
  </BrowserRouter>
)
