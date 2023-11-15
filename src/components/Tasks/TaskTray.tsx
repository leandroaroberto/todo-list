import { TasksProps } from '../../App';
import { EmptyTray } from './EmptyTray'
import { Task } from './Task'
import styles from './TaskTray.module.css'
interface TaskTrayProps {
  tasks : Array<TasksProps>;
}

export const TaskTray = ({tasks} : TaskTrayProps) => {
  return (
    <main>
      <div className={styles.trayContainer}>
        <div className={styles.trayHeader}>
            <div>
              <span className={styles.blue}>Tarefas criadas</span>
              <span>{tasks.length}</span>
            </div>
            <div>
              <span className={styles.purple}>Concluídas</span>
              <span>0</span>
            </div>
        </div>
        <div className={styles.trayBody}>
          {tasks.length ? tasks.map(task => <Task key={task.id} task={task}/>) : <EmptyTray /> }
        </div>
      </div>
    </main>
  )
}
