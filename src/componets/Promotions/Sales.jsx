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
        <div className={styles.firstPromo}>
          <img src={promoFirst} alt="Первая акция" />
          <div className={styles.promoText}>
            <h3>5 % скидка</h3>новым клиентам. Праздничный сезон приближается, и
            у нас есть для вас невероятные скидки! Откройте для себя мир
            стильной мебели по уникальным ценам.
          </div>
        </div>

        <div className={styles.promoSecond}>
          <img src={promoSecond} alt="Вторая акция" />
          <div className={styles.promoText}>
            <h3>7.5 % скидка</h3>
            при покупке от 3-х позиций. Это идеальное время для того, чтобы
            превратить свой дом в уютное убежище. Не упустите шанс обновить
            интерьер по выгодной цене!
          </div>
        </div>

        <div className={styles.promoThird}>
          <img src={promoThird} alt="Третья акция" />
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
