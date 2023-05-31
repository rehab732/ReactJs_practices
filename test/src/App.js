import Home from "./components/Home/Home";
import Parent from "./components/Parent/Parent";
const { Component } = require("react");
export class App extends Component{
  state={}
  render() {
    return (
      <>
      <Home/>
      <Parent/>
      </>
    );
  }
}