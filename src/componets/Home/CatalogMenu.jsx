import styles from './CatalogMenu.module.css'

const CatalogMenu = () => {
  return (
    <section className={styles.sectionCatalog}>
        <div className={styles.tableCatalog}>
            <div className={styles.pointMenu}>Каталог</div>
            <div className={styles.pointMenu}>Каталог</div>
            <div className={styles.pointMenu}>Каталог</div>
            <div className={styles.pointMenu}>Каталог</div>
            <div className={styles.pointMenu}>Каталог</div>
            <div className={styles.pointMenu}>Каталог</div>
        </div>
    </section>
  )
}

export default CatalogMenu