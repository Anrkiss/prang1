import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

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

const DatabaseTest: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const { data, error } = await supabase
          .from('tasks')
          .select('*')
          .limit(5);

        if (error) throw error;

        setTasks(data || []);
      } catch (err) {
        console.error('Error fetching tasks:', err);
        setError('Failed to fetch tasks. Please check the console for more details.');
      }
    };

    fetchTasks();
  }, []);

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="mt-4">
      <h2 className="text-xl font-bold mb-2">Database Connection Test</h2>
      {tasks.length > 0 ? (
        <ul className="list-disc pl-5">
          {tasks.map((task) => (
            <li key={task.id} className="mb-2">
              <strong>{task.task_type}</strong>: {task.description} (Reward: {task.reward_amount} {task.reward_type})
            </li>
          ))}
        </ul>
      ) : (
        <p>No tasks found in the database.</p>
      )}
    </div>
  );
};

export default DatabaseTest;