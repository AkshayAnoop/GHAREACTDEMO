import React, { useEffect, useState } from 'react';

function TaskData() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      console.log("Hello");
      
      // Uncomment and use the fetch logic when ready to fetch data from the API
      // try {
      //   const response = await fetch('http://localhost:8082/api/tasks');
      //   if (!response.ok) {
      //     throw new Error(`HTTP error! status: ${response.status}`);
      //   }
      //   const data = await response.json();
      //   console.log(data);
      //   setTasks(data);
      // } catch (error) {
      //   setError(error.message);
      // } finally {
      //   setLoading(false);
      // }
    };

    fetchTasks();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Task List</h1>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskData;
