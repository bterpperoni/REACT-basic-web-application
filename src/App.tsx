import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import Structures from './pages/Structures';
import Structure from './pages/Structure';

const BrowserRouter = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/structures', element: <Structures /> },
  { path: '/structure', element: <Structure /> },
])


function App() {
  return (
    <div className="App">
      <RouterProvider router={BrowserRouter}></RouterProvider>
    </div>
  )
}

export default App
