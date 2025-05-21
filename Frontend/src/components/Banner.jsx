// // import React from "react";
// import banner from "../../public/Banner.png";
// import Login from "./Login";
// function Banner() {
//   return (
//     <>
//       <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
//         <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36">
//           <div className="space-y-8">
//             <h1 className="text-2xl md:text-4xl font-semibold text-gray-100 dark:text-gray-300 leading-snug">
//               Welcome back! Ready to{" "}
//               <span className="text-teal-300 dark:text-indigo-600 font-bold">
//                 learn something new
//               </span>{" "}
//               <span className="italic text-gray-300 dark:text-gray-400">
//                 every day?
//               </span>
//             </h1>

//             <p className="text-sm md:text-xl text-gray-300 dark:text-gray-300 max-w-xl leading-relaxed mt-2">
//               Dive into a world of knowledge, where every page sparks curiosity
//               and every story inspires growth. Join us on this exciting journey
//               of discovery!
//             </p>
//           </div>

//           <div className="">
//             <a
//               className="btn mt-6 btn-secondary"
//               onClick={() => document.getElementById("my_modal_3").showModal()}
//             >
//               Get Started
//             </a>
//             <Login />
//           </div>
//         </div>

//         <div className=" order-1 w-full mt-20 md:w-1/2  md:block hidden">
//           <img
//             src={banner}
//             className="md:w-[550px] md:h-[460px] md:ml-12"
//             alt=""
//           />
//         </div>
//       </div>

//       <div
//         className=" order-1  mt-20 md:w-1/2 rounded-xl overflow-hidden
//                 shadow-[0_10px_25px_rgba(0,30,60,0.6)] bg-transparent md:hidden"
//       >
//         <video
//           className=" object-cover"
//           autoPlay
//           loop
//           muted
//           playsInline
//           disablePictureInPicture
//         >
//           <source src="/Banner.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//       </div>
//     </>
//   );
// }

// export default Banner;

import React, { useState, useEffect } from "react";
import banner from "../../public/Banner.png";
import Login from "./Login";

function Banner() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("Users");
    if (user) setIsLoggedIn(true);
  }, []);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36">
          <div className="space-y-8">
            <h1 className="text-2xl md:text-4xl font-semibold text-gray-100 dark:text-gray-300 leading-snug">
              Welcome back! Ready to{" "}
              <span className="text-teal-300 dark:text-indigo-600 font-bold">
                learn something new
              </span>{" "}
              <span className="italic text-gray-300 dark:text-gray-400">
                every day?
              </span>
            </h1>

            <p className="text-sm md:text-xl text-gray-300 dark:text-gray-300 max-w-xl leading-relaxed mt-2">
              Dive into a world of knowledge, where every page sparks curiosity
              and every story inspires growth. Join us on this exciting journey
              of discovery!
            </p>
          </div>

          <div className="">
            {!isLoggedIn ? (
              <>
                <a
                  className="btn mt-6 btn-secondary"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  Get Started
                </a>
                <Login onLoginSuccess={handleLoginSuccess} />
              </>
            ) : (
              <div className="flex gap-4 mt-6">
                <a className="btn btn-accent">Cart</a>
                <a className="btn btn-info">Favorite Books</a>
              </div>
            )}
          </div>
        </div>

        <div className="order-1 w-full mt-20 md:w-1/2 md:block hidden">
          <img
            src={banner}
            className="md:w-[550px] md:h-[460px] md:ml-12"
            alt=""
          />
        </div>
      </div>

      {/* Mobile Video */}
      <div
        className="order-1 mt-20 md:w-1/2 rounded-xl overflow-hidden 
                shadow-[0_10px_25px_rgba(0,30,60,0.6)] bg-transparent md:hidden"
      >
        <video
          className="object-cover"
          autoPlay
          loop
          muted
          playsInline
          disablePictureInPicture
        >
          <source src="/Banner.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </>
  );
}

export default Banner;
