import { Provider } from 'react-redux'
import { Catalog } from './components/catalog/catalog'
import { Footer } from './components/footer/footer'
import { Header } from './components/header/header'
import { ModalDelivery } from './components/modalDelivery/modalDelivery'
import { Navigation } from './components/navigation/navigation'
import { store } from './store'

export const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <main>
        <Navigation />
        <Catalog />
      </main>
      <Footer />
      <ModalDelivery />
    </Provider>
  )
}
