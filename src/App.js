import { Routes, Route } from "react-router-dom";
import Bloglist from "./components/Bloglist";
import Category from "./components/Category";
import Tag from "./components/Tag";
import Footer from "./components/Footer";
import Header from "./components/Head";
import Blogdetail from "./components/Blogdetail";
import { useLocation, useParams ,useSearchParams} from 'react-router-dom'
import React, { useContext, useEffect, useState } from 'react'
import { base_url } from './utils/constant'
import { AppContext } from "./utils/AppContext";

function App() {
  const { fetchData,currentPage } = useContext(AppContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(()=>{
    const page = searchParams.get("page")

    if(location.pathname.includes('tag')){
      const tag = location.pathname.split("/").at(-1).replace("-"," ");
      fetchData(Number(page),tag,null)
    }
    else if(location.pathname.includes('category')){
      const category = location.pathname.split("/").at(-1).replace("-"," ");
      fetchData(Number(page),null,category)
    }
    else if(!(location.pathname.includes('tag')) || !(location.pathname.includes('category'))){
      fetchData(currentPage);
    }
  },[ location.pathname, location.search,currentPage])

  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Bloglist/>}/>
        <Route path="/category/:categoryid" element={<Category/>}/>
        <Route path="/tag/:tagid" element={<Tag/>}/>
        <Route path="/blog/:blog" element={<Blogdetail/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
