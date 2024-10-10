// src/App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/common/nav';
import Home from './components/page/Home';
import Category from './components/page/Category';
import MyAccount from './components/page/Myaccount';
import ProductDetail from './components/shared/ProductDetail';
import STATE from './context/initState';
import { UserProvider } from './context/context';
import { useReducer } from 'react';
import reducer from './context/reducer';
import User from './components/page/User';
import CreateAuctionForm from './components/page/CreateAuctionForm';
import ProductList from './components/page/ProductList';
import { ImageProvider } from './context/ImageContext'; // Import ImageProvider
import Login from './components/page/Login';
import AboutUs from './components/page/AboutUs';
import Blog from './components/page/Blog';
import ContactUs from './components/page/ContactUs';

function App() {
  const data = localStorage.getItem("state") ? JSON.parse(localStorage.getItem("state")) : STATE;
  const [state, dispatch] = useReducer(reducer, data);
  

  return (
    <UserProvider value={{ state, dispatch }}>
      <ImageProvider>
        <Nav />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/category' element={<Category />} />
            <Route path='/my-account' element={<MyAccount />} />
            <Route path='/product/:id' element={<ProductDetail />} />
            <Route path='/ProductDetail' element={<ProductDetail />} />
            <Route path='/user' element={<User />} />
            <Route path='/create-auction' element={<CreateAuctionForm />} />
            <Route path='/productlist' element={<ProductList />} />
            <Route path='/login' Component={Login}/>
            <Route path='/about' Component={AboutUs}/>
            <Route path='/blog' Component={Blog}/>
            <Route path='/contactus' Component={ContactUs}/>
          </Routes>
        </main>
      </ImageProvider>
    </UserProvider>
  );
}

export default App;
