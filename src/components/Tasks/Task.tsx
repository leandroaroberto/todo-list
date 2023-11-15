import styles from './Task.module.css'

export const Task = ({task} : any) => {
  return (
    <div className={styles.container}>
        {task.title}
    </div>
  )
}
