import styles from './SalesMain.module.css'
import firstSales from '../UI/images/main/salesFirst.jpg'
import secondSales from '../UI/images/main/salesSecond.jpg'
import thirdSales from '../UI/images/main/salesThird.jpg'
import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'

const SalesMain = () => {
  const [positionX, setPositionX] = useState(0)

  let SLIDE_WIDTH = 430 // 340 (1200), 285 (1000), 260 (800)

  const WINDOW_WIDTH = window.innerWidth

  if (WINDOW_WIDTH <= 1200 && WINDOW_WIDTH >= 1000) {
    SLIDE_WIDTH = 340
  } else if (WINDOW_WIDTH <= 1000 && WINDOW_WIDTH >= 800) {
    SLIDE_WIDTH = 285
  } else if (WINDOW_WIDTH <= 800) {
    SLIDE_WIDTH = 260
  }

  const handleLeftBtn = () => {
    setPositionX(positionX + SLIDE_WIDTH)
  }
  const handleRightBtn = () => {
    setPositionX(positionX - SLIDE_WIDTH)
  }

  useEffect(() => {
    if (positionX > 0) {
      setPositionX(0)
    }
    if (positionX === -(SLIDE_WIDTH * 3)) {
      setPositionX(0)
    }
  }, [positionX, SLIDE_WIDTH])

  return (
    <section>
      <div className={styles.sectionSales}>
        <div className={styles.button} onClick={handleLeftBtn}>
          {'<'}
        </div>

        <div className={styles.slider}>
          <div
            className={styles.frameSales}
            style={{
              transform: `translateX(${positionX}px)`,
              transitionDuration: `400ms`,
            }}
          >
            <NavLink to="sales" className={styles.navLinks} />
            <p>
              <span>Скидка 5% </span>
              <br />
              новым клиентам. Откройте для себя мир стильной мебели по
              уникальным ценам.
            </p>
            <div className={styles.boxSales}>
              <img src={secondSales} alt="Акция Вторая" />
            </div>
          </div>

          <div
            className={styles.frameSales}
            style={{
              transform: `translateX(${positionX}px)`,
              transitionDuration: `450ms`,
            }}
          >
            <NavLink to="sales" className={styles.navLinks} />
            <p>
              <span>Скидка 7.5% </span>
              <br />
              при покупке от 3-х позиций. Не упустите шанс обновить интерьер по
              выгодной цене!
            </p>
            <div className={styles.boxSales}>
              <img src={firstSales} alt="Акция Первая" />
            </div>
          </div>

          <div
            className={styles.frameSales}
            style={{
              transform: `translateX(${positionX}px)`,
              transitionDuration: `500ms`,
            }}
          >
            <NavLink to="sales" className={styles.navLinks} />
            <p>
              <span>Скидка 10% </span>
              <br />
              при оформлении карты магазина. Посетите наш магазин сегодня и
              обновите свой дом.
            </p>
            <div className={styles.boxSales}>
              <img src={thirdSales} alt="Акция Третья" />
            </div>
          </div>
        </div>
        <div className={styles.button} onClick={handleRightBtn}>
          {'>'}
        </div>
      </div>
    </section>
  )
}

export default SalesMain
