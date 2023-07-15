import './App.css'
import Root from './navigation/Root'
import { ThemeProvider, CssBaseline } from '@mui/material'
import theme from './styles/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Root />
    </ThemeProvider>
  )
}

export default App
