import { IconHeart , IconUser , IconShoppingCart  } from "@tabler/icons-react";  
const NavBaarTop =()=>{
  return(
        <div className="flex h-14 justify-between  bg-white pt-4 shadow-sm">
        <div>
        <h1 className="text-xl text-rose-800 font-bold ml-2">V-Mart</h1>
      </div>

      <div >
        <ul className="flex gap-7">
            <li>Home</li>
            <li>About</li>
            <li>Contact US</li>
        </ul>
      </div>
      <div className="flex mr-3 gap-7">
      <IconHeart/>
      <IconShoppingCart/>
      <IconUser/>
      </div>
 </div>
    )
} 
export default NavBaarTop ;