import { Catalog } from './components/catalog/catalog'
import { Footer } from './components/footer/footer'
import { Header } from './components/header/header'
import { Navigation } from './components/navigation/navigation'

export const App = () => {
  return (
    <>
      <Header />
      <main>
        <Navigation />
        <Catalog />
      </main>
      <Footer />
    </>
  )
}
