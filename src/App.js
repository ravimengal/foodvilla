import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route} from 'react-router-dom'
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Cart from './components/Cart';
import Error from './components/Error';

function App() {
  return (
   <>
 <Nav />
   <Routes>
    <Route path={'/'} element={<Home/>}/>
    <Route path={'/about'} element={<About/>}/>
    <Route path={'/cart'} element={<Cart/>}/>
    <Route path='*' element={<Error/>}/>
   </Routes>
   </>
  );
}

export default App;
