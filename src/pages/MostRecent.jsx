import React from "react";
import doc from "../assets/doc.png";  
const MostRecent = () => {
  return (
    <section>
      {" "}
      <div className="text-center bg-white py-4">
        <div className="container lg:w-full md:w-[790px] flex justify-center">
          <div className="w-[600px]">
            <h1 className="text-[#1c3764] text-3xl font-light text-center ">
              Get Most Recent I-94
            </h1>

            <span className="  my-[18px] mb-[20px] border-b border-[#1c3764] text-center relative flex justify-center items-center">
              <img
                className="absolute bg-white pt-4 w-8"
                src={doc}
                alt=""
              />
              <i
                className={`fa fa-comments-o  text-[18px] font-bold t  px-2`}
              ></i>
            </span>

            <p className=" text-[#1c3764] italic">
              Get your most recent I-94 form to prove your legal visitor status
              in the United States (Available going back to 1983 for most
              classes of admission, (or parole), and indefinitely for certain
              classes, such as diplomats and those admitted under the Compacts
              of Free Association.)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MostRecent;
