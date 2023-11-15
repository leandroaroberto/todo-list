import styles from './Header.module.css'
import Logo from '../../assets/Logo.svg'

export const Header = () => {
  return (
    <header>
        <div className={styles.container}>
          <img src={Logo} alt="Logo" className={styles.logo} />
        </div>
    </header>
  )
}
