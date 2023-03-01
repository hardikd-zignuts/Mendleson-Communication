import React from "react";
import heroGroup from "../assets/img/Hero-Group.png";
import Assets3 from "../assets/img/Assets 3.png";
import Assets4 from "../assets/img/Assets 4.png";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div>
          <img className="hero-part1" src={heroGroup} alt="heroGroup" />
        </div>
        <div className="hero-part2">
          <div className="hero-part2__title">
            Mendleson Communication and Engagement
          </div>
          <div className="hero-part2__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada
            sed ipsum, ut quam volutpat, tortor.
          </div>
        </div>
        <div className="hero-part3">
          <img src={Assets3} alt="assets3" />
          <img src={Assets4} alt="assets4" />
        </div>
      </div>
    </>
  );
};

export default Hero;

// import React from "react";
// import Sales from "../assets/img/Vector Smart Object21 1.png";
// import Graphic12 from "../assets/img/Graphic 1 2.png";

// const Hero = () => {
//   return (
//     <>
//       <div class="hero">
//         <img className="hero-part1" src={Sales} alt="Group1" />
//             <div className="hero-part2">
//               <div className="hero-part2__title">
//                 Mendleson Communication and Engagement
//               </div>
//               <div className="hero-part2__text">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada
//                 sed ipsum, ut quam volutpat, tortor.
//               </div>
//             </div>
//         <img className="hero-part3" src={Graphic12} alt="Graphic12" />
//       </div>
//     </>
//   );
// };

// export default Hero;
