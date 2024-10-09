import React, { useState, useEffect } from 'react';
import { Bell, CheckCircle, AlertCircle, Gift, DollarSign, Star, Trash2 } from 'lucide-react';
import { supabase, getNotifications } from '../lib/supabase';
import { useAuth } from '../contexts/AuthContext';

interface Notification {
  id: string;
  type: 'task' | 'reward' | 'system';
  message: string;
  created_at: string;
  read: boolean;
}

const NotificationsPage: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { user } = useAuth();

  useEffect(() => {
    fetchNotifications();
  }, [user]);

  const fetchNotifications = async () => {
    if (!user) return;

    setIsLoading(true);
    setError(null);

    try {
      const data = await getNotifications(user.id);
      setNotifications(data);
    } catch (error) {
      console.error('Error fetching notifications:', error);
      setError('Failed to load notifications. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  const markAsRead = async (id: string) => {
    try {
      const { error } = await supabase
        .from('notifications')
        .update({ read: true })
        .eq('id', id);

      if (error) throw error;

      setNotifications(notifications.map(notif => 
        notif.id === id ? { ...notif, read: true } : notif
      ));
    } catch (error) {
      console.error('Error marking notification as read:', error);
    }
  };

  const deleteNotification = async (id: string) => {
    try {
      const { error } = await supabase
        .from('notifications')
        .delete()
        .eq('id', id);

      if (error) throw error;

      setNotifications(notifications.filter(notif => notif.id !== id));
    } catch (error) {
      console.error('Error deleting notification:', error);
    }
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'task':
        return <CheckCircle className="text-blue-500" />;
      case 'reward':
        return <Gift className="text-green-500" />;
      case 'system':
        return <AlertCircle className="text-yellow-500" />;
      default:
        return <Bell className="text-gray-500" />;
    }
  };

  if (isLoading) {
    return <div className="container mx-auto px-4 py-8">Loading notifications...</div>;
  }

  if (error) {
    return <div className="container mx-auto px-4 py-8 text-red-500">{error}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Notifications</h1>
      
      <div className="space-y-4">
        {notifications.map(notification => (
          <div key={notification.id} className={`p-4 rounded-lg shadow ${notification.read ? 'bg-white' : 'bg-primary-50'}`}>
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-3">
                <div className="mt-1">{getIcon(notification.type)}</div>
                <div>
                  <p className={`${notification.read ? 'text-gray-700' : 'text-black font-semibold'}`}>{notification.message}</p>
                  <p className="text-sm text-gray-500">{new Date(notification.created_at).toLocaleString()}</p>
                </div>
              </div>
              <div className="flex space-x-2">
                {!notification.read && (
                  <button 
                    onClick={() => markAsRead(notification.id)}
                    className="text-primary-500 hover:text-primary-600"
                  >
                    Mark as read
                  </button>
                )}
                <button 
                  onClick={() => deleteNotification(notification.id)}
                  className="text-gray-500 hover:text-red-500"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {notifications.length === 0 && (
        <div className="text-center py-8">
          <Bell size={48} className="mx-auto text-gray-400 mb-4" />
          <p className="text-gray-600">You have no notifications at this time.</p>
        </div>
      )}
    </div>
  );
};

export default NotificationsPage;