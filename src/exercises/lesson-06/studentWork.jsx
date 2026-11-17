import { useEffect, useState } from 'react';
import UserProfile from '../../components/UserProfile';
import TaskFilterButtons from '../../components/TaskFilterButtons.jsx';
import TaskItem from '../../components/TaskItem.jsx';
import { filterTasks } from '../../utils/filterTasks.js';
import { useTasks } from '../../hooks/useTasks.js';

export default function StudentWork() {
  const [filter, setFilter] = useState('all');
  const { tasks, loading } = useTasks();
  //  #1: Data fetching + state + UI logic all mixed together
  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setTasks([
  //       { id: 1, title: 'Learn React', completed: true },
  //       { id: 2, title: 'Refactor code', completed: false },
  //       { id: 3, title: 'Organize files', completed: false },
  //     ]);
  //     setLoading(false);
  //   }, 500);

  //   return () => clearTimeout(timeout);
  // }, []);
  const visibleTasks = filterTasks(tasks, filter);
  if (loading) {
    return <p>Loading tasks...</p>;
  }

  return (
    <div>
      <UserProfile name="Student" />{' '}
      <TaskFilterButtons filter={filter} onFilterChange={setFilter} />
      <ul>
        {visibleTasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
}
