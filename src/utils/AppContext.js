import { createContext, useState, useEffect } from 'react';
import { base_url } from './constant';
// import Category from '../components/Category';

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [postList, setPostList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalpages] = useState();

  async function fetchData(currentPage,tag=null,category) {
    setLoading(true);
    let url = base_url + "?page=" + currentPage
    if(tag){
       url += '&tag=' + tag
    }
    if(category){
       url+= "&category=" + category;
    }
    try {
      const data = await fetch(url);
      const result = await data.json();
      setCurrentPage(result.page)
      setTotalpages(result.totalPages)
      setPostList(result.posts);
    } 
    catch (error) {
      console.error('Error fetching data' + error);
      setCurrentPage(1)
      setPostList([])
      throw error
    }
    setLoading(false);
    return postList;
  }

  const values = {
    loading,
    setLoading,
    postList,
    setPostList,
    currentPage,
    setCurrentPage,
    totalPages,
    setTotalpages,
    fetchData 
  }

  return (
    <AppContext.Provider value={values}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider;
