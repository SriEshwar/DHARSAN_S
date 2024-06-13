import logo from './logo.svg';
import './App.css';
import Hello from './hello';
import Login from './login';
import Wishing from './wishing';
import Task from './task';
import Conditional from './conditional';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './home';
import Contact from './contact';
import Product from './product';
import Hooks from './hooks';
function App() {
  return (
    // <div className="App">
    //   {/* <h1 style={{color:'red'}}>REACT_APPLICATION</h1>
    //   <Hello/> */}
    //   <Login/>
    // </div>
    // <div>
    // <Hello name="Dharsan" location="chennai" color="green">Try to learn React fast</Hello>
    // <Wishing/>
    // </div>
    // <Task/>
    // <Conditional/>
    // <BrowserRouter>
    // <Routes>
    //   <Route path='/' element={<Home/>}></Route>
    //   <Route path='contact' element={<Contact/>}></Route>
    //   <Route path='product' element={<Product/>}></Route>
    // </Routes>
    // </BrowserRouter>
    <Hooks/>
  );
}

export default App;
