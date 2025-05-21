import './App.css'
import Challenge from './Components/Challenge'
import Mui from './Components/Mui'
import { createTheme, ThemeProvider } from '@mui/material'
import { red, blue } from '@mui/material/colors'

const theme = createTheme({
  palette: {
    primary: {
      main: red[200]
    },
    secondary: {
      main: blue[300]
    },
  }
})
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Mui />
        <div style={{ height: 20 }}></div>
        <Challenge />
      </ThemeProvider>
    </>
  )
}

export default App
