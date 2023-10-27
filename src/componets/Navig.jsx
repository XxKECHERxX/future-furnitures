import { NavLink } from 'react-router-dom'
import Busket from '../componets/UI/icons/Basket'
import styles from './Navig.module.css'

const setActive = ({ isActive }) => (isActive ? styles.active : styles.navLinks)

const Navig = () => {
  return (
    <nav className={styles.navBar}>
      <div className={styles.logo}>Future & furnitutes</div>
      <div className={styles.linksPanel}>
        <NavLink to="/" className={setActive}>
          Главная
        </NavLink>
        <NavLink to="products" className={setActive}>
          Каталог
        </NavLink>
        <NavLink to="sales" className={setActive}>
          Акции
        </NavLink>
        <NavLink to="about" className={setActive}>
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
