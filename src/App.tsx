import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { AppProvider } from './contexts/AppContext';
import Header from './components/Header';
import Footer from './components/Footer';
import GeneralLandingPage from './pages/GeneralLandingPage';
import InfluencerLandingPage from './pages/InfluencerLandingPage';
import MerchantLandingPage from './pages/MerchantLandingPage';
import InfluencerLogin from './pages/InfluencerLogin';
import InfluencerSignup from './pages/InfluencerSignup';
import InfluencerDashboard from './pages/InfluencerDashboard';
import InfluencerOnboarding from './pages/InfluencerOnboarding';
import TasksPage from './pages/TasksPage';
import WalletPage from './pages/WalletPage';
import NotificationsPage from './pages/NotificationsPage';
import SettingsPage from './pages/SettingsPage';
import MerchantLogin from './pages/MerchantLogin';
import MerchantSignup from './pages/MerchantSignup';
import ErrorBoundary from './components/ErrorBoundary';
import DatabaseTest from './components/DatabaseTest';

function App() {
  return (
    <AuthProvider>
      <AppProvider>
        <ErrorBoundary>
          <Router>
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<GeneralLandingPage />} />
                  <Route path="/influencer" element={<InfluencerLandingPage />} />
                  <Route path="/merchant" element={<MerchantLandingPage />} />
                  <Route path="/influencer-login" element={<InfluencerLogin />} />
                  <Route path="/influencer-signup" element={<InfluencerSignup />} />
                  <Route path="/influencer-dashboard" element={<InfluencerDashboard />} />
                  <Route path="/influencer-onboarding" element={<InfluencerOnboarding />} />
                  <Route path="/tasks" element={<TasksPage />} />
                  <Route path="/wallet" element={<WalletPage />} />
                  <Route path="/notifications" element={<NotificationsPage />} />
                  <Route path="/settings" element={<SettingsPage />} />
                  <Route path="/merchant-login" element={<MerchantLogin />} />
                  <Route path="/merchant-signup" element={<MerchantSignup />} />
                </Routes>
                <div className="container mx-auto px-4 py-8">
                  <DatabaseTest />
                </div>
              </main>
              <Footer />
            </div>
          </Router>
        </ErrorBoundary>
      </AppProvider>
    </AuthProvider>
  );
}

export default App;