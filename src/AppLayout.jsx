import { IconHeart,IconShoppingCart,IconUser} from '@tabler/icons-react';
import {  NavLink, Outlet } from "react-router-dom"
const AppLayout=()=>{
    const Navlinks =[
        {
          label:"Home",
          path:"home"  
        },
        {
          label:"About",
          path:"about" 
        },
        {
          label:"Contact",
          path:"contact"
        },
    ]
    console.log(NavLink);
    
    return(


        <div className="h-screen w-screen overflow-auto flex flex-col">
        <div className="p-4  text-gray-800  mb-1 justify-between flex  shadow-md">
          <div>
            <h1 className="text-rose-500 text-xl font-bold">V-Mart</h1>
          </div>
        <div className='flex gap-5'> 
        {
        Navlinks.map((navitems)=>{
            
            return(
        
                <NavLink
                key={navitems.label}
                to={navitems.path}
                 className={({isActive}) => 
                 (isActive ?" text-rose-500": "")}>
                    {navitems.label}
                    
                </NavLink>
                
            )
        })
        } 
     </div>

<div className='flex gap-3 text-gray-500 text-sm  '><IconHeart/> 
<IconShoppingCart/>
<IconUser/>
</div>
           
        </div>
        <Outlet/>
       
        </div>
        
    )
}
export default AppLayout