import { CatalogProduct } from '../catalogProduct/catalogProduct'
import { Container } from '../container/container'
import { Order } from '../order/order'
import styles from './catalog.module.css'

const goodsList = [
  { title: 'Мясная бомба' },
  { title: 'Супер сырный' },
  { title: 'Сытный' },
  { title: 'Итальянский' },
  { title: 'Вечная классика' },
  { title: 'Тяжелый удар' },
]

export const Catalog = () => {
  return (
    <section className={styles.catalog}>
      <Container className={styles.container}>
        <Order />
        <div className={styles.wrapper}>
          <h2 className={styles.title}>Бургеры</h2>

          <div className={styles.wrap_list}>
            <ul className={styles.list}>
              {goodsList.map((item, index) => (
                <li key={index} className={styles.item}>
                  <CatalogProduct title={item.title} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}
