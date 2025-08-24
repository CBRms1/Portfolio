import { Container, Row } from 'react-bootstrap'

import './styles/App.js'
import { GlobalStyle } from './styles/Global.js'

import Navegation from './components/Navegation'
import Content from './components/Content'

import { SectionProvider } from './context/SectionProvider.jsx'

const App = () => {
  return (
    <Container fluid className='text-primary-color'>
      <GlobalStyle />
      <Row>
        <SectionProvider>
          <Navegation />

          <Content />
        </SectionProvider>
      </Row>
    </Container>
  )
}

export default App