import { Container } from '../container/container'
import classNames from 'classnames'
import styles from './navigation.module.css'
import { useDispatch, useSelector } from 'react-redux'
import {
  categoryRequestAsync,
  changeCategory,
} from '../../store/category/categorySlice'
import { useEffect } from 'react'
import { API_URI } from '../../const'

export const Navigation = () => {
  const { category, activeCategory } = useSelector((state) => state.category)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(categoryRequestAsync())
  }, [])
  return (
    <nav className={styles.navigation}>
      <Container className={styles.container}>
        <ul className={styles.list}>
          {category.map((item, index) => (
            <li key={index} className={styles.item}>
              <button
                className={classNames(
                  styles.button,
                  activeCategory === index ? styles.button_active : ''
                )}
                style={{ backgroundImage: `url(${API_URI}/${item.image})` }}
                onClick={() =>
                  dispatch(changeCategory({ indexCategory: index }))
                }
              >
                {item.rus}
              </button>
            </li>
          ))}
        </ul>
      </Container>
    </nav>
  )
}
