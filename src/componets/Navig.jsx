import { NavLink } from 'react-router-dom'
import CartIcon from './UI/icons/CartIcon'
import styles from './Navig.module.css'
import { useSelector } from 'react-redux'

const setActive = ({ isActive }) => (isActive ? styles.active : styles.navLinks)

const Navig = () => {
  const totalQua = useSelector((state) => state.cart.totalQuantity)

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
      <div>
        <NavLink to="cart" className={styles.busket}>
          <CartIcon />
          {!!totalQua && <div>{totalQua}</div>}
        </NavLink>
      </div>
    </nav>
  )
}

export default Navig
