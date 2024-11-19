
import {  IconCarambola ,IconHeart ,IconShoppingCart} from "@tabler/icons-react";  

const MainSectionMain = (props)=>{

    return(
        
        <div>
            <div className="border border-gray-100 shadow-md p-4  rounded-md py-2 px-2 mb-5">            
                <div className="h-[50%]">
            <img className="h-[50%] " src={props.imgUrl} />
            </div>
            <div className="text-lg text-gray-800">{props.name}</div>
            <div className="text-gray-600 ">{props.information}</div>

                <div className="flex">
                  <div className="bg-green-100 flex rounded-full py-1 px-2 gap-1 items-center mt-1 mb-1 ">
                     <IconCarambola size={20}/>{props.rating}
                 </div>
            </div>
    
            
            <div className="flex justify-between">
                <div className="font-bold">{props.price}</div>
                <div className="flex text-gray-600">
                   <IconHeart/>
                   <IconShoppingCart/>
                </div>
            </div>
            </div>

            </div>

        
        )
        }
export default MainSectionMain;