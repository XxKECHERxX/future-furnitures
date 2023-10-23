import styles from './Catalog.module.css'

const Catalog = () => {
  const menuPoints = [
    { id: 1, name: 'Всё' },
    { id: 2, name: 'Стулья' },
    { id: 3, name: 'Столы' },
    { id: 4, name: 'Кровати' },
    { id: 5, name: 'Диваны' },
    { id: 6, name: 'Освещение' },
  ]

  return (
    <section className={styles.sectionCatalog}>
      <div className={styles.catalog}>
        <div className={styles.points}>
          {menuPoints.map((point) => {
            return (
              <ul key={point.id}>
                <li>{point.name}</li>
              </ul>
            )
          })}
        </div>
        <div>
          <div className={styles.filter}>
            <ul>
              <li>Сортировка:</li>
              <li>Тип</li>
              <li>Название</li>
              <li>Цена</li>
            </ul>
          </div>
          <div className={styles.stuff}></div>
        </div>
      </div>
    </section>
  )
}

export default Catalog
