import styles from './CatalogMenu.module.css'
import chairs from '../UI/images/main/chair.jpg'
import beds from '../UI/images/main/beds.jpg'
import closet from '../UI/images/main/closet.jpg'
import lamp from '../UI/images/main/lamp.jpg'
import table from '../UI/images/main/table.jpg'
import { NavLink } from 'react-router-dom'

const CatalogMenu = () => {
  const menuCatologMain = [
    { id: 1, nameFile: chairs, comment: 'Стулья' },
    { id: 2, nameFile: table, comment: 'Столы' },
    { id: 3, nameFile: beds, comment: 'Кровати' },
    { id: 4, nameFile: closet, comment: 'Шкафы' },
    { id: 5, nameFile: lamp, comment: 'Светильник' },
  ]

  return (
    <section className={styles.sectionCatalog}>
      <div className={styles.tableCatalog}>
        <div className={styles.pointCatalog}>
          <NavLink to="products" className={styles.mainLink}>
            Каталог
          </NavLink>
        </div>

        {menuCatologMain.map((point) => {
          return (
            <div key={point.id} className={styles.menuCatalog}>
              <div className={styles.pointMenu}>
                <NavLink to="products" className={styles.pointLink}>
                  <div>{point.comment}</div>
                  <img src={point.nameFile} alt={point.comment} />
                </NavLink>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default CatalogMenu
