import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { openModal } from '../../store/modalDelivery/modalDeliverySlice'
import { orderRequestAsync } from '../../store/order/orderSlice'
import { OrderGoods } from '../orderGoods/orderGoods'
import styles from './order.module.css'

export const Order = () => {
  const { totalPrice, totalCount, orderList, orderGoods } = useSelector(
    (state) => state.order
  )
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(orderRequestAsync())
  }, [orderList.length])
  return (
    <div className={styles.order}>
      <section className={styles.wrapper}>
        <div className={styles.header} tabIndex="0" role="button">
          <h2 className={styles.title}>Корзина</h2>

          <span className={styles.count}>{totalCount}</span>
        </div>

        <div className={styles.wrap_list}>
          <ul className={styles.list}>
            {orderGoods.map((item) => (
              <OrderGoods key={item.id} {...item} />
            ))}
          </ul>

          <div className={styles.total}>
            <p>Итого</p>
            <p>
              <span className={styles.amount}>{totalPrice}</span>
              <span className="currency">&nbsp;₽</span>
            </p>
          </div>

          <button
            className={styles.submit}
            disabled={orderGoods.length === 0}
            onClick={() => {
              dispatch(openModal())
            }}
          >
            Оформить заказ
          </button>

          <div className={styles.apeal}>
            <p className={styles.text}>Бесплатная доставка</p>
            <button className={styles.close}>Свернуть</button>
          </div>
        </div>
      </section>
    </div>
  )
}
