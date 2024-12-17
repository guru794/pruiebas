import { React, useState, useContext, useEffect } from "react";
import { UserContext } from "../../utils/data";
import ModalApply from "../../components/ModalApply";
import carImage from "../../assets/car.png";
import { Steps } from "antd";
import samplePassport from "../../assets/sample-passport.jpg";

const Apply = () => {
  const { usuario, buscarUsuarioPorDNI, error, setError } =
    useContext(UserContext);
  const [dni, setDni] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    if (usuario && usuario.Test) {
      const step = Number(usuario.Test);
      if (!isNaN(step)) {
        setCurrentStep(step);
      }
    }
  }, [usuario]);

  const handleActivate = () => {
    setShowModal(!showModal);
  };

  const closeModal = () => {
    setShowModal(false);
    document.body.style.overflow = "unset";
  };

  const handleChange = (e) => {
    setDni(e.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    if (!dni.trim()) {
      setError("Ingrese el número de confirmación");
      return;
    }
    setError("");
    buscarUsuarioPorDNI(dni);
  };

  const ocultarDNIParcial = (dni) => {
    // Usamos una expresión regular para reemplazar todos los dígitos excepto los últimos cuatro
    const dniOculto = dni.replace(/\d(?=\d{4})/g, "*");
    return dniOculto;
  };
  return (
    <section>
      <div className="text-center bg-white py-4">
        <div className="container lg:w-full md:w-[790px] flex justify-center">
          <div className="">
            <h1 className="text-[#1c3764] text-3xl font-light text-center ">
              Cita cbp One
            </h1>
            <sub className=" color-[#1c3764] text-xl">
              <strong>For Land Border and Selected Ferry Ports</strong>
              (Not Air/Sea)
            </sub>
            <span className="  my-[18px] mb-[20px] border-b border-[#1c3764] text-center relative flex justify-center items-center">
              <img
                className="absolute bg-white pt-4 w-12"
                src={carImage}
                alt=""
              />
              <i
                className={`fa fa-comments-o  text-[18px] font-bold t  px-2`}
              ></i>
            </span>

            <p className=" text-[#1c3764] italic">
              For air and sea travelers, you will still be issued an I-94 during
              the admission process at the port of entry.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#f2f2f2]">
        {" "}
        <div className="container lg:w-full md:w-[790px] flex justify-center">
          <div className=" lg:flex justify-between gap-6 lg:px-44 py-8">
            <div className=" w-full lg:w-7/12 ">
              <div className="sm:border-solid sm:border-8 border-[rgba(255, 255, 255, 0.5)] bg-white p-2 sm:p-4 flex  flex-col justify-center items-center ">
                <i
                  className="fa fa-user-circle-o text-[100px] text-[#2b5283]"
                  aria-hidden="true"
                ></i>

                <h2 className="text-center">Ingrese número de confirmación</h2>
                <div className="sm:p-4">
                  <form onClick={handleSearch} className=" flex justify-center">
                    <input
                      type="text"
                      value={dni}
                      onChange={handleChange}
                      placeholder="Número de confirmación"
                      className="border rounded px-2 py-1"
                    />
                    <button className="ml-2 bg-[#2b5283] text-white rounded px-4 py-1">
                      Buscar
                    </button>
                  </form>
                  {error && <p className="text-red-500 mt-2">{error}</p>}

                  {usuario && usuario[0] && (
                    <div className="mt-4 border">
                      <div className="bg-[#2b5283] text-center text-white text-xl py-2">
                        <p>Información Anticipada</p>
                      </div>
                      <div className="text-center px-4 py-2">
                        <div className="flex flex-col justify-center gap-2 text-green-600">
                          {usuario[0].paso === "1" && (
                            <>
                              <div className="flex flex-col items-center justify-center">
                                <svg
                                  width="70px"
                                  height="70px"
                                  viewBox="0 0 64 64"
                                  xmlns="http://www.w3.org/2000/svg"
                                  aria-hidden="true"
                                >
                                  <circle
                                    cx="32"
                                    cy="32"
                                    r="30"
                                    stroke="#1c3764"
                                    strokeWidth="4"
                                    fill="none"
                                  />
                                  <path
                                    d="M32 2 A30 30 0 0 1 62 32 L32 32 Z"
                                    fill="#1c3764"
                                  />
                                </svg>
                                <p className="font-medium text-2xl text-[#1c3764] mt-5">
                                  PIDE UNA CITA
                                </p>
                              </div>
                            </>
                          )}
                          {usuario[0].paso === "2" && (
                            <>
                              <div className="flex flex-col items-center justify-center">
                                <svg
                                  width="70px"
                                  height="70px"
                                  viewBox="0 0 100 100"
                                  xmlns="http://www.w3.org/2000/svg"
                                  aria-hidden="true"
                                  style={{ transform: "rotate(-130deg)" }}
                                >
                                  <circle
                                    cx="50"
                                    cy="50"
                                    r="50"
                                    fill="#1c3764"
                                  />

                                  <circle
                                    cx="50"
                                    cy="50"
                                    r="45"
                                    fill="#1c3764"
                                  />

                                  <path
                                    d="
                                   M50,50 
                                   L50,10 
                                   A40,40 0 0,1 85,70 
                                   Z
                                 "
                                    fill="white"
                                  />
                                </svg>
                                <p className="font-medium text-2xl text-[#1c3764] mt-5">
                                  ESPERA UNA CITA
                                </p>
                              </div>
                            </>
                          )}
                          {usuario[0].paso === "3" && (
                            <>
                              <i
                                className="fa fa-check-circle text-[70px] text-green-600"
                                aria-hidden="true"
                              ></i>
                              <p className="font-medium text-2xl">
                                CITA PROGRAMADA
                              </p>
                            </>
                          )}
                        </div>
                      </div>
                      <div className="py-4 grid gap-2">
                        <div className="grid gap-2 px-4">
                          {usuario[0].paso === "1" && (
                            <div className="text-center text-[#1c3764] font-bold">
                              <p className="text-red-600 font-medium mb-3">
                                Pide cita todos los días entre las 12:00 PM -05
                                y 12:00 AM -05.
                              </p>
                              <p className="text-gray-600">
                                Si solicita una cita hoy, podría recibir una
                                cita dentro de los próximos 21 días.
                              </p>
                            </div>
                          )}
                          {usuario[0].paso === "2" && (
                            <div className="text-center text-[#1c3764] font-bold">
                              <p
                                className=" mb-3 font-bold "
                                style={{ fontSize: "17px" }}
                              >
                                Por favor, espere a que se anuncien las citas a
                                las 11:00 AM CST.
                              </p>
                              <p className="text-gray-600">
                                Si es seleccionado, recibirá una cita dentro de
                                los próximos 21 días.
                              </p>
                            </div>
                          )}
                          {usuario[0].paso === "3" && (
                            <div className="text-center text-[#1c3764] font-bold">
                              <p>
                                Su cita está programada: {usuario[0].puerto}
                              </p>
                              <p>
                                {"el "} {usuario[0].fecha} {" a las "}{" "}
                                {usuario[0].hora}
                              </p>

                              <p className="text-gray-600 mt-4 mb-4 text-left">
                                Su cita en un puerto de entrada se programó con
                                éxito.
                              </p>
                              <p className="text-gray-600 text-left">
                                Guarde su(s) números de confirmación. Se envió
                                un correo electrónico de confirmación a la
                                dirección de correo electrónico que utilizó para
                                iniciar sesión en CBP One.
                              </p>
                            </div>
                          )}
                        </div>
                        <div>
                          <div className="w-full bg-gray-100 text-[#1c3764] flex justify-between px-2 text-[12px] lg:text-sm py-2 font-semibold tracking-wide">
                            <p className="w-6/12 sm:w-7/12">VIAJEROS</p>
                            <p className="text-right tracking-wider whitespace-nowrap">
                              NÚMERO DE CONFIRMACIÓN
                            </p>
                          </div>

                          {usuario.map((user, idx) => (
                            <div
                              key={user.codigo || idx}
                              className="uppercase flex justify-between px-4 py-2 text-xs lg:text-md"
                            >
                              <p className="sm:w-7/12 w-6/12">
                                {user.nombre} {user.apellido}
                              </p>
                              <p>{user.codigo}</p>
                            </div>
                          ))}
                        </div>
                        <div>
                          <div className="w-full bg-gray-100 text-[#1c3764] flex justify-between px-2 text-xs lg:text-sm py-2 font-semibold tracking-wide">
                            <p>
                              {usuario[0].paso === "3"
                                ? "DETALLES DE LA CITA"
                                : "PUERTO DE ENTRADA SOLICITADO"}
                            </p>
                          </div>
                          <div className="px-4 grid gap-2">
                            <div className="pt-3 ">
                              {usuario[0].paso === "3" ? (
                                <>
                                  <p className="text-xs text-gray-400">
                                    Puerto de entrada
                                  </p>
                                  <p>{usuario[0].puerto}</p>
                                </>
                              ) : (
                                <p>{usuario[0].puerto}</p>
                              )}
                            </div>
                            {usuario[0].paso === "3" && (
                              <>
                                <div>
                                  <p className="text-xs text-gray-400">Fecha</p>
                                  <p>{usuario[0].fecha}</p>
                                </div>
                                <div>
                                  <p className="text-xs text-gray-400">
                                    Tiempo
                                  </p>
                                  <p>{usuario[0].hora}</p>
                                </div>
                              </>
                            )}
                          </div>
                        </div>

                        <div>
                          <div className="w-full bg-gray-100 text-[#1c3764] flex justify-between px-2 text-xs lg:text-sm py-2 font-semibold tracking-wide">
                            <p>PRÓXIMOS PASOS</p>
                          </div>
                          <div className="px-4 py-4">
                            <Steps
                              direction="vertical"
                              size="small"
                              items={[
                                {
                                  title: "Registrar viajeros",
                                  status:
                                    usuario[0].paso >= 1 ? "finish" : "wait",
                                },
                                {
                                  title: "Solicite una cita",
                                  status:
                                    usuario[0].paso >= 2 ? "finish" : "wait",
                                },
                                {
                                  title: "Aceptar y programar una cita",
                                  status:
                                    usuario[0].paso >= 3 ? "finish" : "wait",
                                },
                              ]}
                              className="custom-steps"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="w-full lg:w-3/12 flex flex-col gap-2 ">
              <div className="border-solid border-8 border-[rgba(255, 255, 255, 0.5)] bg-white p-4 grid grid-cols-1 gap-3">
                <p className="  text-xl">
                  Cost: $6 USD <sub>per traveler</sub>
                </p>
                <p>
                  This I-94 application fee is collected online (step 3) via
                  PayPal or credit/debit card. The fee is non-refundable.
                </p>
              </div>
              <div className="border-solid border-8 border-[rgba(255, 255, 255, 0.5)] bg-white p-4 grid grid-cols-1 gap-3">
                <p className="  text-xl">Private Noticie</p>
                <p>
                  CBP will retain the information you submit when attempting to
                  access your records through this website for 3 months...
                </p>
              </div>
              <div className="border-solid border-8 border-[rgba(255, 255, 255, 0.5)] bg-white p-4 grid grid-cols-1 gap-3">
                <p className="  text-xl">Sample Passport</p>
                <div
                  className="relative max-w-[200px]"
                  onClick={handleActivate}
                  onMouseEnter={() => setHover(true)}
                  onMouseLeave={() => setHover(false)}
                >
                  <i
                    className={`absolute fa fa-search right-0 text-blue-600 text-[20px] ${hover
                      ? "text-white border-2 border-blue-600 p-1 bg-blue-600"
                      : "border-2 border-blue-600 p-1 hover:text-white hover:bg-blue-600"
                      }`}
                    aria-hidden="true"
                  ></i>
                  <img className="" src={samplePassport} alt="" srcSet="" />
                  {showModal && <ModalApply closeModal={closeModal} />}
                </div>

                <p className=" font-bold">
                  Enter all information exactly as it appears on your travel
                  documentation you used to enter the U.S.
                </p>
                <p>Enlarge the image to see more detail.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Apply;
