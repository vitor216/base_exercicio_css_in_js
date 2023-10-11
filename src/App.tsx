import EstiloGlobal, { Container } from './Styles'
import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <Header />
        <Hero />
        <div>
          <ListaVagas />
        </div>
      </Container>
    </>
  )
}

export default App
