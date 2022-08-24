import logo from './logo.svg';
import React,{useEffect, useState} from 'react';
import './App.css';
import Formdata from './Formdata';
import Parent from './Parent';
import Home from './Home';
import About from './About';
import Usememo from './Usememo';
import Useref from './Useref';
import Page404 from './Page404';
import Paramsrouting from './Paramsrouting';
import Higherordercomp from './Higherordercomp';
import Navigationrouting from './Navigationrouting';
import Navbar from './Navbar';
import SearchParamHook from './SearchParamHook';
import NestedRouting from './NestedRouting';
import {BrowserRouter,Routes, Route, Link, Navigate} from 'react-router-dom';
import Login from './Login';
import Protected from './Protected';
import PreviousState from './PreviousState';
import PreviousProps from './PreviousProps';
import StateWithObjects from './StateWithObjects';
import UseStateWithArray from './UseStateWithArray';
import UseReducer from './UseReducer';
import UseLayoutEffect from './UseLayoutEffect';
import UseImperativeHandle from './UseImperativeHandle';
import UseContextTutorial from './UseContextTutorial';
import Header from './containers/Header';
import ProductListing from './containers/ProductListing';
import ProductComponent from './containers/ProductComponent';
import ProductDetail from './containers/ProductDetail';
function App() {
    const [count, setCount] = useState(0);
  return (
    <div className="App">
     <h1>Hello React</h1>
     {/* Use of Redux */}
     <Header/>
     {/* react form use */}
     <Formdata/>
     {/* parent to child data & chlind to parent data */}
     <Parent/>
     {/* Use of useMemo */}
     <Usememo/>
     {/* use of useRef */}
     <Useref/>
     {/* use of Higherordercomp */}
     <Higherordercomp/>
     {/* use of PreviousState */}
     <PreviousState/>
     {/* use of useLayoutEffect */}
     <UseLayoutEffect/>
     <BrowserRouter>
     <Link to="/products">Product List</Link>
     {/* <Link to="/product/:productId">Product</Link> */}
     {/* <Link to="/about">About</Link>
     <Link to="/login">Login</Link> */}
     {/* use of navlink & link */}
     <h1>Use of navlink</h1>
      <Navbar/>
      {/* use of previousProps */}

      <PreviousProps count={count}/>
      {/* use of useReducer */}
      <UseReducer/>
      {/* useState with Array */}
      <UseStateWithArray/>
      <button onClick={()=>setCount(Math.random()*10)}>Click me</button>
      {/* useSearchParams Hook */}
     <SearchParamHook/>
     {/* how to update object with state */}
     <StateWithObjects/>
     {/* use of useImperativeHook */}
      <UseImperativeHandle/>
      {/* Use of useContextHook */}
      <UseContextTutorial/>
     <NestedRouting/>
     <Routes>
       {/* <Route path="/*" element={<Page404/>}/> */}
       {/* <Route path="/login" element={<Login/>}/>
       <Route path="/" element={<Protected Component={Home}/>}/>
       <Route path="/about" element={<About/>}/>
       <Route path="/*" element={<Navigate to="/"/>}/>
       <Route path="/params/:name" element={<Paramsrouting/>}/>
        <Route path="/navigation" element={<Navigationrouting/>}/> */}
        <Route exact path="/products" element={<ProductListing/>}/>
        <Route path="/products/:productId" element={<ProductDetail/>}/> 
        <Route path="/*" element={<Page404/>}/>
     </Routes>
     </BrowserRouter>
     {/* Navigation routing explained
      <Navigationrouting/> */}
    </div>
  );
}

export default App;
