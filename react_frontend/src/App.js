import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

import Sidebar from './components/Layout/Sidebar';
import Header from './components/Layout/Header';
import ProtectedRoute from './components/ProtectedRoute';

// Pages
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Upload from './pages/Upload';
import JobBoard from './pages/JobBoard';
import Matches from './pages/Matches';
import Analysis from './pages/Analysis';
import Profile from './pages/Profile';
import Settings from './pages/Settings';

// PUBLIC_INTERFACE
function App() {
  /** Root app component defines routing for auth and the protected application. */
  return (
    <Routes>
      {/* Public auth routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Protected application layout */}
      <Route
        path="/app/*"
        element={
          <ProtectedRoute>
            <div className="app-shell">
              <aside className="app-sidebar" aria-label="Sidebar navigation">
                <Sidebar />
              </aside>
              <header className="app-header" role="banner">
                <Header />
              </header>
              <main className="app-main" role="main">
                <Routes>
                  <Route index element={<Navigate to="dashboard" replace />} />
                  <Route path="dashboard" element={<Dashboard />} />
                  <Route path="upload" element={<Upload />} />
                  <Route path="jobs" element={<JobBoard />} />
                  <Route path="matches" element={<Matches />} />
                  <Route path="analysis" element={<Analysis />} />
                  <Route path="profile" element={<Profile />} />
                  <Route path="settings" element={<Settings />} />
                  <Route path="*" element={<Navigate to="dashboard" replace />} />
                </Routes>
              </main>
            </div>
          </ProtectedRoute>
        }
      />

      {/* Root redirect logic */}
      <Route path="/" element={<Navigate to="/app/dashboard" replace />} />
      <Route path="*" element={<Navigate to="/app/dashboard" replace />} />
    </Routes>
  );
}

export default App;
