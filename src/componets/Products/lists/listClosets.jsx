import { closets } from '../../UI/images/closets/listClosets'
import styles from '../Catalog.module.css'
import { Link } from 'react-router-dom'

const ListClosets = () => {
  return (
    <div className={styles.stuff}>
      {closets.map((item) => {
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

export default ListClosets
