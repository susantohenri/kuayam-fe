import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom'
import './App.css'
import { AuthContextProvider, useAuthContext } from './contexts/auth'
import LoginPage from './pages/login'
import DashboardPage from './pages/dashboard'

function ProtectedRoute() {
  const { token } = useAuthContext()
  if (`` === token) return (<Navigate to="/" />)
  return (<Outlet />)
}

function App() {

  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage />}></Route>
          <Route element={<ProtectedRoute />}>
            <Route path='/dashboard' element={<DashboardPage />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  )
}

export default App
