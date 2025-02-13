import React, { useState } from "react";
import "../App.css"
const AnnoucementBody = () => {
  const [active, setActive] = useState(true);
  const toggleActive = () => {
    setActive(!active);
  };
  return (
    <>
      {active && (
        <article className="announcement-body relative">
          <div className="flex gap-1 pb-4 pl-4 justify-start flex-wrap flex-row-reverse text-end text-[13px]">
            <span className="text-white">
              جهت دريافت و چاپ مدارك قانوني تان لطفا به لینك مراجعه فرمائيد
            </span>
            <a href="" className=" text-[#ffd700] ">
              https://i94.cbp.dhs.gov/I94/I94-OAW-Dari.pdf
            </a>
            <i
              onClick={toggleActive}
              className="fa fa-times absolute translate-x-7 text-white text-[20px] hover:text-black"
              aria-hidden="true"
            ></i>
          </div>
          <div className="flex gap-1  pb-4 pl-4 justify-start flex-wrap flex-row-reverse text-end">
            <span className="text-white">
              د لا موندلو او قانونی اسنادو د چاپولو لپاره مهربانی وکړی لاندی
              لینک کیکاږۍ{" "}
            </span>
            <a href="" className=" text-[#ffd700] ">
              {" "}
              https://i94.cbp.dhs.gov/I94/I94-OAW-Pashtu.pdf
            </a>
          </div>
          <div className="   pb-4 pl-4">

            <i
              className="fa fa-info-circle text-[14px] text-white pt-[3px] pr-[4px]"
              aria-hidden="true"
            ></i>
            <span className="text-white">
              Pre-paying for a provisional I-94 through this web site does not
              guarantee admission into the United States.
            </span>
          </div>
        </article>
      )}
    </>
  );
};

export default AnnoucementBody;
