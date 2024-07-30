import React, { useState } from "react";
import "./stylesFaq.css"

const Faq = () => {
  const [isOpen, setIsOpen] = useState(null);
  const [search, setSearch] = useState("");

  const toggleNavbar = (index) => {
    setIsOpen(isOpen === index ? null : index);
  };

  const handleChange = (e) => {
    setSearch(e);
  };

  const infoFAQ = [
    {
      title: "What information can I obtain from the website?",
      text: "The I-94 website has four sections: 1.) applying for a new (provisional) Form I-94; 2.) providing you with your most recent I-94 admission record from 1983 forward for most classes of admission (or parole), and indefinitely for certain classes, such as diplomats and those admitted under the Compacts of Free Association; 3.) displaying your most recent 10 years of travel history; and 4.) querying your compliance with your current period of admission for some nonimmigrant classes. <br> The new I-94 for which you apply online is provisional (similar to a draft) because final steps need to be taken at the port of entry to complete the I-94 application process. <br> The most recent I-94 admission record can be printed and used as evidence of a lawful admission. Individuals can now obtain I-94 records from 1983 forward for most classes of admission (or parole), and indefinitely for certain classes, such as diplomats and those admitted under the Compacts of Free Association, provided the original I-94 is on file. <br> The Get Travel History section will provide the dates of your arrivals to and departures from the United States for the past ten years. <br> Some individuals (currently nonimmigrants who entered the U.S. under the Visa Waiver Program) can view their current compliance with their Form I-94, letting them know how many days remain until the admit until date. <br> United States Citizens (USCs) and Lawful Permanent Residents (LPRs) are unable to utilize this website or the CBP One™ mobile application to look up information about themselves.",
    },
    {
      title:
        "Will CBP provide a traveler with any documentation or evidence showing status and time allowed in the U.S.?",
      text: "Yes. At a United States port of entry, a traveler will be issued an electronic I-94. A traveler can obtain their electronic arrival/departure record from the CBP I-94 website or the CBP One™ mobile application. A traveler lawfully admitted (or paroled) into the U.S. may print their lawful record of admission (Form I-94) from this CBP website or from the CBP One™ mobile application. If someone requests your admission information, this is the form you would provide. CBP may provide each traveler with an admission stamp that is annotated with date of admission, class of admission, and admit until date. The CBP admission stamp is listed as an alien registration document found in 8 CFR 264.1, Registration and Fingerprinting, which requires that certain nonimmigrant aliens be registered, fingerprinted, and photographed at the port of entry (POE) at the time the nonimmigrant aliens apply for admission.",
    },
    {
      title:
        "Will the I-94 automation process help eliminate errors? If information on the I-94 is in error, how does the traveler correct mistakes?",
      text: 'The electronic version of the I-94 will help eliminate errors because the information will be obtained by official documents and officer input. If there is an error or mistake on the paper or electronic form I-94, the traveler can contact the Deferred Inspection office closest to their location. A list of Deferred Inspection Sites and Ports of Entry can be found on CBPs website, <a href="https://www.cbp.gov" target="_blank">https://www.cbp.gov</a>, under the Ports link at the bottom of the page. <br> If an applicant received an incorrect I-94 from U.S. Citizenship and Immigration Services (USCIS), the applicant should refer to Form I-102 available at <a href="https://www.uscis.gov/forms" target="_blank">https://www.uscis.gov/forms</a> or visit the nearest USCIS site.',
    },
    {
      title:
        "What should a traveler do if he or she was admitted incorrectly to the United States?",
      text: 'If a traveler was admitted incorrectly to the United States, the traveler should visit a local CBP Deferred Inspection Site to have his or her admission corrected. A list of Deferred Inspection Sites can be found on CBPs website, <a href="https://www.cbp.gov" target="_blank">https://www.cbp.gov</a>, under the Ports link at the bottom of the page. If a traveler was issued an incorrect I-94 by United States Citizenship and Immigration Services (USCIS), the traveler should refer to the Form I-102, which can be found at <a href=" https://www.uscis.gov/forms" target="_blank"> https://www.uscis.gov/forms</a>.',
    },
    {
      title:
        "How does CBP's automation of Form I-94 affect the Form I-9 process?",
      text: "Form I-9 is used to verify the identity and employment authorization of individuals hired for employment in the United States and is administered by the United States Citizen and Immigration Services (USCIS). I-94 automation does not affect the Form I-9 process. However, the public should be prepared to see I-94 forms that will look differently than what they are used to seeing. Now, they may see both I-94 forms that have original stamps and writing on a card, in addition to I-94 forms that are printouts with no original writing or stamps on them. Travelers can print their own Form I-94 from this website using the 'Get Most Recent I-94' query or by using the same option on the CBP One™ mobile application. Both versions are acceptable for purposes involving Form I-9. For more information on the I-9 form and process, visit https://www.uscis.gov.",
    },
    {
      title:
        "Where do I go to get additional information about I-94 automation?",
      text: "If you have additional questions about I-94 Automation, arrival numbers or travel to the United States, please visit https://www.cbp.gov/document/fact-sheets/i-94-fact-sheet.",
    },
    {
      title: "Can an I-94 be used for multiple land or ferry entries?",
      text: "An issued I-94 may be valid, under certain circumstances, for multiple land-border or ferry port entries allowing the traveler to stay until the Admit Until Date specified on the issued I-94.",
    },
    {
      title: "What does my I-94 number look like?",
      text: "I-94 numbers issued prior to May 2019 are 11 characters long and contain only numbers. An example of one of these I-94 numbers is: 01234567890. Beginning in May 2019, CBP switched to alphanumeric I-94 numbers. The new I-94 numbers will remain at 11 characters but will follow the format of 9 numbers, followed by a letter, then another number. An example of the new alphanumeric I-94 number is: 012345678A1. Unexpired I-94s issued in the numeric-only format will continue to be valid until the admit until date printed on the paper I-94 and/or the date displayed in the 'Get Most Recent I-94' section of this website.",
    },
    {
      title: "How do I print my I-94 form?",
      text: "Travelers can print their own Form I-94 from this website using the 'Get Most Recent I-94' query or by using the same option on the CBP One™ mobile application. Once the traveler retrieves their I-94 there is a 'print' button at the bottom of the results page which will give you the option to print the information displayed.",
    },
    {
      title: "Can I obtain travel records for previous or expired passports?",
      text: "Yes. The website will provide travel history going back ten years from the present. If travel during those ten years was conducted on an expired passport, it will be displayed. The website will also provide the most recent I-94 information going back to 1983 (for most classes of admission or parole, and indefinitely for certain classes, such as diplomats and those admitted under the Compacts of Free Association) associated with an expired passport. However, for the Get Most Recent I-94 query, the passport number associated with the I-94 must be used, even if that passport has expired.",
    },
    {
      title:
        "What do I need to do if my departure information is incorrect or inaccurate?",
      text: "There is no formal action to take. CBP tracks departures in a variety of manners, but not all departures are available on the website. If you are departing by air or sea, your departure is recorded electronically. There may be times when this information does not appear accurate. Also, some land border departures may not be recorded in CBP systems. Land border departures on the Southern Border are not always documented. A departure will be recorded if you depart via land and re-enter the United States prior to admit until date on your Form I-94 but may not be displayed on the website. If you are not a resident of Canada or Mexico and you receive an electronic I-94 and depart via land, but do not re-enter the United States prior to the admit until date on your Form I-94, you may want to travel with evidence of your departure into Canada or Mexico. Evidence of departure can include, but is not limited to, foreign entry stamps in a passport, transportation tickets, pay stubs, and/or other similar documentation.",
    },
    {
      title: "Why do I need my travel history?",
      text: "You may need your travel history if you are trying to obtain benefits, whether with United States Citizenship and Immigration Services (USCIS) or another government agency.",
    },
    {
      title: "How can I extend my stay while in the United States?",
      text: "Visa Waiver Program applicants cannot extend the duration of their stay, except in very limited circumstances. If you are eligible to extend your authorized period of stay based on your class of admission, you will need to file an application to Extend/Change Nonimmigrant Status (I-539 Form) with U.S. Citizenship and Immigration Services (USCIS). You can find additional information at https://www.uscis.gov.",
    },
    {
      title:
        "What can I do if I feel the information regarding my departure from the United States is incorrect?",
      text: "If you feel your departure information is incorrect, you have two options:\n1. You can contact the CBP Information Center (CIC) at 877-227-5511 (00+1+202-325-8000 for international callers).\n2. You can formally write to the Department of Homeland Security's Travel Redress Inquiry Program (DHS TRIP). DHS TRIP is a single point of contact for individuals who have inquiries or seek resolution regarding difficulties they experienced during their travel screening at transportation hubs, like airports and train stations, or crossing U.S. borders. Examples may include denied or delayed airline boarding, repeated denials or delays with entry into and exit from the United States at a port of entry or border checkpoint, referred to additional (secondary) screening.\nYou can contact DHS Traveler Redress Inquiry Program (DHS TRIP) at https://www.dhs.gov/trip.\nOr, by mail at the following address:\nDHS Traveler Redress Inquiry Program (TRIP)\n601 South 12th Street, TSA-901\nArlington, VA 22202\nIf the traveler feels that the information on their Form I-94 is incorrect, they must visit a CBP Deferred Inspection Site. See 'What should a traveler do if he or she was admitted incorrectly to the United States?' section of this FAQ above.",
    },
    {
      title:
        "As a migrant worker, where can I find information about my rights and worker protections?",
      text: "Visit migrantworker.gov to learn about rights and resources available to you as a migrant worker. It is against the law for your employer to fire you, refuse to pay you, or take other negative actions against you for exercising your rights.",
    },
  ];

  const filteredInfoFAQ = infoFAQ.filter((info) =>
    info.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-[#f2f2f2] faq">
      <div className="container py-8">
        <div className=" grid gap-4">
          <div className=" w-full flex gap-2">
            <input
              className="w-full py-2 border-gray-200 border-2 px-4 text-xl"
              value={search}
              type="text"
              placeholder="Search FAQ"
              onChange={(e) => handleChange(e.target.value)}
            />
            <span className="bg-[#0071bc] hover:bg-[#1e5595] px-1 flex items-center text-xl">
              <i className={`fa fa-search px-2 text-white }`}></i>
            </span>
          </div>

          <div className="p-2 bg-white">
            <div className="border-b-2 border-x-2 border-gray-300 rounded-md">
              {filteredInfoFAQ.map((info, index) => (
                <div
                  key={index}
                  className={`text-xl border-t-2 border-gray-300 rounded-t-sm`}
                >
                  <button
                    className={`p-2 flex items-center gap-2 w-full ${
                      isOpen === index ? "bg-[#e5f5ff]" : ""
                    }`}
                    onClick={() => toggleNavbar(index)}
                  >
                    {isOpen === index ? (
                      <i
                        class="fa fa-chevron-down text-[#1e5595]"
                        aria-hidden="true"
                      ></i>
                    ) : (
                      <i
                        class=" fa fa-chevron-right text-[#1e5595]"
                        aria-hidden="true"
                      ></i>
                    )}

                    <span
                      className="text-lg"
                      dangerouslySetInnerHTML={{
                        __html: info.title,
                      }}
                    ></span>
                  </button>
                  <div
                    className={`grid overflow-hidden transition-all duration-200 ease-in-out text-sm leading-[1.4rem] ${
                      isOpen === index
                        ? "grid-rows-[1fr] bg-[#f4fbff] p-4"
                        : "grid-rows-[0fr]"
                    }`}
                  >
                    <div
                      className="overflow-hidden"
                      dangerouslySetInnerHTML={{
                        __html: info.text,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
