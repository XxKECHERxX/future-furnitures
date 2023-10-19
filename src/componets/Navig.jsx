import { NavLink } from 'react-router-dom'
import Busket from '../componets/UI/icons/Basket'
import styles from './Navig.module.css'

const Navig = () => {
  return (
    <nav className={styles.navBar}>
      <div className={styles.logo}>Future & furnitutes</div>
      <div className={styles.linksPanel}>
        <NavLink to="/" className={styles.navLinks}>
          Главная
        </NavLink>
        <NavLink to="products" className={styles.navLinks}>
          Каталог
        </NavLink>
        <NavLink to="sales" className={styles.navLinks}>
          Акции
        </NavLink>
        <NavLink to="about" className={styles.navLinks}>
          Контакты
        </NavLink>
      </div>
      <div className={styles.basket}>
        <Busket />
      </div>
    </nav>
  )
}

export default Navig
