import styles from './header.module.css'
import classNames from 'classnames'
import logo from '../../assets/img/logo.svg'
import { Container } from '../container/container'

export const Header = () => (
  <header className={styles.header}>
    <Container className={styles.header__container}>
      <img className={styles.header__logo} src={logo} alt="Логотип YourMeal" />

      <div className={styles.header__wrapper}>
        <h1 className={styles.header__title}>
          <span>Только самые</span>
          <span className={styles.header__red}>сочные бургеры!</span>
        </h1>

        <p className={styles.header__appeal}>Бесплатная доставка от 599Р</p>
      </div>
    </Container>
  </header>
)
