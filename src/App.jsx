
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './AppLayout'
import Home from './Home';
import About from './About';
import Contact from './Contact';



const App=()=> {

  const myRouter = createBrowserRouter([
  {
    path:"/v-mart",
    element: <AppLayout/>,
    children:[
      {
        path:"home",
        element:<Home/>
      },
     
      {
        path:"about",
        element:<About/>
      },
      {
        path:"contact",
        element:<Contact/>
      }
    ]
  }
]);
  return (
    <div>
     

      <RouterProvider router={myRouter}/>
  
    </div>
  );
}

export default App






