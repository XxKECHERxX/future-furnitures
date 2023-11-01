import { fullCatalog } from './listAllStuff'
import styles from '../Catalog.module.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'


const PageFullCatalog = () => {
  const firstPage = fullCatalog.slice(0, 12)
  const secondPage = fullCatalog.slice(12, 24)
  const thirdPage = fullCatalog.slice(24, 36)
  const fourPage = fullCatalog.slice(36, 43)

  const [displayPage, setDisplayPage] = useState(firstPage)

  const handleLoadFirstPage = () => {
    setDisplayPage(firstPage)
  }
  const handleLoadSecondPage = () => {
    setDisplayPage(secondPage)
  }
  const handleLoadThirdPage = () => {
    setDisplayPage(thirdPage)
  }
  const handleLoadFourPage = () => {
    setDisplayPage(fourPage)
  }

  return (
    <div>
      <div className={styles.stuff}>
        {displayPage.map((item) => {
          return (
            <Link key={item.id} to={`${item.id}`} className={styles.items}>
              <ul>
                <li>{item.name}</li>
                <li>{item.price}$</li>
              </ul>
              <img src={item.fileName} alt={item.name} />
            </Link>
          )
        })}
      </div>
      <div className={styles.btnPage}>
        <button onClick={handleLoadFirstPage}>1</button>
        <button onClick={handleLoadSecondPage}>2</button>
        <button onClick={handleLoadThirdPage}>3</button>
        <button onClick={handleLoadFourPage}>4</button>
      </div>
    </div>
  )
}


export default PageFullCatalog
