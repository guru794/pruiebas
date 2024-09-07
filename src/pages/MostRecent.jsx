import React, { useState, useContext } from "react";
import doc from "../assets/doc.png";
import CaptchaComponent from "../components/CaptchaComponent";
import { UserContext } from "../utils/data";
const MostRecent = () => {
  const [aprovecaptcha, setAprovecaptcha] = useState(false);
  const [activate, setActivate] = useState(true);
  const [textCaso, setTextCaso] = useState("");
  const { caso, buscarCasoPorNumero } = useContext(UserContext);
  const handleChange = (e) => {
    setTextCaso(e.target.value);
  };

  const searchCaso = async () => {
    try {
      const casoEncontrado = await buscarCasoPorNumero(textCaso); // Espera que buscarCasoPorNumero termine
      if (casoEncontrado) {
        setActivate(false); // Solo cambia a false si encontró el caso
        console.log(activate);
        setAprovecaptcha(true);
      } else {
        setActivate(true);
        setAprovecaptcha(false);
      }
    } catch (error) {
      console.error("Error buscando el caso:", error);
      setActivate(true); // Si ocurre un error, activamos setActivate(true)
      setAprovecaptcha(false)

    }
  };

  return (
    <section>
      {" "}
      <div className="text-center bg-white py-4">
        <div className="container lg:w-full md:w-[790px] flex justify-center">
          <div className="w-[600px]">
            <h1 className="text-[#1c3764] text-3xl font-light text-center ">
              Get Most Recent I-94
            </h1>

            <span className="  my-[18px] mb-[20px] border-b border-[#1c3764] text-center relative flex justify-center items-center">
              <img className="absolute bg-white pt-4 w-8" src={doc} alt="" />
              <i
                className={`fa fa-comments-o  text-[18px] font-bold t  px-2`}
              ></i>
            </span>

            <p className=" text-[#1c3764] italic">
              Get your most recent I-94 form to prove your legal visitor status
              in the United States (Available going back to 1983 for most
              classes of admission, (or parole), and indefinitely for certain
              classes, such as diplomats and those admitted under the Compacts
              of Free Association.)
            </p>
          </div>
        </div>
        <div className="w-[300px] sm:w-[400px] mx-auto my-8 text-start">
          <p className=" font-semibold text-3xl">El Estatus de Caso en Linea</p>
          <div className=" border-2 rounded-md p-4 flex flex-col gap-4">
            {activate ? (
              <>
                <p className="font-bold text-xl">
                  Verifique el Estatus de su Caso
                </p>
                <p>
                  Utilice esta herramienta para administrar todas sus
                  solicitudes y peticiones.
                </p>
                <p className=" italic">
                  El número de recibo es un identificador único de 13 caracteres
                  que se compone de tres letras y 10 números. Omita los guiones
                  ("-") al ingresar un número de recibo. Sin embargo, puede
                  incluir todos los demas caraceres, incluidos los asterisco
                  ("*"), si aparecen en su notificacion como parte del numero de
                  recibo.{" "}
                  <strong>
                    {" "}
                    Cuando se ingresa un numero de recibo y la contraseña de
                    seguridad, el boton "Verifique Estatus" se habilitará y
                    podra verificar el estatus
                  </strong>
                </p>
                <p>Ingrese el Número de Su Recibo</p>

                <input
                  onChange={handleChange}
                  className="border-2 p-2 border-gray-500"
                  type="text"
                  placeholder="EAC1234567890"
                />

                <p>
                  Entre en el encasillado siguiente las letras provistas a
                  continuacion. No importa si escribe en mayúsculas o
                  minusculas. ¿No puede leer estas letras? Haga "click" en el
                  boton para "Actualizar la imagen" con diferentes letras
                </p>
                <div>
                  {" "}
                  <CaptchaComponent
                    aprovecaptcha={aprovecaptcha}
                    setAprovecaptcha={setAprovecaptcha}
                  />
                  <button
                    onClick={searchCaso}
                    disabled={!aprovecaptcha}
                    className={`${
                      aprovecaptcha ? "bg-blue-600" : "bg-gray-400"
                    } px-6 py-2 text-white mt-2 w-full`}
                  >
                    Verifique Estatus
                  </button>
                </div>
              </>
            ) : (
              <div className="flex flex-col gap-4">
                <p className="font-bold text-xl">Caso {caso?.estado}</p>
                <p>{caso?.parrafo}</p>
                <p>Provea otro número de recibo</p>
                <input
                  onChange={handleChange}
                  className="border-2 p-2 border-gray-500"
                  type="text"
                  placeholder="EAC1234567890"
                />
                <button
                  onClick={searchCaso}
                  disabled={!aprovecaptcha}
                  className={`${
                    aprovecaptcha ? "bg-blue-600" : "bg-gray-400"
                  } px-6 py-2 text-white mt-2 w-full`}
                >
                  {" "}
                  Verifique Estatus
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MostRecent;
