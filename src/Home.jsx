import MainSection from './MainSection';
import { useEffect, useState } from 'react';
import { IconSearch} from "@tabler/icons-react";  
import axios from 'axios';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/products")
      .then((response) => {
        console.log("Fetched products:", response.data.products);
        setProducts(response.data.products); // Assuming the products are in response.data.products
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      }); 
  }, []);

  return (
    <>
      <div className='bg-slate-50 flex justify-center flex-1 overflow-auto'>
        <div className='w-[80%] h-full overflow-auto'>
     <div className='h-25'>
          
     <div className="flex justify-between ">
            
            <div className="flex mt-4 mb-4 pl-2 pt-2 pb-2 shadow-md rounded-full gap-2 bg-white w-[40%]">
             <div className="text-gray-600">
             <IconSearch/> 
             </div>
                <input className="w-[90%] bg-white border-none outline-none placeholder-gray-400" type="search" placeholder="Search Products..." />
            </div>
          <div className="bg-white mt-3  mb-3 flex items-center pl-2 pr-2 rounded-md shadow-md ">

  <select className=" border-white outline-none mb-2" name="cars" id="cars">
    <option hidden >sort by: <b>Default</b> </option>
    <option  value="saab">Price low to high</option>
    <option  value="opel">Price high to low</option>
  </select>
        </div>
            </div>
</div>

     {/* data fetch through axios */}
          <div className='grid grid-cols-5 gap-4 shadow-sm justify-center  overflow-auto'>
            {
              products.map((product) => {
                return (
                  <MainSection 
                    key={product.id} // Assuming each product has a unique id
                    MainSectionData={{
                      imgUrl: product.images[0],
                      category: product.category,
                      title: product.title,
                      rating: product.rating,
                      price: product.price
                    }}
                  />
                );
              })
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;














































