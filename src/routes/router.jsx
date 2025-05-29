import { createBrowserRouter } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import LoginPage from '../pages/LoginPage/LoginPage'
import CadastroPage from '../pages/CadastroPage/CadastroPage'

const router = createBrowserRouter([
    { 
        path: "/", 
        element: <HomePage />
    },
    { 
        path: "/login", 
        element: <LoginPage />
    },
    { 
        path: "/signup", 
        element: <CadastroPage />
    }
])

export default router
