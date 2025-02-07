import React from "react";
import Instructionpdf from "./Instructionpdf";
import PanelCards from "./PanelCards";
import Newsroom from "../../components/newsroom";
import Forms from "../../components/Forms";
const Home = () => {
  return (
    <>
      <Instructionpdf />
      <Newsroom />

      <div className="bg-image">
        <div className="container lg:w-full md:w-[790px] text-center ">
          <div className=" pb-[40px]">
            <div className=" mx-auto py-[24px] lg:py-[60px]  w-[80%] ">
              <div className="bg-[rgba(22,57,99,0.85)] py-6 w-full">
                <h1 className="text-[1.5em] lg:text-[2.15em] font-extralight m-0 w-[80%] mx-auto px-[24px] text-white">
                  Official Site for Travelers Visiting the United States: Apply
                  for or Retrieve Form I-94, Request Travel History and Check
                  Travel Compliance
                </h1>
                <p className="text-[0.85em] lg:text-[1.4em] w-[98%] m-0 mx-auto mt-5 text-white">
                  International travelers visiting the United States can apply
                  for or retrieve their I-94 admission number/record (which is
                  proof of legal visitor status) as well as retrieve a limited
                  travel history of their U.S. arrivals and departures.
                </p>
              </div>
            </div>

            <div className="w-full grid xl:grid-cols-4 lg:grid-cols-2 lg:gap-4 sm:grid-cols-7">
              <PanelCards />
            </div>
          </div>
        </div>
      </div>
      <Forms />
    </>
  );
};

export default Home;
