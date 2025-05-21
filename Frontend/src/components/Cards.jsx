// import React from "react";

// function Cards({ item }) {
//   return (
//     <>
//       <div className="mt-4 my-3 p-3">
//         <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
//           <figure>
//             <img src={item.image} alt={item.name || "Book Cover"} />
//           </figure>
//           <div className="card-body">
//             <h2 className="card-title">
//               {item.name}
//               <div className="badge badge-secondary">{item.category}</div>
//             </h2>
//             <p>{item.title}</p>
//             <div className="card-actions justify-between">
//               <div className="badge badge-outline">${item.price}</div>
//               <div className=" cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">
//                 Buy Now
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Cards;

import React from "react";
import toast from "react-hot-toast";

function Cards({ item }) {
  const handleBuyNow = () => {
    toast(`Processing to buy ${item.name}`);
  };

  const handleRead = () => {
    toast.success(`Reading ${item.name}`);
  };

  const isFree = item.category.toLowerCase() === "free";

  return (
    <div className="mt-4 my-3 p-3">
      <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
        <figure>
          <img src={item.image} alt={item.name || "Book Cover"} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.name}
            <div className="badge badge-secondary">{item.category}</div>
          </h2>
          <p>{item.title}</p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">
              $
              {typeof item.price === "number"
                ? item.price.toFixed(2)
                : item.price}
            </div>

            {isFree ? (
              <button
                onClick={handleRead}
                className="cursor-pointer px-4 py-1 rounded-full border-[2px] bg-lime-700 text-white hover:bg-violet-300 duration-200"
              >
                Read
              </button>
            ) : (
              <button
                onClick={handleBuyNow}
                className="cursor-pointer px-4 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200"
              >
                Buy Now
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
