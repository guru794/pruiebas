import React from "react";
import { Link } from "react-router-dom";

const Forms = () => {
  return (
    <div className="bg-white text-blue-900 p-6 mb-10">
      <h2 className="text-2xl font-bold mb-4" style={{}}>
        Forms
      </h2>
      <div className="grid grid-cols-1 pt-4 md:grid-cols-4 gap-8 border-t-2">
        {/* Most Accessed Forms */}
        <div>
          <h3
            className="mb-8 text-blue-900"
            style={{
              fontSize: 20,
              fontWeight: "bold",
              fontFamily: "sans-serif",
            }}
          >
            Most Accessed Forms
          </h3>
          <ul className="space-y-3 mt-4">
            <li>
              <Link
                to="/applyform"
                className="hover:underline text-[13px] underline"
                style={{ fontFamily: "sans-serif" }}
              >
                I-9, Employment Eligibility Verification
              </Link>
            </li>
            <li>
              <Link
                to="/applyform"
                className="hover:underline text-[13px] underline"
                style={{ fontFamily: "sans-serif" }}
              >
                I-485, Application to Register Permanent Residence or Adjust
                Status
              </Link>
            </li>
            <li>
              <Link
                to="/applyform"
                className="hover:underline text-[13px] underline"
                style={{ fontFamily: "sans-serif" }}
              >
                I-765, Application for Employment Authorization
              </Link>
            </li>
            <li>
              <Link
                to="/applyform"
                className="hover:underline text-[13px] underline"
                style={{ fontFamily: "sans-serif" }}
              >
                I-90, Application to Replace Permanent Resident Card (Green
                Card)
              </Link>
            </li>
            <li>
              <Link
                to="/applyform"
                className="hover:underline text-[13px] underline"
                style={{ fontFamily: "sans-serif" }}
              >
                N-400, Application for Naturalization
              </Link>
            </li>
          </ul>
        </div>

        {/* Family Based Forms */}
        <div>
          <h3
            className="mb-8 to-blue-900"
            style={{
              fontSize: 20,
              fontWeight: "bold",
              fontFamily: "sans-serif",
            }}
          >
            Family Based Forms
          </h3>
          <ul className="space-y-3 mt-6">
            <li>
              <Link
                to="/applyform"
                className="hover:underline text-[13px] underline"
                style={{ fontFamily: "sans-serif" }}
              >
                I-129F, Petition for Alien Fiancé(e)
              </Link>
            </li>
            <li>
              <Link
                to="/applyform"
                className="hover:underline text-[13px] underline"
                style={{ fontFamily: "sans-serif" }}
              >
                I-130, Petition for Alien Relative
              </Link>
            </li>
            <li>
              <Link
                to="/applyform"
                className="hover:underline text-[13px] underline"
                style={{ fontFamily: "sans-serif" }}
              >
                I-360, Petition for Amerasian, Widow(er), or Special Immigrant
              </Link>
            </li>
            <li>
              <Link
                to="/applyform"
                className="hover:underline text-[13px] underline"
                style={{ fontFamily: "sans-serif" }}
              >
                I-600, Petition to Classify Orphan as an Immediate Relative
              </Link>
            </li>
            <li>
              <Link
                to="/applyform"
                className="hover:underline text-[13px] underline"
                style={{ fontFamily: "sans-serif" }}
              >
                I-751, Petition to Remove Conditions on Residence
              </Link>
            </li>
            <li className="mt-3 font-bold">
              <Link
                to="/applyform"
                className="hover:underline text-[15px]"
                style={{ fontFamily: "sans-serif", fontWeight: "bold" }}
              >
                All Forms
              </Link>
            </li>
            <li className="font-bold">
              <Link
                to="/applyform"
                className="hover:underline text-[15px]"
                style={{ fontFamily: "sans-serif", fontWeight: "bold" }}
              >
                File Online
              </Link>
            </li>
          </ul>
        </div>

        {/* Employment Based Forms */}
        <div>
          <h3
            className="mb-8 to-blue-900"
            style={{
              fontSize: 20,
              fontWeight: "bold",
              fontFamily: "sans-serif",
            }}
          >
            Employment Based Forms
          </h3>
          <ul className="space-y-3 mt-6">
            <li>
              <Link
                to="/applyform"
                className="hover:underline text-[13px] underline"
                style={{ fontFamily: "sans-serif" }}
              >
                I-129, Petition for a Nonimmigrant Worker
              </Link>
            </li>
            <li>
              <Link
                to="/applyform"
                className="hover:underline text-[13px] underline"
                style={{ fontFamily: "sans-serif" }}
              >
                I-140, Immigrant Petition for Alien Workers
              </Link>
            </li>
            <li>
              <Link
                to="/applyform"
                className="hover:underline text-[13px] underline"
                style={{ fontFamily: "sans-serif" }}
              >
                I-526, Immigrant Petition by Standalone Investor
              </Link>
            </li>
            <li>
              <Link
                to="/applyform"
                className="hover:underline text-[13px] underline"
                style={{ fontFamily: "sans-serif" }}
              >
                I-539, Application to Extend/Change Nonimmigrant Status
              </Link>
            </li>
          </ul>
        </div>

        {/* Humanitarian Based Forms */}
        <div>
          <h3
            className="mb-8 to-blue-900"
            style={{
              fontSize: 20,
              fontWeight: "bold",
              fontFamily: "sans-serif",
            }}
          >
            Humanitarian Based Forms
          </h3>
          <ul className="space-y-3 mt-6">
            <li>
              <Link
                to="/applyform"
                className="hover:underline text-[13px] underline"
                style={{ fontFamily: "sans-serif" }}
              >
                I-589, Application for Asylum and for Withholding of Removal
              </Link>
            </li>
            <li>
              <Link
                to="/applyform"
                className="hover:underline text-[13px] underline"
                style={{ fontFamily: "sans-serif" }}
              >
                I-730, Refugee/Asylee Relative Petition
              </Link>
            </li>
            <li>
              <Link
                to="/applyform"
                className="hover:underline text-[13px] underline"
                style={{ fontFamily: "sans-serif" }}
              >
                I-821, Application for Temporary Protected Status
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Forms;
