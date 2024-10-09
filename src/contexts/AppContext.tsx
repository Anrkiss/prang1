import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';
import { getProfile, getTasks, getNotifications } from '../lib/supabase';

interface AppContextType {
  userProfile: any;
  tasks: any[];
  notifications: any[];
  setUserProfile: React.Dispatch<React.SetStateAction<any>>;
  setTasks: React.Dispatch<React.SetStateAction<any[]>>;
  setNotifications: React.Dispatch<React.SetStateAction<any[]>>;
  refreshProfile: () => Promise<void>;
  refreshTasks: () => Promise<void>;
  refreshNotifications: () => Promise<void>;
  error: string | null;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useAuth();
  const [userProfile, setUserProfile] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [error, setError] = useState<string | null>(null);

  const refreshProfile = async () => {
    if (user) {
      try {
        const profile = await getProfile(user.id);
        setUserProfile(profile);
      } catch (error) {
        console.error('Failed to fetch user profile:', error);
        setError('Failed to fetch user profile');
      }
    }
  };

  const refreshTasks = async () => {
    try {
      const fetchedTasks = await getTasks();
      setTasks(fetchedTasks);
    } catch (error) {
      console.error('Failed to fetch tasks:', error);
      setError('Failed to fetch tasks');
    }
  };

  const refreshNotifications = async () => {
    if (user) {
      try {
        const fetchedNotifications = await getNotifications(user.id);
        setNotifications(fetchedNotifications);
      } catch (error) {
        console.error('Failed to fetch notifications:', error);
        setError('Failed to fetch notifications');
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setError(null);
      await Promise.all([refreshProfile(), refreshTasks(), refreshNotifications()]);
    };

    if (user) {
      fetchData();
    }
  }, [user]);

  return (
    <AppContext.Provider value={{
      userProfile,
      tasks,
      notifications,
      setUserProfile,
      setTasks,
      setNotifications,
      refreshProfile,
      refreshTasks,
      refreshNotifications,
      error,
      setError
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};