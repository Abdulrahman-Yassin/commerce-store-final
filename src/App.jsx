/*eslint-disable */

import React, {  Suspense } from 'react';
import { ClipLoader } from 'react-spinners'
import {BrowserRouter, BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { ProductProvider } from './ProductContext'

const Layout = React.lazy(() => import('./pages/Layout'));
const Home = React.lazy(() => import('./pages/Home'));
const Contact = React.lazy(() => import('./pages/Contact'));
const About = React.lazy(() => import('./pages/About'));
const ProductDetail = React.lazy(() => import('./pages/ProductDetail'));
const CheckOut = React.lazy(() => import('./pages/CheckOut'));
const AllProducts = React.lazy(() => import('./pages/AllProducts'));
const NotFound = React.lazy(() => import('./pages/NotFound'));
import AdminDashboard from "./pages/AdminDashboard"


function App() {
  return (
      <ProductProvider>
        <BrowserRouter>
        <Suspense fallback={
        <div className="loader-container">
          <ClipLoader color={"#123abc"} loading={true} size={50} />
        </div>
        }>
          <Routes>
            <Route path="/" element={<Layout/>} >
              <Route index element={<Home/>} />
              <Route path= "Contact" element={<Contact/>} />
              <Route path= "About" element={<About/>} />
              <Route path=":name" element={<ProductDetail/>} />
              <Route path="CheckOut" element={<CheckOut/>} />
              <Route path="AllProducts" element={<AllProducts/>} />
              <Route path="AdminDashboard" element={<AdminDashboard />} />
              <Route path= "/*" element={<NotFound/>} />
            </Route>
          </Routes>
        </Suspense>
        </BrowserRouter>
      </ProductProvider>
  )
}

export default App
