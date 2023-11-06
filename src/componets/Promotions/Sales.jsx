import styles from './Sales.module.css'
import promoFirst from '../UI/images/promotion/promoFirst.jpg'
import promoSecond from '../UI/images/promotion/promoSecond.jpg'
import promoThird from '../UI/images/promotion/promoThird.jpg'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

const Sales = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <section className={styles.sectionPromos}>
      <div className={styles.promotions}>
        <div className={styles.promo}>
          <div className={styles.backImg}>
            <img src={promoFirst} alt="Первая акция" />
          </div>
          <div className={styles.promoText}>
            <h3>5 % скидка</h3>новым клиентам. Откройте для себя мир
            стильной мебели по уникальным ценам.
          </div>
        </div>

        <div className={styles.promo}>
          <div className={styles.backImg}>
            <img src={promoSecond} alt="Вторая акция" />
          </div>
          <div className={styles.promoText}>
            <h3>7.5 % скидка</h3>
            при покупке от 3-х позиций. Это идеальное время для того, чтобы
            превратить свой дом в уютное убежище.
          </div>
        </div>

        <div className={styles.promo}>
          <div className={styles.backImg}>
            <img src={promoThird} alt="Третья акция" />
          </div>
          <div className={styles.promoText}>
            <h3>10 % скидка</h3>при оформлении карты магазина. Посетите наш
            магазин сегодня и обновите свой дом с нашими эксклюзивными
            предложениями.
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sales
