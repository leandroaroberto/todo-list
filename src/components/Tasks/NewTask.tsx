import styles from './NewTask.module.css'
import { Plus } from '@phosphor-icons/react';
export const NewTask = () => {
  return (
    <main>
        <div className={styles.container}>
            <input type="text" placeholder="Adicione uma nova tarefa"/>
            <button>
                <span>Criar</span>
                <span className={styles.iconBorder}><Plus /></span>
            </button>
        </div>
    </main>
  )
}
