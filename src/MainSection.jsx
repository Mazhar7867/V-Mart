
import {  IconCarambolaFilled,IconHeart, IconShoppingCart } from "@tabler/icons-react";  

const MainSection = (props)=>{

    const 
    {
        MainSectionData: {imgUrl ,category ,title , rating ,price}} = props
    return(
        
        <div className=" bg-white">
            <div className="border border-gray-100 shadow-md   rounded-md py-2 px-2  ">            
                <div className="flex justify-center">
            <img className="size-[150px] hover:size-[175px] " src={imgUrl}  />
            </div>
            
            <div className="flex mt-1">

            <div className="bg-pink-100 flex rounded-full py-1 px-2 gap-1 items-center mt-1 mb-1 text-sm">
           <div className="text-sm text-red-600 text-bold">{category}</div>
            </div>
            </div>
    
            <div className="text-gray-600 ">{title}</div>

                <div className="flex">
                  <div className="bg-green-100 flex rounded-full py-1 px-2 gap-1 items-center mt-1 mb-1 text-sm ">
                     <div className="text-yellow-400 ">

                     <IconCarambolaFilled
                      size={16}/>
                      </div>
                      {rating}
                 </div>
            </div>
    
            
            <div className="flex justify-between">
                <div className="text-bold text-lg">${price}</div>
                <div className="flex text-gray-500">
                    <IconHeart/>
                    <IconShoppingCart/>
                </div>
            </div>
            </div>

            </div>

        
        )
        }
export default MainSection;