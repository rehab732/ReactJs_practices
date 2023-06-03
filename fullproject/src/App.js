// import logo from './logo.svg';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Movies from './Components/Movies/Movies';
import People from './Components/Peopel/People';
import TV from './Components/TV/Tv';
import Login  from './Components/Login/Login';
import Register  from './Components/Register/Register';
import ItemDetails from './Components/ItemDetails/ItemDetails';
let routers=createBrowserRouter([
  {path:'/',element:<Layout/>,children:[
    {path:"home",element:<Home/>},
    {path:"movies",element:<Movies/>},
    {path:"people",element:<People/>},
    {path:"tv",element:<TV/>},
    {path:"itemdetails/:id/:mediatype",element:<ItemDetails/>},
    {path:"login",element:<Login/>},
    {index:true,element:<Register/>},


  ]}
]);
function App() {
  return <RouterProvider router={routers}></RouterProvider>
}

export default App;
