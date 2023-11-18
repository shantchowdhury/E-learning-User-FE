import React from "react";

function Category() {
  return (
    <>
      <div className="sm:py-3">
        <h1 className="text-gray-900 w-[90%] mx-auto sm:w-auto text-xl text-center md:text-3xl mt-10 ">
          Some of our courses, access it right heres
        </h1>
        <div className="p-8 flex flex-col justify-center items-center">
          <div className="flex gap-4 flex-wrap justify-center">
            <button className={styles.button}>Content Creation</button>
            <button className={styles.button}>Freelancing</button>
            <button className={styles.button}>BlockChain</button>
            <button className={styles.button}>Development</button>
            <button className={styles.button}>Graphic Design</button>
            <button className={styles.button}>UI/UX Design</button>
          </div>
        </div>
      </div>
    </>
  );
}

const styles = {
  button: "rounded-full sm:w-max w-full text-[15px] font-Poppins border border-gray hover:bg-blue duration-200 px-5 py-[10px] font-light",
}

export default Category;
