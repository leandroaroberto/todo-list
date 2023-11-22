import { Header } from './components/Header/Header'
import { TaskTray } from './components/Tasks/TaskTray'
import './global.css'
import styles from './App.module.css'
import { NewTask} from './components/Tasks/NewTask';
import { useState } from 'react';

export interface TasksProps {
  id: string;
  title: string;
  isSelected: boolean;
}



function App() {
  const [ tasks, setTasks ] = useState<TasksProps[]>([])

  return (
    <div className={styles.container}>
      <Header />
      <NewTask onSetTasks={setTasks} tasks={tasks}/>
      <TaskTray onSetTasks={setTasks} tasks={tasks}/>
    </div>
  )
}

export default App
