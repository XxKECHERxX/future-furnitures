import styles from './Header.module.css'
import guestroom from '../UI/images/main/guestroom.jpg'

const Header = () => {
  return (
    <header>
      <div className={styles.header}>
        <div className={styles.headText}>
          <h1>Новая коллекция</h1>
          <p>
            Откройте для себя коллекцию эксклюзивных дизайнерских мебельных
            изделий, которые призваны преобразить ваш дом в оазис утонченности и
            элегантности.
          </p>
        </div>
        <div className={styles.headMainFrame}>
          <div className={styles.frontFrame}>
            <img src={guestroom} alt="Gallery guestroom" />
          </div>
          <div className={styles.frontSecondFrame} />
          <div className={styles.frontThirdFrame} />
        </div>
      </div>
    </header>
  )
}

export default Header
