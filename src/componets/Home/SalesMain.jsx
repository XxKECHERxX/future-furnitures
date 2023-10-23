import styles from './SalesMain.module.css'
import Triangle from '../UI/icons/Triangle'
import firstSales from '../UI/images/main/salesFirst.jpg'
import secondSales from '../UI/images/main/salesSecond.jpg'
import thirdSales from '../UI/images/main/salesThird.jpg'
import { useState } from 'react'

const SalesMain = () => {
  const [positionX, setPositionX] = useState('')

  const handleLeftBtn = () => {
    setPositionX('0')
  }
  const handleRightBtn = () => {
    setPositionX('-435')
  }

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
              transitionDuration: `300ms`,
            }}
          >
            <p>
              <span>Скидка 5% </span>
              <br />
              новым клиентам. Откройте для себя мир стильной мебели по
              уникальным ценам.
            </p>
            <div className={styles.boxSales}>
              <div className={styles.triangle}>
                <Triangle />
              </div>
              <img src={secondSales} alt="Акция Вторая" />
            </div>
          </div>

          <div
            className={styles.frameSales}
            style={{
              transform: `translateX(${positionX}px)`,
              transitionDuration: `350ms`,
            }}
          >
            <p>
              <span>Скидка 7.5% </span>
              <br />
              при покупке от 3-х позиций. Не упустите шанс обновить интерьер по
              выгодной цене!
            </p>
            <div className={styles.boxSales}>
              <div className={styles.triangle}>
                <Triangle />
              </div>
              <img src={firstSales} alt="Акция Первая" />
            </div>
          </div>

          <div
            className={styles.frameSales}
            style={{
              transform: `translateX(${positionX}px)`,
              transitionDuration: `400ms`,
            }}
          >
            <p>
              <span>Скидка 10% </span>
              <br />
              при оформлении карты магазина. Посетите наш магазин сегодня и
              обновите свой дом.
            </p>
            <div className={styles.boxSales}>
              <div className={styles.triangle}>
                <Triangle />
              </div>
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
