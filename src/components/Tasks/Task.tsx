import styles from './Task.module.css'
import { Trash } from '@phosphor-icons/react';

export const Task = ({task, handleDeleteTask} : any) => {

  function onHandleDeleteTask() {
    const response = confirm("Are you sure you want to delete that?");
    if (response) {
      handleDeleteTask(task.id)
    }
  }

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
          <Trash onClick={onHandleDeleteTask}/>
        </div>
      </div>
    </div>
  )
}
