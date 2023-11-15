import { Header } from './components/Header/Header'
import { TaskTray } from './components/Tasks/TaskTray'
import './global.css'
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <TaskTray />
    </div>
  )
}

export default App
