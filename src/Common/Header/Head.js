import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Head = () => {
  return (
    <>
      <section className="head">
        <div className="container flex justify-between">
          <div className="left row flex justify-center items-center">
            <i>
              <FaPhoneAlt />
            </i>
            <label>+88034 4444 4444</label>
            <i>
              <MdEmail />
            </i>
            <label>example@gmail.com</label>
          </div>
          <div className="right row RTtext flex  gap-[4px]">
            <label>Theme FAQ's</label>
            <label>Need Helps</label>
            <span>🇮🇳</span>
            <label htmlFor="">INR</label>
            <span>🇺🇸</span>
            <label htmlFor="">USD</label>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
