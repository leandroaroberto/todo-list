import { TasksProps } from '../../App';
import { EmptyTray } from './EmptyTray'
import { Task } from './Task'
import styles from './TaskTray.module.css'
interface TaskTrayProps {
  tasks : Array<TasksProps>;
  onSetTasks: (newTasks: Array<TasksProps>) => void;
}

export const TaskTray = ({tasks, onSetTasks} : TaskTrayProps) => {

  function handleDeleteTask(id: string) {
    const newTasks = tasks.filter(task => task.id !== id)
    onSetTasks(newTasks)
  }


  return (
    <main>
      <div className={styles.trayContainer}>
        <div className={styles.trayHeader}>
            <div>
              <span className={styles.blue}>Tarefas criadas</span>
              <span className={styles.counter}>{tasks.length}</span>
            </div>
            <div>
              <span className={styles.purple}>Concluídas</span>
              <span className={styles.counter}>0</span>
            </div>
        </div>
        <div className={styles.trayBody}>
          {tasks.length ? tasks.map(task => <Task key={task.id} task={task} handleDeleteTask={handleDeleteTask} handleSetTask={onSetTasks} tasks={tasks}/>) : <EmptyTray /> }
        </div>
      </div>
    </main>
  )
}
