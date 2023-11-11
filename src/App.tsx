import { Button } from './components/Button'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/themes/global'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button variant="primary"></Button>
      <Button variant="secondary"></Button>
      <Button variant="danger"></Button>
      <Button variant="success"></Button>
      <Button></Button>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
