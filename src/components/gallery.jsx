// import { Image } from "./image";
// import React from "react";

// export const Gallery = (props) => {
//   return (
//     <div id="portfolio" className="text-center">
//       <div className="container">
//         <div className="section-title">
//           <h2>Gallery</h2>
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
//             dapibus leonec.
//           </p>
//         </div>
//         <div className="row justify-content-center">
//           <div className="portfolio-items d-flex flex-wrap justify-content-center">
//             {props.data
//               ? props.data.map((d, i) => (
//                   <div
//                     key={`${d.title}-${i}`}
//                     className="col-sm-8 col-md-4 col-lg-4 d-flex justify-content-center"
//                   >
//                     <Image
//                       title={d.title}
//                       largeImage={d.largeImage}
//                       smallImage={d.smallImage}
//                     />
//                   </div>
//                 ))
//               : "Loading..."}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
