import styles from './Catalog.module.css'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

const setActive = ({ isActive }) =>
  isActive ? styles.active : styles.notActive

const Catalog = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <section className={styles.sectionCatalog}>
      <div className={styles.catalog}>
        <div className={styles.points}>
          <ul>
            <NavLink to="/products/all" className={setActive}>
              <li>Всё</li>
            </NavLink>

            <NavLink to="tables" className={setActive}>
              <li>Столы</li>
            </NavLink>

            <NavLink to="beds" className={setActive}>
              <li>Кровати</li>
            </NavLink>

            <NavLink to="chairs" className={setActive}>
              <li>Стулья</li>
            </NavLink>

            <NavLink to="closets" className={setActive}>
              <li>Шкафы</li>
            </NavLink>

            <NavLink to="lamps" className={setActive}>
              <li>Освещение</li>
            </NavLink>
          </ul>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </section>
  )
}

export default Catalog
