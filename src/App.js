import React from 'react';
import './App.css';
// import TaskList from './component/TaskList';
// import Demo from './component/Demo';
import TaskData from './component/TaskData';
import ProjectCard from './component/ProjectCard';
import ProjectsList from './component/ProjectsList';
import TaskList from './component/TaskList';
import LoginStatus from './component/Login';  


function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
        {/* <TaskList /> */}
        {/* <TaskData/> */}
        <LoginStatus/>
    </div>
  );
}

export default App;
