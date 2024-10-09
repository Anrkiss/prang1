import React, { useState, useEffect } from 'react';
import { ThumbsUp, Share2, MessageSquare, Bookmark, Edit3, FileText, Star, Filter, Search, ArrowUp, ArrowDown, ChevronLeft, ChevronRight, Zap, Clock, ExternalLink } from 'lucide-react';
import { getTasks } from '../lib/supabase';

interface Task {
  id: string;
  merchant_id: string;
  task_type: string;
  description: string;
  engagement_goal: number | null;
  quota: number | null;
  deadline: string | null;
  reward_type: string;
  reward_amount: number;
  external_link: string;
}

const TasksPage: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [acceptedTasks, setAcceptedTasks] = useState<Task[]>([]);
  const [savedTasks, setSavedTasks] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [tasksPerPage] = useState(10);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await getTasks();
      setTasks(data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
      setError('Failed to fetch tasks. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleAcceptTask = (task: Task) => {
    setAcceptedTasks([...acceptedTasks, task]);
    setTasks(tasks.filter(t => t.id !== task.id));
  };

  const handleSaveTask = (taskId: string) => {
    if (savedTasks.includes(taskId)) {
      setSavedTasks(savedTasks.filter(id => id !== taskId));
    } else {
      setSavedTasks([...savedTasks, taskId]);
    }
  };

  const renderTaskCard = (task: Task, isAccepted: boolean = false) => (
    <div key={task.id} className="bg-white rounded-lg shadow-md p-6 mb-4">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold mb-2">{task.task_type}</h3>
          <p className="text-gray-600 mb-2">{task.description}</p>
          {task.deadline && (
            <p className="text-sm text-gray-500 flex items-center">
              <Clock size={16} className="mr-1" />
              Deadline: {new Date(task.deadline).toLocaleDateString()}
            </p>
          )}
        </div>
        <div className="text-right">
          <p className="text-lg font-bold text-primary-600">
            {task.reward_amount} {task.reward_type}
          </p>
          {task.quota && (
            <p className="text-sm text-gray-500">Quota: {task.quota}</p>
          )}
        </div>
      </div>
      <div className="flex justify-between items-center">
        {!isAccepted && (
          <button
            onClick={() => handleAcceptTask(task)}
            className="btn-primary"
          >
            Accept Task
          </button>
        )}
        <button
          onClick={() => handleSaveTask(task.id)}
          className={`btn-secondary ${savedTasks.includes(task.id) ? 'bg-primary-100' : ''}`}
        >
          {savedTasks.includes(task.id) ? 'Saved' : 'Save'}
        </button>
        <a
          href={task.external_link}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary flex items-center"
        >
          <ExternalLink size={16} className="mr-1" />
          View Details
        </a>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Available Tasks</h1>
      
      {isLoading && <div className="text-center py-8">Loading tasks...</div>}
      
      {error && <div className="text-center py-8 text-red-500">{error}</div>}
      
      {!isLoading && !error && (
        <>
          {acceptedTasks.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Accepted Tasks</h2>
              <div className="space-y-4">
                {acceptedTasks.map(task => renderTaskCard(task, true))}
              </div>
            </div>
          )}

          <h2 className="text-2xl font-semibold mb-4">Available Tasks</h2>
          {tasks.length === 0 ? (
            <p className="text-center py-4">No tasks available at the moment.</p>
          ) : (
            <div className="space-y-4">
              {tasks.map(task => renderTaskCard(task))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default TasksPage;