
import { createBrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Home from  './components/Home';
import Mandi from './components/Mandi';
import Seeds from './components/Seeds';
import SeedsDetails from './components/SeedsDetails';
import Login from './components/Login';
import SignUp from './components/SignUp';
const appRouter = createBrowserRouter([
    {
      path:'/',
      element:<Main/>,
    //   errorElement : </>,
      children : [
        {
          path : '/',
          element : <Home/>
        },
        {
          path : '/login',
          element : <Login/>
        },
        {
            path:'/mandi',
            element : <Mandi/>
        },
        {
            path: '/seedsservice',
            element : <Seeds/>
        },
        {
            path: '/seedsservice/:id',
            element : <SeedsDetails/>
        },
        {
          path: '/signup',
          element : <SignUp/>
      }
      ]
    }
  ])

  export default appRouter