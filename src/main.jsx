import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import ErrorBoundary from './components/ErrorBoundary'
import { LanguageProvider } from './context/LanguageContext'

const base = import.meta.env.BASE_URL === '/' ? '/' : import.meta.env.BASE_URL.replace(/\/$/, '')

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <BrowserRouter basename={base}>
        <LanguageProvider>
          <App />
        </LanguageProvider>
      </BrowserRouter>
    </ErrorBoundary>
  </StrictMode>,
)
