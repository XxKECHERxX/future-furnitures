import styles from './CatalogMenu.module.css'
import chairs from '../UI/images/main/chair.jpg'
import beds from '../UI/images/main/beds.jpg'
import closet from '../UI/images/main/closet.jpg'
import lamp from '../UI/images/main/lamp.jpg'
import table from '../UI/images/main/table.jpg'

const CatalogMenu = () => {
  const menuCatologMain = [
    { id: 1, nameFile: chairs, comment: 'Стулья' },
    { id: 2, nameFile: beds, comment: 'Столы' },
    { id: 3, nameFile: closet, comment: 'Кровати' },
    { id: 4, nameFile: lamp, comment: 'Шкафы' },
    { id: 5, nameFile: table, comment: 'Светильник' },
  ]

  return (
    <section className={styles.sectionCatalog}>
      <div className={styles.tableCatalog}>
        <div className={styles.pointCatalog}>Каталог</div>

        {menuCatologMain.map((point) => {
          return (
            <div key={point.id} className={styles.pointMenu}>
              <div className={styles.MenuCatalog}>
                <img src={point.nameFile} alt={point.comment} />
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default CatalogMenu
