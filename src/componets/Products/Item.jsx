import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { chairs } from '../UI/images/chairs/listChairs'
import { tables } from '../UI/images/tables/listTables'
import { beds } from '../UI/images/beds/listBeds'
import { closets } from '../UI/images/closets/listClosets'
import { lamps } from '../UI/images/lamps/listLamps'
import styles from './Item.module.css'

const fullCatalog = [...chairs, ...tables, ...beds, ...closets, ...lamps]

const Item = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const moveBack = () => navigate(-1)

  const selectItem = fullCatalog.find((item) => item.id == id)

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
              Кол-во<button>+</button>
              {selectItem.amount}
              <button>-</button>
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
