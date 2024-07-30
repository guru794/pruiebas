import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="container lg:w-full md:w-[790px]">
      <ul className="grid grid-cols-1 md:grid-cols-6 *:gap-1 md:text-center">
        <div className="">
          <li className="mb-[19px]">
            <Link
              to="https://www.help.cbp.gov/s/?language=en_US"
              target="_blank"
            >
              CBP Info Center's FAQ about I-94
            </Link>
          </li>
        </div>
        <div className="">
          <li className="mb-[19px]">
            <Link
              to="https://www.help.cbp.gov/s/questions?language=en_US"
              target="_blank"
            >
              Contact CBP
            </Link>
          </li>
        </div>
        <div className="">
          <li className="mb-[19px]">
            <Link to="https://www.cbp.gov/about" target="_blank">
              About CBP
            </Link>
          </li>
        </div>
        <div className="">
          <li className="mb-[19px]">
            <Link
              to="https://www.cbp.gov/document/directives/vulnerability-disclosure-program-policy-and-rules-engagement"
              target="_blank"
            >
              Vulnerability Disclosure
            </Link>
          </li>
        </div>
        <div className="">
          <li className="mb-[19px]">
            <Link
              to="https://www.cbp.gov/site-policy-notices/accessibility"
              target="_blank"
            >
              Accessibility
            </Link>
          </li>
        </div>
        <div className="">
          <li className="mb-[19px]">
            <Link
              to="https://www.cbp.gov/site-policy-notices/privacy-office"
              target="_blank"
            >
              Privacy Policy
            </Link>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Footer;
