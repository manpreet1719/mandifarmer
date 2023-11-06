
import { createBrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Home from  './components/Home';
import Mandi from './components/Mandi';
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
            path:'/mandi',
            element : <Mandi/>
        },
        {
            path: '/',
            element : <Header/>
        },
        {
            path: '/',
            element : <Header/>
        }
      ]
    }
  ])

  export default appRouter