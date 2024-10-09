import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, Lock, Mail, Facebook, Instagram, Twitter, Youtube, Linkedin } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const InfluencerSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();
  const { signUp } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');
    if (password !== confirmPassword) {
      setError("Passwords don't match");
      return;
    }
    try {
      await signUp(email, password);
      setSuccessMessage('Sign-up successful! Redirecting to dashboard...');
      setTimeout(() => navigate('/influencer-dashboard'), 2000);
    } catch (error: any) {
      console.error('Error signing up:', error);
      setError(error.message || 'An error occurred during signup. Please try again.');
    }
  };

  const handleSocialSignup = (platform: string) => {
    // In a real implementation, this would initiate the OAuth flow for the selected platform
    console.log(`Signing up with ${platform}`);
    // For now, we'll just redirect to the influencer dashboard
    navigate('/influencer-dashboard');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Influencer Sign Up</h1>
        <div className="card">
          <div className="mb-6">
            <p className="text-center mb-4">Sign up with your social media account:</p>
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => handleSocialSignup('Facebook')}
                className="btn-secondary flex items-center justify-center"
              >
                <Facebook className="mr-2" size={20} />
                Facebook
              </button>
              <button
                onClick={() => handleSocialSignup('Instagram')}
                className="btn-secondary flex items-center justify-center"
              >
                <Instagram className="mr-2" size={20} />
                Instagram
              </button>
              <button
                onClick={() => handleSocialSignup('Twitter')}
                className="btn-secondary flex items-center justify-center"
              >
                <Twitter className="mr-2" size={20} />
                Twitter
              </button>
              <button
                onClick={() => handleSocialSignup('Youtube')}
                className="btn-secondary flex items-center justify-center"
              >
                <Youtube className="mr-2" size={20} />
                YouTube
              </button>
              <button
                onClick={() => handleSocialSignup('LinkedIn')}
                className="btn-secondary flex items-center justify-center col-span-2"
              >
                <Linkedin className="mr-2" size={20} />
                LinkedIn
              </button>
            </div>
          </div>
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or sign up with email</span>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            {successMessage && <p className="text-green-500 text-sm">{successMessage}</p>}
            <div>
              <button type="submit" className="w-full btn-primary">
                Sign Up
              </button>
            </div>
          </form>
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <Link to="/influencer-login" className="text-primary-500 hover:text-primary-600">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfluencerSignup;