import React from "react";
import "../../App.css";
import pdfImage from "../../assets/pdf.png";

const Instructionpdf = () => {
  return (
    <div className="bg-[#003366]">
      <div className="2xl:max-w-[1400px] mx-auto py-4 px-2 grid xl:grid-cols-2">
        <div className="flex flex-row items-center gap-1">
          <img src={pdfImage} alt="" width={"25px"} />
          <span className="text-white w-[91%]">
            {
              "For instructions on accessing and printing your I-94 using your Alien Registration Number (A number), please "
            }
            <a href="" className="text-[#ffd700]">
              click here.
            </a>
          </span>
        </div>
        <div className="flex flex-row items-center gap-1">
          <img src={pdfImage} alt="" width={"25px"} />
          <span className="text-white w-[91%]">
            {
              "Para obtener instrucciones sobre cómo acceder e imprimir su registro de viaje Forma I-94, haga "
            }
            <a href="" className="text-[#ffd700]">
              click aquí.
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Instructionpdf;
