import styles from './CatalogMenu.module.css'
import chairs from '../UI/images/main/chairs.jpg'
import beds from '../UI/images/main/beds.jpg'
import closets from '../UI/images/main/closets.jpg'
import lamps from '../UI/images/main/lamps.jpg'
import tables from '../UI/images/main/tables.jpg'
import { NavLink } from 'react-router-dom'

const CatalogMenu = () => {
  return (
    <section className={styles.sectionCatalog}>
      <div className={styles.tableCatalog}>
        <div className={styles.pointCatalog}>
          <NavLink to="products/all" className={styles.mainLink}>
            Каталог
          </NavLink>
        </div>
        <div className={styles.pointMenu}>
          <NavLink to="products/chairs" className={styles.pointLink}>
            <div>Стулья</div>
            <img src={chairs} alt="Категория Стулья" />
          </NavLink>
        </div>
        <div className={styles.pointMenu}>
          <NavLink to="products/tables" className={styles.pointLink}>
            <div>Столы</div>
            <img src={tables} alt="Категория Столы" />
          </NavLink>
        </div>
        <div className={styles.pointMenu}>
          <NavLink to="products/beds" className={styles.pointLink}>
            <div>Кровати</div>
            <img src={beds} alt="Категория Кровати" />
          </NavLink>
        </div>
        <div className={styles.pointMenu}>
          <NavLink to="products/closets" className={styles.pointLink}>
            <div>Шкафы</div>
            <img src={closets} alt="Категория Шкафы" />
          </NavLink>
        </div>
        <div className={styles.pointMenu}>
          <NavLink to="products/lamps" className={styles.pointLink}>
            <div>Освещение</div>
            <img src={lamps} alt="Категория Освещение" />
          </NavLink>
        </div>
      </div>
    </section>
  )
}

export default CatalogMenu
