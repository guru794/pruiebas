import React from "react";
import samplePass from "../assets/samplePass.jpg"
const ModalApply = ({ closeModal }) => {
  return (
    <>
      <div
        onClick={closeModal}
        className=" overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="relative  my-6 mx-auto max-w-xl text-start  "
        >
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                <h3>Sample Passport</h3>
             
            </div>
            {/*body*/}
            <div className=" p-6 flex-auto ">
              <div className="relative ">
                <img className=""
                  src={samplePass}
                  alt=""
                  srcset=""
                />
                <ul className="hidden sm:inline-block ">
                  <li className="bg-red-700 text-white px-1 absolute bottom-24 left-20">
                    1
                  </li>
                  <li className="bg-red-700 text-white px-1 absolute bottom-24 left-28">
                    3
                  </li>
                  <li className="bg-red-700 text-white px-1 absolute bottom-24 left-60">
                    4
                  </li>
                  <li className="bg-red-700 text-white px-1 absolute bottom-40 left-44">
                    6
                  </li>
                  <li className="bg-red-700 text-white px-1 absolute bottom-24 left-6">
                    8
                  </li>
                  <li className="bg-red-700 text-white px-1 absolute bottom-8 left-12">
                    2
                  </li>
                  <li className="bg-red-700 text-white px-1 absolute bottom-8 left-48">
                    5
                  </li>
                  <li className="bg-red-700 text-white px-1 absolute bottom-8 left-72">
                    7
                  </li>
                </ul>
              </div>

              <ul className="grid gap-2 font-bold">
                <li className=" flex items-center gap-2 text-sm">
                  <span className="bg-red-700 text-white px-2 py-1">1</span>
                  <p>Country of Issuance</p>
                </li>
                <li className=" flex items-center gap-2 text-sm">
                  <span className="bg-red-700 text-white px-2 py-1">2</span>
                  <p>Passport Number</p>
                </li>
                <li className=" flex items-center gap-2 text-sm">
                  <span className="bg-red-700 text-white px-2 py-1">3</span>
                  <p>Last (Family) Name / Surname</p>
                </li>
                <li className=" flex items-center gap-2 text-sm">
                  <span className="bg-red-700 text-white px-2 py-1">4</span>
                  <p>First (Given) Name</p>
                </li>
                <li className=" flex items-center gap-2 text-sm">
                  <span className="bg-red-700 text-white px-2 py-1">5</span>
                  <p>Date of Birth (YYMMDD)</p>
                </li>
                <li className=" flex items-center gap-2 text-sm">
                  <span className="bg-red-700 text-white px-2 py-1">6</span>
                  <p>Date of Issuance</p>
                </li>
                <li className=" flex items-center gap-2 text-sm">
                  <span className="bg-red-700 text-white px-2 py-1">7</span>
                  <p>Date of Expiration(YYMMDD)</p>
                </li>
                <li className=" flex items-center gap-2 text-sm">
                  <span className="bg-red-700 text-white px-2 py-1">8</span>
                  <p>Machine Readable Zone</p>
                </li>
              </ul>
              <p className=" py-2"><strong>Note: </strong> {" If there are any chevrons (<) in the first or last name, enter spaces in place of the chevrons."}</p>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-center p-6 border-t border-solid border-blueGray-200 rounded-b">
              <button
                className="bg-[#d7d6d6] hover:bg-[#0071bc] hover:text-white  font-bold uppercase text-sm px-6 py-3  shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 border-solid border-2 border-black"
                type="button"
                onClick={closeModal}
              >
                CLOSE
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default ModalApply;
