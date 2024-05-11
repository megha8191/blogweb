
# Lifting state up
process of moving the state to a higher-level component in the hierarchy so that it can be shared by multiple child components 
example:

function Grandparent() {
  const [data, setData] = useState("Hello from Grandparent");

  return (
    <div>
      <h1>Grandparent Component</h1>
      <Parent data={data} setData={setData} />
    </div>
  );
}

### Note: Passing both the function and data:
If you don't pass setData down to the children components, it wouldn't strictly be considered lifting state up. Lifting state up involves moving the state to a higher-level component in the hierarchy and passing down both the state value and the functions to update that state as props.

# Context API
It's a powerful tool for managing global state or sharing data across components in a React application.
Centralised data : context

### Why not prop drilling? /Why context api needed
in prop drilling: we pass data to lower child components
-grandparent
 -parent
  -children
   -grandchildren
while the data was needed by grandchildren only, then why to pass to above and make it complex. it can be annoying to pass props when you have to send the same data to lots of components or when components are far away from each other. This can make an application slower and harder to work with.


## Working of context api
1. CreateContext
import { createContext } from 'react';
export const AppContext = createContext("");

const AppContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [postList, setPostList] = useState([]);
  const increment = () => {
      setCount(count + 1);
  };

    const values = {
      loading,
      setLoading,
      postList,
      setPostList,
      increment
    }
      
    return (
      <AppContext.Provider value={values}>
        {children}
      </AppContext.Provider>
    )
}
export default AppContextProvider;


2. Wrap Components with a Provider:
in index.js
  <AppContextProvider value=""> //value is optional 
    <App />
  </AppContextProvider>


3. Consume the Context
import { useContext } from 'react';
const { loading, setLoading,postList ,setPostList} = useContext(AppContext);



Api :
https://codehelp-apis.vercel.app/api/get-blogs?page=1

649594b5ae0a4a9ea1be38483863366d