import React, { useState } from 'react';
import { Lock, Shield, Bell, CreditCard, User, Globe, Database, Sliders, LogOut, Key, Gift, MessageSquare, FileText, HelpCircle } from 'lucide-react';

const SettingsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('security');

  const tabs = [
    { id: 'security', label: 'Security', icon: <Lock size={20} /> },
    { id: 'wallet', label: 'Wallet & Payments', icon: <CreditCard size={20} /> },
    { id: 'profile', label: 'Profile Information', icon: <User size={20} /> },
    { id: 'notifications', label: 'Notifications', icon: <Bell size={20} /> },
    { id: 'filtering', label: 'Filtering', icon: <Shield size={20} /> },
    { id: 'language', label: 'Language & Region', icon: <Globe size={20} /> },
    { id: 'privacy', label: 'Data & Privacy', icon: <Database size={20} /> },
    { id: 'app', label: 'App Preferences', icon: <Sliders size={20} /> },
    { id: 'account', label: 'Account Management', icon: <LogOut size={20} /> },
    { id: 'task', label: 'Task Preferences', icon: <Key size={20} /> },
    { id: 'reward', label: 'Reward Preferences', icon: <Gift size={20} /> },
    { id: 'communication', label: 'Communication', icon: <MessageSquare size={20} /> },
    { id: 'legal', label: 'Legal & Support', icon: <FileText size={20} /> },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'security':
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Security Settings</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Change Password</label>
                <input type="password" placeholder="Current Password" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
                <input type="password" placeholder="New Password" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
                <input type="password" placeholder="Confirm New Password" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Two-Factor Authentication</label>
                <button className="mt-1 bg-primary-500 text-white px-4 py-2 rounded">Enable 2FA</button>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Recent Account Activity</label>
                <ul className="mt-1 space-y-2">
                  <li>Login from New York, USA - 2 days ago</li>
                  <li>Password changed - 1 week ago</li>
                  <li>Login from London, UK - 2 weeks ago</li>
                </ul>
              </div>
            </div>
          </div>
        );
      case 'wallet':
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Wallet & Payment Settings</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Connected Payment Methods</label>
                <ul className="mt-1 space-y-2">
                  <li>PayPal - example@email.com</li>
                  <li>Bank Account - **** 1234</li>
                </ul>
                <button className="mt-2 bg-primary-500 text-white px-4 py-2 rounded">Add Payment Method</button>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Transaction History</label>
                <button className="mt-1 bg-primary-500 text-white px-4 py-2 rounded">View Full History</button>
              </div>
            </div>
          </div>
        );
      case 'profile':
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Profile Information</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Personal Information</label>
                <input type="text" placeholder="Full Name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
                <input type="email" placeholder="Email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Social Media Links</label>
                <input type="url" placeholder="Instagram URL" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
                <input type="url" placeholder="Twitter URL" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
                <input type="url" placeholder="TikTok URL" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Interests</label>
                <select multiple className="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
                  <option>Technology</option>
                  <option>Fashion & Lifestyle</option>
                  <option>Health & Wellness</option>
                  <option>Travel & Adventure</option>
                  <option>Food & Culinary</option>
                </select>
              </div>
            </div>
          </div>
        );
      case 'notifications':
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Notification Preferences</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Notification Types</label>
                <div className="mt-1 space-y-2">
                  <label className="inline-flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 text-primary-600 shadow-sm" />
                    <span className="ml-2">Task Updates</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 text-primary-600 shadow-sm" />
                    <span className="ml-2">Reward Earned</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 text-primary-600 shadow-sm" />
                    <span className="ml-2">Promotions</span>
                  </label>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Notification Channels</label>
                <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
                  <option>Email</option>
                  <option>SMS</option>
                  <option>Push Notifications</option>
                </select>
              </div>
            </div>
          </div>
        );
      case 'filtering':
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Filtering Settings</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Blocklist</label>
                <input type="text" placeholder="Enter business or user to block" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
                <ul className="mt-2 space-y-1">
                  <li>Blocked Business 1</li>
                  <li>Blocked User 1</li>
                </ul>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Whitelist</label>
                <input type="text" placeholder="Enter business or user to whitelist" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
                <ul className="mt-2 space-y-1">
                  <li>Whitelisted Business 1</li>
                  <li>Whitelisted User 1</li>
                </ul>
              </div>
            </div>
          </div>
        );
      case 'language':
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Language & Region Settings</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Language</label>
                <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
                  <option>English</option>
                  <option>Spanish</option>
                  <option>French</option>
                  <option>German</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Region</label>
                <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
                  <option>United States</option>
                  <option>United Kingdom</option>
                  <option>Canada</option>
                  <option>Australia</option>
                </select>
              </div>
            </div>
          </div>
        );
      case 'privacy':
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Data & Privacy Settings</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Data Access</label>
                <button className="mt-1 bg-primary-500 text-white px-4 py-2 rounded">Download My Data</button>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Account Deletion</label>
                <button className="mt-1 bg-red-500 text-white px-4 py-2 rounded">Request Account Deletion</button>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Privacy Settings</label>
                <label className="inline-flex items-center mt-1">
                  <input type="checkbox" className="rounded border-gray-300 text-primary-600 shadow-sm" />
                  <span className="ml-2">Make profile public</span>
                </label>
              </div>
            </div>
          </div>
        );
      case 'app':
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-4">App Preferences</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Theme</label>
                <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
                  <option>Light</option>
                  <option>Dark</option>
                  <option>System Default</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Task Feed Layout</label>
                <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
                  <option>Grid</option>
                  <option>List</option>
                </select>
              </div>
            </div>
          </div>
        );
      case 'account':
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Account Management</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Account Status</label>
                <p className="mt-1">Active</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Deactivate Account</label>
                <button className="mt-1 bg-yellow-500 text-white px-4 py-2 rounded">Temporarily Deactivate</button>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Delete Account</label>
                <button className="mt-1 bg-red-500 text-white px-4 py-2 rounded">Permanently Delete Account</button>
              </div>
            </div>
          </div>
        );
      case 'task':
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Task Preferences</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Preferred Task Types</label>
                <div className="mt-1 space-y-2">
                  <label className="inline-flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 text-primary-600 shadow-sm" />
                    <span className="ml-2">Like</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 text-primary-600 shadow-sm" />
                    <span className="ml-2">Share</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 text-primary-600 shadow-sm" />
                    <span className="ml-2">Comment</span>
                  </label>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Task Notifications</label>
                <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
                  <option>All Tasks</option>
                  <option>High Reward Tasks Only</option>
                  <option>None</option>
                </select>
              </div>
            </div>
          </div>
        );
      case 'reward':
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Reward Preferences</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Preferred Reward Type</label>
                <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
                  <option>Cash</option>
                  <option>Tokens</option>
                  <option>Points</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Auto-Claim Rewards</label>
                <label className="inline-flex items-center mt-1">
                  <input type="checkbox" className="rounded border-gray-300 text-primary-600 shadow-sm" />
                  <span className="ml-2">Automatically claim rewards when available</span>
                </label>
              </div>
            </div>
          </div>
        );
      case 'communication':
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Communication Preferences</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Email Preferences</label>
                <div className="mt-1 space-y-2">
                  <label className="inline-flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 text-primary-600 shadow-sm" />
                    <span className="ml-2">Marketing Emails</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 text-primary-600 shadow-sm" />
                    <span className="ml-2">Task Updates</span>
                  </label>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">SMS Notifications</label>
                <label className="inline-flex items-center mt-1">
                  <input type="checkbox" className="rounded border-gray-300 text-primary-600 shadow-sm" />
                  <span className="ml-2">Receive SMS updates</span>
                </label>
              </div>
            </div>
          </div>
        );
      case 'legal':
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Legal & Support</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Legal Documents</label>
                <ul className="mt-1 space-y-2">
                  <li><a href="#" className="text-primary-500 hover:underline">Terms of Service</a></li>
                  <li><a href="#" className="text-primary-500 hover:underline">Privacy Policy</a></li>
                </ul>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Support</label>
                <button className="mt-1 bg-primary-500 text-white px-4 py-2 rounded">Contact Support</button>
              </div>
            </div>
          </div>
        );
      default:
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-4">{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Settings</h2>
            <p>Placeholder content for {activeTab} settings. This section is under development.</p>
          </div>
        );
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>
      <div className="flex">
        <div className="w-1/4 pr-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`flex items-center w-full mb-2 px-4 py-2 rounded text-left ${
                activeTab === tab.id ? 'bg-primary-500 text-white' : 'text-gray-600 hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.icon}
              <span className="ml-2">{tab.label}</span>
            </button>
          ))}
        </div>
        <div className="w-3/4 bg-white rounded-lg shadow-md p-6">
          {renderTabContent()}
          <div className="mt-6">
            <button className="bg-primary-500 text-white px-4 py-2 rounded">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;