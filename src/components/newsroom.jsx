import React, { useState } from "react";

const Newsroom = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section>
      <div className="bg-white py-4">
        <div className="container lg:w-full md:w-[790px] flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-[1.5fr_3fr] w-full">
            {/* Columna izquierda: Menú de navegación */}
            <div className="bg-[rgb(243,243,243)] pl-8 text-left shadow-md h-full">
              <h2 className="font-bold text-lg mb-6">Newsroom</h2>
              <ul className="space-y-4">
                {/* Toggle Menu para "All News" */}
                <li className="border-l-4 border-blue-600 pl-1">
                  <button
                    className="text-[16px] flex justify-between items-center w-full bg-white mt-3 h-10 text-[rgb(0,51,102)] font-[400] hover:underline"
                    onClick={toggleMenu}
                  >
                    All News
                    <span
                      className={`ml-2 transform transition-transform ${
                        isMenuOpen ? "rotate-180" : "rotate-0"
                      }`}
                    >
                      ▼
                    </span>
                  </button>

                  {isMenuOpen && (
                    <ul className="space-y-2 pl-3 text-gray-800 bg-white">
                      <li>
                        <a
                          href="#"
                          className="block hover:text-blue-600 hover:underline"
                        >
                          Fact Sheets
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block hover:text-blue-600 hover:underline"
                        >
                          News Releases
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block hover:text-blue-600 hover:underline"
                        >
                          Stakeholder Messages
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block hover:text-blue-600 hover:underline"
                        >
                          Alerts
                        </a>
                      </li>
                    </ul>
                  )}
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[14px] text-[rgb(0,51,102)] pr-20 hover:underline"
                  >
                    Immigration Relief in Emergencies or Unforeseen
                    Circumstances
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[14px] text-[rgb(0,51,102)] hover:underline"
                  >
                    Media Contacts
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[14px] text-[rgb(0,51,102)] hover:underline"
                  >
                    Video and Photo Gallery
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[14px] text-[rgb(0,51,102)] hover:underline"
                  >
                    Speeches, Statements, Testimony
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[14px] text-[rgb(0,51,102)] hover:underline"
                  >
                    Social Media Directory
                  </a>
                </li>
              </ul>
            </div>

            {/* Columna derecha: Contenido */}
            <div className="bg-white p-8 text-left space-y-5">
              <nav className="text-sm text-gray-600 mb-6">
                <a href="#" className="text-blue-600 hover:underline">
                  Home
                </a>{" "}
                &gt;{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  Newsroom
                </a>{" "}
                &gt;{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  All News
                </a>{" "}
                &gt;{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  Alerts
                </a>{" "}
                <span className="text-[rgb(68,68,68)]">
                  DHS Terminates the 2023 Designation of Venezuela for Temporary
                  Protected Status
                </span>
              </nav>
              <div className="text-[30px]" style={{ color: "rgb(68,68,68)", fontFamily: "sans-serif" }}>
                DHS Terminates the 2023 Designation of Venezuela for Temporary
                Protected Status
              </div>

              <p className="text-sm text-gray-600">Release Date: 02/03/2025</p>
              <p className="text-gray-800 leading-relaxed text-[14px]">
                After reviewing country conditions and consulting with the
                appropriate U.S. government agencies, Secretary of Homeland
                Security Kristi Noem has determined that conditions in Venezuela
                no longer support the 2023 designation of Venezuela for
                Temporary Protected Status (TPS).
              </p>
              <p className="text-gray-800 leading-relaxed text-[14px]">
                TPS and related benefits associated with the 2023 designation
                will no longer be in effect starting 60 days after publication
                of the{" "}
                <a
                  href="#"
                  className="text-[rgb(0,51,102)] hover:underline font-bold"
                >
                  Federal Register notice
                </a>
                .
              </p>
              <p className="text-gray-800 text-[14px]">
                Find more information about TPS at{" "}
                <a
                  href="#"
                  className="text-[rgb(0,51,102)] hover:underline font-bold"
                >
                  uscis.gov/tps
                </a>
                . For more information on USCIS and its programs, please visit{" "}
                <a
                  href="#"
                  className="text-[rgb(0,51,102)] hover:underline font-bold"
                >
                  uscis.gov
                </a>{" "}
                or follow us on{" "}
                <a
                  href="#"
                  className="text-[rgb(0,51,102)] hover:underline font-bold"
                >
                  X (formerly Twitter)
                </a>
                ,{" "}
                <a
                  href="#"
                  className="text-[rgb(0,51,102)] hover:underline font-bold"
                >
                  Instagram
                </a>
                ,{" "}
                <a
                  href="#"
                  className="text-[rgb(0,51,102)] hover:underline font-bold"
                >
                  YouTube
                </a>
                ,{" "}
                <a
                  href="#"
                  className="text-[rgb(0,51,102)] hover:underline font-bold"
                >
                  Facebook
                </a>{" "}
                and{" "}
                <a
                  href="#"
                  className="text-[rgb(0,51,102)] hover:underline font-bold"
                >
                  LinkedIn
                </a>
                .
              </p>

              {/* Última revisión */}
              <p className="text-sm text-gray-600 font-light text-right">
                Last Reviewed/Updated: 02/03/2025
              </p>

              {/* Pregunta sobre la página */}
              <div className="mt-8 p-4  border-gray-300 text-center">
                <p className="text-gray-800 text-sm font-bold">
                  Was this page helpful?
                </p>
                <div className="mt-4 flex justify-center items-center space-x-4">
                  <label className="flex items-center text-gray-800 text-sm font-bold">
                    <input
                      type="radio"
                      name="helpful"
                      value="yes"
                      className="mr-2"
                    />
                    Yes
                  </label>
                  <label className="flex items-center text-gray-800 text-sm font-bold">
                    <input
                      type="radio"
                      name="helpful"
                      value="no"
                      className="mr-2"
                    />
                    No
                  </label>
                </div>
                <button
                  className="mt-4 px-4 py-2 border border-gray-400 text-gray-400 text-sm font-bold rounded cursor-not-allowed"
                  type="submit"
                  disabled
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsroom;
