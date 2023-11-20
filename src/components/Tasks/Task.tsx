import styles from './Task.module.css'
import { Trash } from '@phosphor-icons/react';

export const Task = ({task} : any) => {
  return (
    <div className={styles.container}>
      <div className={styles.task}>
        <div className={styles.taskRadio}>
          <input type="radio" />
        </div>
        <div className={styles.taskContent}>
          {task.title}
        </div>
        <div className={styles.trashButton}>
          <Trash />
        </div>
      </div>
    </div>
  )
}
