import styles from './Cart.module.css'
import Bin from '../UI/icons/Bin'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, deleteFromCart, removeFromCart } from '../store/cartSlice'
import { useState } from 'react'

const Cart = () => {
  const listToBuy = useSelector((state) => state.cart.list)
  const totalQua = useSelector((state) => state.cart.totalQuantity)
  const totalPrice = useSelector((state) => state.cart.totalPrice)

  const dispatch = useDispatch()

  const addCart = (el) => {
    dispatch(addToCart(el))
  }

  const removeCart = (el) => {
    dispatch(removeFromCart(el))
  }

  const deleteItem = (el) => {
    dispatch(deleteFromCart(el))
  }

  const [confirm, setConfirm] = useState('Заказать!')

  const handlerConfirm = () => {
    setConfirm('Готово!')
  }

  return (
    <section className={styles.secCart}>
      <div className={styles.listCart}>
        <>
          {listToBuy.map((item) => {
            return (
              <div key={item.id} className={styles.point}>
                <img src={item.fileName} alt={item.name} />
                <div className={styles.addRemBtn}>
                  <button onClick={() => addCart(item)}>+</button>
                  {item.quantity}
                  <button onClick={() => removeCart(item)}>-</button>
                </div>
                <div className={styles.text}>
                  коллекция: <br /> {item.name}
                </div>
                <div>{item.amount} $</div>
                <button
                  className={styles.deletBtn}
                  onClick={() => deleteItem(item)}
                >
                  <Bin />
                </button>
              </div>
            )
          })}
        </>
        <div className={styles.total}>
          <div>Итого</div>
          <div>{totalQua} шт.</div>
          <div>{totalPrice} $</div>
        </div>
      </div>

      <div className={styles.orderForm}>
        <form>
          <label>
            <input
              type="text"
              name="clientName"
              placeholder="Имя Фамилия Отчество"
            />
          </label>
          <label>
            <input type="tel" name="number" placeholder="Номер телефона" />
          </label>
          <label>
            <input type="email" name="email" placeholder="Адрес эл. почты" />
          </label>
          <label>
            <input type="text" name="adress" placeholder="Адрес для доставки" />
          </label>
          <button type='reset' onClick={handlerConfirm}>{confirm}</button>
        </form>
      </div>
    </section>
  )
}

export default Cart
