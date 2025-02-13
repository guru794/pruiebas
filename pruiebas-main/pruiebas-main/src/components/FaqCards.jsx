import React, { useState } from "react";
import Modal from "./Modal"

const FaqCards = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const closeModal = () => {
    setShowModal(false);
    document.body.style.overflow = 'unset';
  }


  const cards = [
    {
      id:1,
      title:
        "How do I report my departure if I have an electronic I-94 and depart via land or ferry?",
      subtitle:
        "If you have a paper Form I-94 and depart by land or ferry, you can turn the form into t...",
      subtitleComplete: "If you have a paper Form I-94 and depart by land or ferry, you can turn the form into the Canada Border Services Agency (CBSA) upon entry into Canada or to CBP at the port of entry prior to entering Mexico. If you received an electronic I-94 upon arrival, a departure will be recorded if you depart via land or ferry and re-enter the United States prior to the expiration date of your I-94. If you are not a resident of Canada or Mexico and you receive an electronic I-94 and depart via land or ferry but do not re-enter the United States prior to the expiration date stamped on your passport, you may want to travel with evidence of your departure into Canada or Mexico. Evidence of departure can include, but is not limited to, entry stamps in a passport, transportation tickets, pay stubs or other receipts. A traveler can request an entry stamp from the CBSA when entering Canada or from the Instituto Nacional de Migración (INM) when entering Mexico."
    },
    {
      id:2,
      title:
        "What information must I provide in order to obtain my most recent I-94, travel history, or compliance check, or to apply for a provisional I-94?",
      subtitle:
        "To retrieve your most recent I-94 form, your travel history, or apply online for a new ...",
    },
    {
      id:3,
      title:
        "What travel records can I access?",
      subtitle:
        "CBP maintains records of arrivals to and departures from the United States. The “...",
      subtitleComplete:"CBP maintains records of arrivals to and departures from the United States. The “Get Travel History” section of the I-94 website will provide the arrival/departure date and port of entry/exit for the individual queried. The website will provide records for the past ten years.<br>The provided travel history may not reflect the following: land border arrivals/departures, closed loop cruise arrivals/departures, air carrier reservation updates, and/or United States Citizenship and Immigration Services (USCIS) updates, changes of status, extensions of stay or adjustments of status. U.S. Citizen and Lawful Permanent Resident travel is NOT provided on this website. If this travel history is not complete, there is no action to take. CBP documents come from a variety of sources. This travel history is only a tool to assist the public and is not an official record for legal purposes."
    },
    {
      id:4,
      title:
        "Can I obtain travel records for previous or expired passports?",
      subtitle:
        "Yes. The website will provide travel history going back ten years from...",
      subtitleComplete:"<strong>Yes.</strong> The website will provide travel history going back ten years from the present. If travel during those ten years was conducted on an expired passport, it will be displayed. The website will also provide the most recent I-94 information going back to 1983 (for most classes of admission or parole, and indefinitely for certain classes, such as diplomats and those admitted under the Compacts of Free Association) associated with an expired passport. However, for the Get Most Recent I-94 query, the passport number associated with the I-94 must be used, even if that passport has expired."
    },
  ];

  const handleCardClick = (index) => {
    setSelectedCard(cards[index]);
    setShowModal(true);
    if (typeof window != 'undefined' && window.document) {
      document.body.style.overflow = 'hidden';
  }
  };

  return (
    <>
      {cards.map((card, index) => (
        <div
          onClick={() => handleCardClick(index)}
          key={index + "a"}
          className={`text-gray-700 text-[1.1em] h-[320px] p-[28px] px-[23px] pb-[25px] text-center border-solid border-[3px] border-[#d3c6ab] flex flex-col cursor-pointer ${index == 1 || index == 3 ? "bg-[#fefaf1]" : "bg-white"} ${index < cards.length - 1 ? "border-r-0" : ""} hover:bg-[#fdf4e3]`}
        >
          <span className="w-full text-[1.125em] font-bold text-[#624f32]">{card.title}</span>
          <span className="  my-[18px] mb-[20px] border-b border-[#d3c6ab] text-center relative flex justify-center items-center">
            <i className={`fa fa-comments-o absolute text-[18px] font-bold t  px-2 ${index == 1 || index == 3 ? "bg-[#fefaf1]" : "bg-white"}`}></i>
          </span>
          <span className="text-[1.1em] font-semibold text-[#333]">{card.subtitle}</span>
        </div>
        
      ))}
      {showModal && 
      <Modal closeModal={closeModal} selectedCard={selectedCard} />}
    </>
  );
};

export default FaqCards;
