
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AboutMe from './pages/AboutMe.jsx'
import Portfolio from './pages/Portfolio.jsx'
import Contact from './pages/Contact.jsx'
import Resume from './pages/Resume.jsx'
import Home from './pages/Home.jsx'



export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path:'/AboutMe',
        element: <AboutMe />,
      },
      {
        path:'/Portfolio',
        element: <Portfolio />,
      },
      {
        path: '/Contact',
        element: <Contact/>
      },
      {
        path: '/Resume',
        element: <Resume/>
      }

    ]
  }
]
);

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router}/>)
