import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useApp } from '../contexts/AppContext';
import { supabase, updateProfile } from '../lib/supabase';

const InfluencerOnboarding: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { refreshProfile } = useApp();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    type: '',
    socials: { instagram: '', tiktok: '', youtube: '', twitter: '' },
    interests: [],
    country: '',
    city: '',
    birthday: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
    // Clear error when user starts typing
    setErrors(prevErrors => ({ ...prevErrors, [name]: '' }));
  };

  const handleSocialChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      socials: {
        ...prevData.socials,
        [name]: value,
      },
    }));
    // Clear error when user starts typing
    setErrors(prevErrors => ({ ...prevErrors, [`socials.${name}`]: '' }));
  };

  const handleInterestsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      interests: checked
        ? [...prevData.interests, value]
        : prevData.interests.filter(interest => interest !== value),
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (step === 1) {
      if (!formData.type) {
        newErrors['type'] = 'Please select your type';
      }
      // Validate social media links (optional)
      Object.entries(formData.socials).forEach(([key, value]) => {
        if (value && !value.startsWith('https://')) {
          newErrors[`socials.${key}`] = 'Please enter a valid URL starting with https://';
        }
      });
    } else if (step === 2) {
      if (formData.interests.length === 0) {
        newErrors['interests'] = 'Please select at least one interest';
      }
    } else if (step === 3) {
      if (!formData.country) {
        newErrors['country'] = 'Country is required';
      }
      if (!formData.city) {
        newErrors['city'] = 'City is required';
      }
      if (!formData.birthday) {
        newErrors['birthday'] = 'Birthday is required';
      } else {
        const birthDate = new Date(formData.birthday);
        const today = new Date();
        const age = today.getFullYear() - birthDate.getFullYear();
        if (age < 13) {
          newErrors['birthday'] = 'You must be at least 13 years old';
        }
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    if (step < 3) {
      setStep(step + 1);
    } else {
      try {
        await updateProfile(user?.id, {
          ...formData,
          onboarded: true,
        });
        await refreshProfile();
        navigate('/influencer-dashboard');
      } catch (error) {
        console.error('Error saving onboarding data:', error);
        setErrors({ submit: 'An error occurred while saving your data. Please try again.' });
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Welcome to Promorang!</h1>
      <div className="max-w-md mx-auto">
        <form onSubmit={handleSubmit} className="space-y-4">
          {step === 1 && (
            <>
              <div>
                <label htmlFor="type" className="block text-sm font-medium text-gray-700">I am a:</label>
                <select
                  id="type"
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 ${errors['type'] ? 'border-red-500' : ''}`}
                  required
                >
                  <option value="">Select...</option>
                  <option value="content_creator">Content Creator</option>
                  <option value="influencer">Influencer</option>
                  <option value="curious">Just Curious</option>
                </select>
                {errors['type'] && <p className="mt-1 text-sm text-red-500">{errors['type']}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Social Media Links:</label>
                {Object.entries(formData.socials).map(([key, value]) => (
                  <div key={key}>
                    <input
                      type="text"
                      name={key}
                      value={value}
                      onChange={handleSocialChange}
                      placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
                      className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 ${errors[`socials.${key}`] ? 'border-red-500' : ''}`}
                    />
                    {errors[`socials.${key}`] && <p className="mt-1 text-sm text-red-500">{errors[`socials.${key}`]}</p>}
                  </div>
                ))}
              </div>
            </>
          )}

          {step === 2 && (
            <div>
              <label className="block text-sm font-medium text-gray-700">Interests:</label>
              {['Fashion', 'Technology', 'Food', 'Travel', 'Fitness', 'Beauty', 'Gaming', 'Music'].map((interest) => (
                <div key={interest} className="flex items-center">
                  <input
                    type="checkbox"
                    id={interest}
                    name="interests"
                    value={interest}
                    checked={formData.interests.includes(interest)}
                    onChange={handleInterestsChange}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  <label htmlFor={interest} className="ml-2 block text-sm text-gray-900">
                    {interest}
                  </label>
                </div>
              ))}
              {errors['interests'] && <p className="mt-1 text-sm text-red-500">{errors['interests']}</p>}
            </div>
          )}

          {step === 3 && (
            <>
              <div>
                <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 ${errors['country'] ? 'border-red-500' : ''}`}
                  required
                />
                {errors['country'] && <p className="mt-1 text-sm text-red-500">{errors['country']}</p>}
              </div>
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 ${errors['city'] ? 'border-red-500' : ''}`}
                  required
                />
                {errors['city'] && <p className="mt-1 text-sm text-red-500">{errors['city']}</p>}
              </div>
              <div>
                <label htmlFor="birthday" className="block text-sm font-medium text-gray-700">Birthday</label>
                <input
                  type="date"
                  id="birthday"
                  name="birthday"
                  value={formData.birthday}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 ${errors['birthday'] ? 'border-red-500' : ''}`}
                  required
                />
                {errors['birthday'] && <p className="mt-1 text-sm text-red-500">{errors['birthday']}</p>}
              </div>
            </>
          )}

          {errors['submit'] && <p className="mt-1 text-sm text-red-500">{errors['submit']}</p>}

          <div>
            <button type="submit" className="w-full btn-primary">
              {step < 3 ? 'Next' : 'Complete Onboarding'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InfluencerOnboarding;