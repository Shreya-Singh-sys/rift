import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';

const rawPath = window.location.pathname;
const path = rawPath !== '/' && rawPath.endsWith('/') ? rawPath.slice(0, -1) : rawPath;

// If someone tries to access /dashboard without being logged in → send to /login
const userName = localStorage.getItem('aline_current_user');
if (path === '/dashboard' && !userName) {
  window.location.assign('/login');
}

const routes = {
  '/': App,
  '/login': LoginPage,
  '/dashboard': () => <DashboardPage userName={userName || 'Operator'} />,
};

const CurrentPage = routes[path] || App;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CurrentPage />
  </React.StrictMode>
);

