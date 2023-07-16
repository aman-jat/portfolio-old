import Home from '../pages/home/home'
import { Stack } from '@mui/material'
import { Navigate, Route, Routes, BrowserRouter as Router } from 'react-router-dom'

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
