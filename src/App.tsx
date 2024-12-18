import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import EstiloGlobal, { Container } from './styles'
import Sobre from './containers/Sobre'
import Projetos from './containers/Projetos'
import Sidebar from './containers/Sidebar'
import temaLight from './themes/light'
import temaDark from './themes/dark'

function App() {
  const [estaUsandotemaDark, setEstaUsandoTemaDark] = useState(false)


  function trocaTema() {
    setEstaUsandoTemaDark(!estaUsandotemaDark)
  }

  return (
    <ThemeProvider theme={estaUsandotemaDark ? temaDark : temaLight}>
      <EstiloGlobal />
      <Container>
          <Sidebar trocaTema={trocaTema} />
        <main>
            <Sobre />
            <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  )

}

export default App

