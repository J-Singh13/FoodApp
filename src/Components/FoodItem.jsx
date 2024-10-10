
import React from "react";
import FoodCard from "./FoodCard";
import FoodData from "../data/FoodData";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
const FoodItem = () => {
  const category = useSelector((state) => state.category.category);
  const search = useSelector((state) => state.search.search);
  console.log(search);
  const handleToast = (name) => {
    toast.success(`${name} added to cart`);
  };
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex flex-wrap gap-10 justify-center lg:justify-start mx-6 my-10">
        {FoodData.filter((food) => {
          if (category === "All") {
            return food.name.toLowerCase().includes(search.toLowerCase());
          } else {
            return (
              category === food.category &&
              food.name.toLowerCase().includes(search.toLowerCase())
            );
          }
        }).map((food) => (
          <FoodCard
            key={food.id}
            id={food.id}
            name={food.name}
            price={food.price}
            desc={food.desc}
            rating={food.rating}
            img={food.img}
            handleToast={handleToast}
          />
        ))}
      </div>
    </>
  );
};

export default FoodItem;





// import React from "react";
// import { motion } from "framer-motion";
// import FoodData from "../data/FoodData";

// const FoodItem = () => {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
//       {FoodData.map((item) => (
//         <motion.div
//           key={item.id}
//           className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transform transition-transform duration-300"
//           whileHover={{ scale: 1.05 }}
//         >
//           <img src={item.img} alt={item.name} className="w-full h-48 object-cover" />
//           <div className="p-4">
//             <h3 className="text-xl font-semibold">{item.name}</h3>
//             <p className="text-gray-600">{item.desc}</p>
//             <div className="flex justify-between items-center mt-4">
//               <span className="text-lg font-bold">${item.price}</span>
//               <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         </motion.div>
//       ))}
//     </div>
//   );
// };

// export default FoodItem;
