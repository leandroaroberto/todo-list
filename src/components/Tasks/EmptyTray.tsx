import styles from './EmptyTray.module.css'
import ClipBoard from '../../assets/Clipboard.svg'

export const EmptyTray = () => {
  return (
    <div className={styles.container}>
        <main>
            <img src={ClipBoard} alt="Empty tray" />
            <p>
                Você ainda não tem tarefas cadastradas
            </p>
            <p>
                Crie tarefas e organize seus itens a fazer
            </p>
        </main>
    </div>
  )
}
