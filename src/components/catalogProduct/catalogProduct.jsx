import styles from './catalogProduct.module.css'

export const CatalogProduct = (props) => (
  <article className={styles.product}>
    <img src="img/photo-5.jpg" alt={props.title} className={styles.image} />

    <p className={styles.price}>
      689<span className="currency">₽</span>
    </p>

    <h3 className={styles.title}>
      <button className={styles.detail}>{props.title}</button>
    </h3>

    <p className={styles.weight}>520г</p>

    <button className={styles.add} type="button">
      Добавить
    </button>
  </article>
)
