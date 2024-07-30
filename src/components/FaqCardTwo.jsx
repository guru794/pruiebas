import React from "react";
import dniImage from '/src/assets/dni.jpg';
import dniFrontImage from '/src/assets/dni-front.jpg';
import dniBackImage from '/src/assets/dni-back.jpg';
import visaImage from '/src/assets/visa.jpg';

const FaqCardTwo = () => {
  return (
    <>
      <p className=" my-4 text-blueGray-500 leading-relaxed">
        To retrieve your most recent I-94 form, your travel history, or apply
        online for a new I-94, the following information is needed. Enter the
        information exactly as it appears on the travel document that you used
        to enter the United States. Generally, this document is your passport or
        border crossing card, however certain individuals who did not have
        either of these documents at the time of their arrival can use their
        Alien Registration Number to search for their record on the I-94 website
        or CBP One™ mobile application and retrieve or print their most recent
        electronic I-94 form.
      </p>
      <h3 className=" mt-[32px] mb-[9px] text-[20px] font-semibold text-black">
        Sample Passport
      </h3>
      <div className="w-full">
        <img src={dniImage} alt="DNI" />
      </div>
      <div class="p-6 bg-white">
        <p class="mb-4">
          The name format on a passport can be ambiguous, the data in the
          Machine-Readable Zone (MRZ) at the base should be used instead. This
          data follows the International Organization for Standardization (ISO)
          standard convention.
        </p>
        <ol class="list-decimal pl-8 space-y-4">
          <li>
            <p class="pl-4">
              <strong>Passport Country of Issuance </strong>- Select your
              passport country of issuance corresponding to the country code
              appearing in zone 1 on the MRZ of your passport. The country of
              citizenship on your passport is the passport issuing authority
              regardless of the country from which the passport was physically
              obtained.
            </p>
          </li>
          <li>
            <p class="pl-4">
              <strong>Passport Number </strong>- Enter your passport number from
              the MRZ of your passport as shown above in zone 2. The passport
              number may contain numbers and/or letters. Please closely
              distinguish between the two. Some commonly confused characters are
              the number zero (0) and letter 'O', and the number one (1) and
              letter 'I'. When seeking travel history, you must enter the
              passport number from which you wish to obtain the history.
            </p>
            <p class="pl-4 mt-2">
              If you do not have the original passport number used for your
              entry, you will need to submit a Freedom of Information Act (FOIA)
              request to obtain your most recent I-94 and travel information.
              For more information about FOIA requests, refer to the FAQs above.
            </p>
            <p class="pl-4 mt-2">
              Additionally, you may also enter your BCC or Alien Registration
              Number for certain individuals in the passport number field to
              search for their 10-year travel history and print their most
              recent electronic I-94 form going back to 1983 for most classes of
              admission (or parole), and indefinitely for certain classes, such
              as diplomats and those admitted under the Compacts of Free
              Association on the I-94 website or CBP One™ mobile application.
            </p>
          </li>
          <li>
            <p class="pl-4">
              <strong> Last/Surname and First (Given) Name </strong>- Enter your
              family name and your first (given) name as shown above in zones 3
              and 4 from the MRZ of your passport. Note, the system WILL NOT
              accept special characters such as a tilde.
            </p>
          </li>
          <li>
            <p class="pl-4">
              <strong>Date of Birth </strong>- Enter the day, month, and year
              you were born, which should match the date of birth in the upper
              portion of your passport.
            </p>
          </li>
        </ol>
      </div>
      <div class="p-6 bg-white">
        <div class="mb-6">
          <h2 class="text-xl font-semibold mb-2">Applying for a New I-94</h2>
          <p class="mb-4">
            If you are applying for a new I-94, the following additional
            information is required from your passport:
          </p>
          <ul class="list-disc pl-6 mb-4">
            <li>
              <strong>Passport Date of Issuance</strong>: Enter the Passport
              Date of Issuance as shown in area 7 on the upper portion of your
              passport.
            </li>
            <li>
              <strong>Passport Date of Expiration</strong>: Enter the Passport
              Date of Expiration as shown below area 7 on the upper portion of
              your passport.
            </li>
          </ul>
          <p>
            In addition to passport information, you may need to enter
            additional information in order to apply for a new I-94. See the
            sections below for further detail.
          </p>
        </div>

        <div class="mb-6">
          <h2 class="text-xl font-semibold mb-2">
            Applying for a New I-94 - Travelers from Visa Waiver Countries
          </h2>
          <p class="mb-4">
            If you are from a visa waiver country, you do not need to enter
            information other than from your passport for stays of 90 days or
            less; however, you are required to have an approved Electronic
            System for Travel Authorization (ESTA). See the following link to
            view the
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.cbp.gov/travel/international-visitors/visa-waiver-program"
              class="text-blue-600 underline"
            >
              Visa Waiver Country Requirements
            </a>
            .
          </p>
        </div>

        <div class="mb-6">
          <h2 class="text-xl font-semibold mb-2">
            Applying for a New I-94 - Travelers from Canada
          </h2>
          <p class="mb-4">
            If you are a citizen of Canada, you do not need to enter information
            other than from your passport for stays of 180 days or less. See the
            following link to view the
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/canada-travel-advisory.html"
              class="text-blue-600 underline"
            >
              Requirements for Canadian Citizen Travelers
            </a>
            .
          </p>
        </div>

        <div class="mb-6">
          <h2 class="text-xl font-semibold mb-2">
            Applying for a New I-94 - Travelers from Mexico holding a Border
            Crossing Card
          </h2>
          <p class="mb-4">
            If you are a border crossing card holder and applying online for a
            new I-94, you will need the following additional information:
          </p>
          <ul class="list-disc pl-6 mb-4">
            <li>
              <strong>Border Crossing Card (BCC) Number</strong> - Enter the
              Border Crossing Card number as shown in zone 1 on the MRZ of your
              border crossing card.
            </li>
          </ul>
          <p>
            See below the sample Border Crossing Card to identify where
            information is located.
          </p>
        </div>
      </div>
      <div className="w-full">
        <img src={dniFrontImage} alt="DNI Front" />
      </div>
      <div className="p-2"></div>
      <div className="w-full">
        <img src={dniBackImage} alt="DNI Back" />
      </div>
      <div className="w-full">
        <img src={visaImage} alt="Visa" />
      </div>
      <div className=" pt-6">
        <h3>Applying for a New I-94 - Travelers Requiring a Visa</h3>
        <p class="mb-4">
          If your passport is not issued from a visa waiver country or Canada,
          or you do not hold a border crossing card, you are required to enter
          the following information from your visa in order to apply for a new
          I-94:
        </p>
        <ol class="list-decimal pl-8 space-y-4">
          <li>
            <p class="pl-4">
              <strong>Date of Issuance - </strong>Enter the date of issuance of
              the visa as shown in area 1 on the upper portion of your visa.
            </p>
          </li>
          <li>
            <p class="pl-4">
              <strong>Visa Number - </strong>Enter the visa number as shown in
              area 2 (the red number) on the upper portion of your visa.
            </p>
          </li>
          <li>
            <p class="pl-4">
              <strong>Country of Issuance - </strong>Select the visa country of
              issuance corresponding to the country code appearing in zone 3 on
              the MRZ of your visa. This country of issuance will always be
              "USA".
            </p>
          </li>
        </ol>
        <p class=" text-xs pt-2">
          See below the sample Visa to identify where information is located.
        </p>
      </div>
    </>
  );
};

export default FaqCardTwo;
