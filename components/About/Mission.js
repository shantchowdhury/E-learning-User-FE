import React from "react";
import Lottie from 'lottie-react';
import Bulb from '../../lottie/bulb.json';
import Roket from '../../lottie/rocket.json';

function Mission() {
  return (
    <div className={styles.misson__Container}>
      
      <div className={styles.mission}>
        <div className={styles.lottie}>
          <Lottie style={{width: 200}} animationData={Bulb} loop={true} />
        </div>
        <div className={styles.mission__Inner}>
            <h5 className={styles.mission__Header}>
              Our Mission
            </h5>
            <p className={styles.mission__Para}>
            We are on a mission to build the Bangladesh's most inclusive online university where students can 
            learn real-life skills and network with smart people to achieve their goals.
            </p>
        </div>
      </div>

      <div className={styles.mission}>
        <div className={styles.mission__Inner}>
            <h5 className={styles.mission__Header}>
              Our Vision
            </h5>
            <p className={styles.mission__Para}>
            We are on a mission to build the Bangladesh's most inclusive online university where students can 
            learn real-life skills and network with smart people to achieve their goals.
            </p>
        </div>
        <div className={styles.lottie}>
         <Lottie style={{width: 200}} animationData={Roket} loop={true} />
        </div>
      </div>
      
    </div>
  );
}

const styles = {
  misson__Container: 'site-container space-y-8 lg:space-y-10 w-full flex flex-col py-10 lg:py-16',
  mission: 'flex items-center justify-evenly text-white/90 bg-cover',
  lottie: 'lg:block hidden',
  mission__Inner: 'px-8 py-7 border border-white/10 sm:px-7 sm:py-10 lg:px-10 lg:py-12 bg-black rounded-3xl shadow-sm md:max-w-xl',
  mission__Header: "mb-3 text-2xl md:text-3xl font-bold tracking-tight text-gray-900 text-pink",
  mission__Para: "md:text-lg"
}

export default Mission;
