import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import Structures from './pages/Structures';

const BrowserRouter = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/structures', element: <Structures /> },
])


function App() {


  return (
    <div className="App">
      <RouterProvider router={BrowserRouter}></RouterProvider>
    </div>
  )
}

export default App
