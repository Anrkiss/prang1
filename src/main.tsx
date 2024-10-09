import React from 'react'
import ReactDOM from 'react-dom/client'
import { AuthProvider } from './contexts/AuthContext'
import App from './App.tsx'
import './index.css'

const root = document.getElementById('root')

if (!root) {
  console.error('Root element not found')
} else {
  try {
    ReactDOM.createRoot(root).render(
      <React.StrictMode>
        <AuthProvider>
          <App />
        </AuthProvider>
      </React.StrictMode>,
    )
  } catch (error) {
    console.error('Error rendering app:', error)
  }
}