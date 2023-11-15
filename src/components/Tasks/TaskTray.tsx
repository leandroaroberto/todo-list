import { Task } from './Task'
import styles from './TaskTray.module.css'


export const TaskTray = () => {
  return (
    <div className={styles.container}>
        <div className={styles.trayHeader}>
            <span>Tarefas criadas</span>
            <span>Concluidas</span>
        </div>
        <div className={styles.trayBody}>
            <Task />
            <Task />
        </div>
        
    </div>
  )
}
