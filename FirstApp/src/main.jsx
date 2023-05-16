import ReactDom from 'react-dom/client';
import App from './App';
import "./index.css";
const element=ReactDom.createRoot(document.querySelector("#root"));
// element.render(<h1>Rehab Zaki </h1>);

element.render(<App/>)