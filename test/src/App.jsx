import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Layout from "./components/Layout/Layout";
import Parent from "./components/Parent/Parent";
import NotFound from "./components/NotFound/NotFound";
import Contacts from "./components/Contacts/Contacts";
import Test from "./components/Test/Test";
let routers=createBrowserRouter([
  {path:"/",element:<Layout/>,children:[
    {index:true,element:<Home/>},
    {path:"about",element:<About/>},
    {path:"parent",element:<Parent/>},
    {path:"gall",element:<Contacts/>},
    {path:"test",element:<Test/>},
    {path:"*",element:<NotFound/>},


  ]}
])
const { Component } = require("react");
export class App extends Component{
  state={}
  render() {
    return (
      <>
      <RouterProvider router={routers}></RouterProvider>
      {/* <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Home/>
          </div>
          <div className="col-md-6">
            <About/>
          </div>
        </div>
      </div> */}
      {/* <Home/>
      <About/> */}
      {/* <Parent/> */}
      </>
    );
  }
}