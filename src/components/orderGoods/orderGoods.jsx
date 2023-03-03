import { API_URI } from '../../const'
import { Count } from '../count/count'
import styles from './orderGoods.module.css'

export const OrderGoods = ({ id, title, price, image, count, weight }) => (
  <li className={styles.item}>
    <img className={styles.image} src={`${API_URI}/${image}`} alt={title} />

    <div className={styles.goods}>
      <h3 className={styles.title}>{title}</h3>

      <p className={styles.weight}>{weight}г</p>

      <p className={styles.price}>
        {price}
        <span className="currency">&nbsp;₽</span>
      </p>
    </div>
    <Count count={count} id={id} />
  </li>
)
