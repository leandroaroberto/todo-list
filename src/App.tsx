import { Header } from './components/Header/Header'
import { TaskTray } from './components/Tasks/TaskTray'
import './global.css'
import styles from './App.module.css'
import { NewTask } from './components/Tasks/NewTask';

export interface TasksProps {
  id: number;
  title: string;
  isSelected: boolean;
}

const tasks: Array<TasksProps> = [
  // {id: 1, title: 'Task 1', isSelected: false},
  // {id: 2, title: 'Task 2', isSelected: false},
];

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <NewTask />
      <TaskTray tasks={tasks}/>
    </div>
  )
}

export default App
