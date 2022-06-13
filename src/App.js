import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home/Home';
import MyServices from './components/Home/MyServices/MyServices';
import Header from './components/Shared/Header/Header';
import Blog from './components/Blog/Blog';
import About from './components/About/About';
import AparDetails from './components/AparDetails/AparDetails';
import WarehouseDetails from './components/WarehouseDetails/WarehouseDetails';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/myservices' element={MyServices}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/aparParts' element={<AparDetails></AparDetails>}></Route>
        <Route path='/wareHouse' element={<WarehouseDetails></WarehouseDetails>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
