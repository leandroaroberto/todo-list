import { useState } from 'react';
import { CustomRadio } from '../CustomRadio/CustomRadio';
import styles from './Task.module.css'
import { Trash } from '@phosphor-icons/react';
import { Task as TaskProp} from './NewTask';
import { TasksProps } from '../../App';

interface TaskCompProps {
  task: TasksProps;
  handleDeleteTask: (id: string) => void;
  handleSetTask : (newTasks: Array<TasksProps>) => void;
  tasks: Array<TaskProp>;
}

export const Task = ({task, handleDeleteTask, handleSetTask, tasks} : TaskCompProps) => {

  const [ radioChecked, setRadioChecked ] = useState(false)

  function onHandleDeleteTask() {
    const response = confirm("Remover item selecionado?");
    if (response) {
      handleDeleteTask(task.id)
    }
  }

  function handleRadioCheck() {
    setRadioChecked(! radioChecked)
    const updatedTask = tasks.map((t) => {
      if (t.id === task.id ) {
        return {id: task.id, title: task.title, isSelected: ! radioChecked};
      } else {
        return t;
      }
    });
    handleSetTask(updatedTask)
  }

  return (
    <div className={styles.container}>
      <div className={styles.task}>
        <div className={styles.taskRadio}>
          <CustomRadio 
            checked={radioChecked}
            onClick={handleRadioCheck}
          />
        </div>
        <div className={radioChecked ? styles.taskContentSelected : styles.taskContent}>
          {task.title}
        </div>
        <div className={styles.trashButton}>
          <Trash onClick={onHandleDeleteTask}/>
        </div>
      </div>
    </div>
  )
}
