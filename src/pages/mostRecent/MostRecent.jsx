import React, { useState, useContext } from "react";

import doc from "../../assets/doc.png";
import Select from "react-select";
import countryList from "country-list";
import { UserContext } from "../../utils/data";
const MostRecent = () => {
  const { viajero } = useContext(UserContext);
  return (
    <section className=" lg:w-full md:w-[790px] bg-white mx-auto">
      <PrimeraSeccion />
      <div>
        <div className="text-center px-12">
          {" "}
          <h3 className="text-4xl font-semibold">Enter Traveler Information</h3>
          <p className="pt-4 max-w-64 mx-auto">
            {" "}
            <strong> Note:</strong> The info returned may not reflect
            applications submitted to or benefits received by U.S. Citizenship
            and Immigration Services or Immigration and Customs Enforcement.
          </p>
        </div>
        {/* Solo mostrar Infoi94 si viajero tiene información */}
        {viajero?.nombre ? <Infoi94 /> : <TravelerForm />}
      </div>
    </section>
  );
};

const Infoi94 = () => {
  const { viajero, resetViajero } = useContext(UserContext);

  // const viajero = {
  //   nombre: "prueba",
  //   apellido: "pruebaApellido",
  //   fechaNacimiento: "11/11/1111",
  //   pais: "colombia(co)",
  //   numeroDocumento: 123456,
  //   numeroAdmision: 111111111,
  //   fecha: "2023 September 12",
  //   clase: "DT",
  //   fechaLimite: "09/10/2025",
  // };
  return (
    <div className="p-8 max-w-[350PX] mx-auto shadow-lg">
      <div className="bg-yellow-100 text-yellow-700 fill-yellow-700 p-4 font-semibold flex ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
          />
        </svg>

        <p className="pt-1 pl-2">
          For: {viajero?.nombre} {viajero?.apellido}
        </p>
      </div>
      <div className=" flex flex-col gap-4 pt-6">
        <p className="border-b text-lg border-black">Most Recent I-94</p>
        <div className="text-primary font-semibold pt-6 flex flex-col gap-2">
          <p>Admission (I-94) Record Number: {viajero?.numeroAdmision}</p>

          <p>Most Recent Date of Entry: {viajero?.fecha}</p>

          <p>Class of Admission: {viajero?.clase}</p>

          <p>Admit Until Date: {viajero?.fechaLimite}</p>

          <p>Details provided on the I-94 form:</p>

          <div className="pl-4">
            <p>Last/Surname: {viajero?.apellido}</p>

            <p>First (Given) Name: {viajero?.nombre}</p>

            <p>Birth Date: {viajero?.fechaNacimiento}</p>

            <p>Document Number: {viajero?.numeroDocumento}</p>

            <p>country of Issuance: {viajero?.pais}</p>
          </div>
        </div>
        <button
          className="text-white bg-[#0071bc] border-2 border-solid border-[#205493] px-[30px] py-[8px]"
          onClick={resetViajero}
        >
          GET THIS
        </button>
      </div>
    </div>
  );
};

const PrimeraSeccion = () => {
  return (
    <div className="text-center bg-white py-4">
      <div className="container lg:w-full md:w-[790px] flex justify-center">
        <div className="w-[600px]">
          <h1 className="text-[#1c3764] text-3xl font-light text-center ">
            Get Most Recent I-94
          </h1>

          <span className="  my-[18px] mb-[20px] border-b bg-gray-100 border-[#1c3764] text-center relative flex justify-center items-center">
            <img className="absolute bg-white pt-4 w-8" src={doc} alt="" />
            <i
              className={`fa fa-comments-o  text-[18px] font-bold t  px-2`}
            ></i>
          </span>

          <p className=" text-[#1c3764] italic">
            Get your most recent I-94 form to prove your legal visitor status in
            the United States (Available going back to 1983 for most classes of
            admission, (or parole), and indefinitely for certain classes, such
            as diplomats and those admitted under the Compacts of Free
            Association.)
          </p>
        </div>
      </div>
    </div>
  );
};

const countries = countryList.getData().map((country) => ({
  value: country.code,
  label: `${country.name} (${country.code})`,
}));
const TravelerForm = () => {
  const { obtenerViajero } = useContext(UserContext);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    documentNumber: "",
    countryOfIssuance: null,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const handleBlur = (e) => {
    if (!formData[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: `${
          e.target.placeholder || e.target.name
        } is required.`,
      });
    }
  };

  const handleCountryChange = (selectedOption) => {
    setFormData({ ...formData, countryOfIssuance: selectedOption });

    if (errors.countryOfIssuance) {
      setErrors({ ...errors, countryOfIssuance: "" });
    }
  };

  const handleCountryBlur = () => {
    if (!formData.countryOfIssuance) {
      setErrors({
        ...errors,
        countryOfIssuance:
          "You must select a document country of issuance or enter a 3-character country code.",
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = `${key} is required.`;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      obtenerViajero(formData.documentNumber);

      // setSubmitted(true);
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <p className="text-red-500 mb-2">
        Required fields are indicated by an asterisk
      </p>
      <form
        className="md:grid md:grid-cols-2 md:gap-8 "
        onSubmit={handleSubmit}
      >
        <div>
          <label className="block text-sm font-medium">
            <span className="text-red-500">*</span>
            First (Given) Name
          </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`mt-1 p-2 border-b bg-gray-100 w-full  ${
              errors.firstName ? "border-red-500" : ""
            }`}
            required
          />
          {errors.firstName && (
            <p className="text-red-500 text-xs">{errors.firstName}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium">
            <span className="text-red-500">*</span>
            Last (Family) Name/Surname
          </label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`mt-1 p-2 border-b bg-gray-100 w-full  ${
              errors.lastName ? "border-red-500" : ""
            }`}
            required
          />
          {errors.lastName && (
            <p className="text-red-500 text-xs">{errors.lastName}</p>
          )}
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium">
            <span className="text-red-500">*</span>Date of Birth
          </label>
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`mt-1 p-2 border-b bg-gray-100 w-full  ${
              errors.dateOfBirth ? "border-red-500" : ""
            }`}
            required
          />
          {errors.dateOfBirth && (
            <p className="text-red-500 text-xs">{errors.dateOfBirth}</p>
          )}
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium">
            <span className="text-red-500">*</span>Document Number
          </label>
          <input
            type="text"
            name="documentNumber"
            value={formData.documentNumber}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Document Number"
            className={`mt-1 p-2 border-b bg-gray-100 w-full  ${
              errors.documentNumber ? "border-red-500" : ""
            }`}
            required
          />
          {errors.documentNumber && (
            <p className="text-red-500 text-xs">{errors.documentNumber}</p>
          )}
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium">
            <span className="text-red-500">*</span>
            Document Country of Issuance
          </label>
          <Select
            options={countries}
            value={formData.countryOfIssuance}
            onChange={handleCountryChange}
            onBlur={handleCountryBlur}
            className="mt-1 bg-gray-100"
            required
          />
          {errors.countryOfIssuance && (
            <p className="text-red-500 text-xs">{errors.countryOfIssuance}</p>
          )}
        </div>
        <div className="flex justify-end mt-4">
          <button
            type="submit"
            className="py-2 md:my-4 bg-blue-600 text-white  rounded-md w-full hover:bg-blue-700 md:max-w-60"
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default MostRecent;
