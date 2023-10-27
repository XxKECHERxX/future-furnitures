import { tables } from '../../UI/images/tables/listTables'
import styles from '../Catalog.module.css'
import { Link } from 'react-router-dom'

const ListTables = () => {
  return (
    <div className={styles.stuff}>
      {tables.map((item) => {
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

export default ListTables
