import { Count } from '../count/count'
import styles from './orderGoods.module.css'

export const OrderGoods = ({ item }) => (
  <li className={styles.item}>
    <img className={styles.image} src="img/burger_1.jpg" alt={item} />

    <div className={styles.goods}>
      <h3 className={styles.title}>{item}</h3>

      <p className={styles.weight}>512г</p>

      <p className={styles.price}>
        1279
        <span className="currency">₽</span>
      </p>
    </div>
    <Count count={2} />
  </li>
)
