import { Container } from '../container/container'
import classNames from 'classnames'
import styles from './navigation.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { changeCategory } from '../../store/category/categorySlice'

export const Navigation = () => {
  const { category, activeCategory } = useSelector((state) => state.category)
  const dispatch = useDispatch()
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
                style={{ backgroundImage: `url(${item.image})` }}
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
