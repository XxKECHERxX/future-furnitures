import styles from './Catalog.module.css'
import { chairs } from '../UI/images/chairs/listChairs'
import { tables } from '../UI/images/tables/listTables'
import { beds } from '../UI/images/beds/listBeds'
import { closets } from '../UI/images/closets/listClosets'
import { lamps } from '../UI/images/lamps/listLamps'
import PageFullCatalog from './listFullCatalog'
import { useState } from 'react'

const Catalog = () => {
  const [displayItems, setDisplayItems] = useState('')

  const handleDisplayAll = () => {
    setDisplayItems('')
  }
  const handleDisplayChair = () => {
    setDisplayItems(chairs)
  }
  const handleDisplayTable = () => {
    setDisplayItems(tables)
  }
  const handleDisplayBed = () => {
    setDisplayItems(beds)
  }
  const handleDisplayClosets = () => {
    setDisplayItems(closets)
  }
  const handleDisplayLamps = () => {
    setDisplayItems(lamps)
  }

  return (
    <section className={styles.sectionCatalog}>
      <div className={styles.catalog}>
        <div className={styles.points}>
          <ul>
            <li onClick={handleDisplayAll}>Всё</li>
            <li onClick={handleDisplayChair}>Стулья</li>
            <li onClick={handleDisplayTable}>Столы</li>
            <li onClick={handleDisplayBed}>Кровати</li>
            <li onClick={handleDisplayClosets}>Шкафы</li>
            <li onClick={handleDisplayLamps}>Освещение</li>
          </ul>
        </div>
        <div>
          <div className={styles.filter}>
            <ul>
              <li>Сортировка:</li>
              <li>Название</li>
              <li>Цена</li>
            </ul>
          </div>
          <div className={styles.stuff}>
            {!displayItems ? (
              <PageFullCatalog />
            ) : (
              displayItems.map((item) => {
                return (
                  <div key={item.id} className={styles.items}>
                    <ul>
                      <li>{item.name}</li>
                      <li>{item.price}$</li>
                    </ul>
                    <img src={item.fileName} alt={item.name} />
                  </div>
                )
              })
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Catalog
