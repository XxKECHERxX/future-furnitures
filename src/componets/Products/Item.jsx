import { useParams, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fullCatalog } from './lists/listAllStuff'
import { addToCart, removeFromCart } from '../store/cartSlice'
import styles from './Item.module.css'
import { useEffect, useState } from 'react'

const Item = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const moveBack = () => navigate(-1)

  const selectItem = fullCatalog.find((item) => item.id == id)

  const listToBuy = useSelector((state) => state.cart.list)

  const [quantity, setQuantity] = useState(0)

  const itemFromSliceList = listToBuy.find((item) => item.id === selectItem.id)

  useEffect(() => {
    if (listToBuy.length === 0 || !itemFromSliceList) {
      setQuantity(0)
    } else if (itemFromSliceList) {
      setQuantity(itemFromSliceList.quantity)
    }
  }, [listToBuy, itemFromSliceList])

  const dispatch = useDispatch()

  const addCart = () => {
    dispatch(addToCart(selectItem))
  }

  const removeCart = () => {
    if (quantity !== 0) {
      dispatch(removeFromCart(selectItem))
    }
  }

  return (
    <section className={styles.sectItem}>
      <div className={styles.picture}>
        <img src={selectItem.fileName} alt={selectItem.name} />
      </div>
      <div>
        <div className={styles.description}>
          <ul>
            <li>{selectItem.name}</li>
            <br />
            <li>
              Кол-во
              <div>
                <button onClick={addCart}>+</button>
                {quantity}
                <button onClick={removeCart}>-</button>
              </div>
            </li>
            <br />
            <li>Цена {selectItem.price} $</li>
          </ul>
        </div>
        <button className={styles.button} onClick={moveBack}>
          Назад
        </button>
      </div>
    </section>
  )
}

export default Item
