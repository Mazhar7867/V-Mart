import { IconSearch, IconCircleChevronDown } from "@tabler/icons-react";  
const MainSection =()=>{
    return(
        <div className="h-25">
        <div className="flex justify-between ">
            
            <div className="flex mt-4 mb-4 pl-2 pt-2 pb-2 shadow-md rounded-full gap-2 bg-white w-[40%]">
             <div className="text-gray-600">
             <IconSearch/> 
             </div>
                <input type="search" placeholder="Search Products..." />
            </div>
        <div className="flex justify-between bg-white mt-4 gap-2 mb-4 pt-2 pl-2 w-[15%] rounded-md shadow-md">
            <div className=" flex  justify-between">
                <span className="text-gray-500 ">Sort by :</span>
                <span className="text-md text-bold pl-1">Default</span>
                </div>
                <div className="text-gray-500">
                    <IconCircleChevronDown/>
                </div>
        </div>
            </div>
        </div>
    
    )
}
export default MainSection