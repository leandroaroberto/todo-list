import { ChangeEvent, FormEvent, useState } from 'react';
import styles from './NewTask.module.css'
import { Plus } from '@phosphor-icons/react';
import { v4 as uuid } from 'uuid';
import { TasksProps } from '../../App';

interface Task {
  tasks : Array<TasksProps>;
  onSetTasks: ([]) => void;
}


export const NewTask = ({onSetTasks, tasks} : Task) => {

  const [ taskInput, setTaskInput ] = useState('')

  function handleAddTask(e : FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const myUUID = uuid();
    const newTask = {id: myUUID, title: taskInput, isSelected: false}
    onSetTasks([...tasks, newTask])
    setTaskInput('')
  }

  function handleTaskInput(e: ChangeEvent<HTMLInputElement>) {
    const inputValue = e.target.value
    setTaskInput(inputValue)
  }


  return (
    <main>
        <form onSubmit={handleAddTask} className={styles.container}>
            <input 
              type="text" 
              placeholder="Adicione uma nova tarefa"
              value={taskInput}
              onChange={handleTaskInput}
            />
            <button type="submit">
                <span>Criar</span>
                <span className={styles.iconBorder}><Plus /></span>
            </button>
        </form>
    </main>)
}