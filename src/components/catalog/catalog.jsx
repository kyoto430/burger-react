import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { productRequestAsync } from '../../store/product/productSlice'
import { CatalogProduct } from '../catalogProduct/catalogProduct'
import { Container } from '../container/container'
import { Order } from '../order/order'
import styles from './catalog.module.css'

export const Catalog = () => {
  const { products } = useSelector((state) => state.product)
  const { category, activeCategory } = useSelector((state) => state.category)
  const dispatch = useDispatch()
  useEffect(() => {
    if (category.length) {
      dispatch(productRequestAsync(category[activeCategory].title))
    }
  }, [category, activeCategory])
  return (
    <section className={styles.catalog}>
      <Container className={styles.container}>
        <Order />
        <div className={styles.wrapper}>
          <h2 className={styles.title}>{category[activeCategory]?.rus}</h2>
          <div className={styles.wrap_list}>
            {products.length ? (
              <ul className={styles.list}>
                {products.map((item) => (
                  <li key={item.id} className={styles.item}>
                    <CatalogProduct item={item} />
                  </li>
                ))}
              </ul>
            ) : (
              <p className={styles.empty}>
                К сожалению товаров данной категории нет
              </p>
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}
