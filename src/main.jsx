import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import CoincontextProvider from './context/coincontext.jsx'
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-rimgeg8u3u40ewbs.us.auth0.com"
    clientId="TSgGukYqSszmpBejtjJ786PY8qOA1I9k"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <BrowserRouter>
    <CoincontextProvider>
      <App />
    </CoincontextProvider>
    </BrowserRouter>
  </Auth0Provider>,
)
