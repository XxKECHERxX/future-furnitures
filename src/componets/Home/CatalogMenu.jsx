import styles from './CatalogMenu.module.css'
import chairs from '../UI/images/main/chair.jpg'
import beds from '../UI/images/main/beds.jpg'
import closet from '../UI/images/main/closet.jpg'
import lamp from '../UI/images/main/lamp.jpg'
import table from '../UI/images/main/table.jpg'

const CatalogMenu = () => {
  return (
    <section className={styles.sectionCatalog}>
      <div className={styles.tableCatalog}>
        <div className={styles.pointCatalog}>Каталог</div>

        <div className={styles.pointMenu}>
          <div className={styles.MenuCatalog}>
            <img src={chairs} alt="Стулья" />
          </div>
          <div className={styles.SecLayer} />
          <div className={styles.ThirdLayer} />
        </div>

        <div className={styles.pointMenu}>
          <div className={styles.MenuCatalog}>
            <img src={table} alt="Столы" />
          </div>
          <div className={styles.SecLayer} />
          <div className={styles.ThirdLayer} />
        </div>

        <div className={styles.pointMenu}>
          <div className={styles.MenuCatalog}>
            <img src={beds} alt="Кровати" />
          </div>
          <div className={styles.SecLayer} />
          <div className={styles.ThirdLayer} />
        </div>

        <div className={styles.pointMenu}>
          <div className={styles.MenuCatalog}>
            <img src={closet} alt="Шкафы" />
          </div>
          <div className={styles.SecLayer} />
          <div className={styles.ThirdLayer} />
        </div>

        <div className={styles.pointMenu}>
          <div className={styles.MenuCatalog}>
            <img src={lamp} alt="Светильник" />
          </div>
          <div className={styles.SecLayer} />
          <div className={styles.ThirdLayer} />
        </div>
      </div>
    </section>
  )
}

export default CatalogMenu
