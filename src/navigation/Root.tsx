import { Stack } from '@mui/material'
import { Navigate, Route, Routes, BrowserRouter as Router } from 'react-router-dom'

const Home = () => {
  return <p>Hello Peter</p>
}

const Root = () => {
  return (
    <Stack>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </Router>
    </Stack>
  )
}

export default Root
