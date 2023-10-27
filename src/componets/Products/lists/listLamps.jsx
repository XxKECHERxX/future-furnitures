import { lamps } from '../../UI/images/lamps/listLamps'
import styles from '../Catalog.module.css'
import { Link } from 'react-router-dom'

const ListLamps = () => {
  return (
    <div className={styles.stuff}>
      {lamps.map((item) => {
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
  )
}

export default ListLamps
