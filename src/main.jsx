import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Components/App'
import './style/index.scss'
import { ContextWordsComponent } from './Context/ContextWords'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextWordsComponent>
    <App />
    </ContextWordsComponent>
  </React.StrictMode>,
)
