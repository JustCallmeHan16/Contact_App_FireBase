import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'
import SignUp from './pages/SignUp'
import ProtectRoute from './private/ProtectRoute'
import Dashboard from './components/Dashboard'
import RootLayout from './layout/RootLayout'
import SignIn from './pages/SignIn'
import 'animate.css';
import NotFound from './pages/NotFound'
import DashboardLayout from './layout/DashboardLayout'
import AddContact from './pages/AddContact'

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout/>}>
        <Route index element={<SignUp/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/dashboard' element={<ProtectRoute><DashboardLayout/></ProtectRoute>}>
          <Route index element={<Dashboard/>}/>
          <Route path='contact' element={<AddContact/>}/>
        </Route>
        <Route path='*' element={<NotFound/>}/>
      </Route>
    )
  )
  
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App