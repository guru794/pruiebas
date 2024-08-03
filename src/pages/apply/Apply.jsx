import { React, useState, useContext } from "react";
import { UserContext } from "../../utils/data";
import ModalApply from "../../components/ModalApply";
import carImage from "../../assets/car.png";  
import samplePassport from "../../assets/sample-passport.jpg";
const Apply = () => {
  const { usuario, buscarUsuarioPorDNI } = useContext(UserContext);
  const [dni, setDni] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [hover, setHover] = useState(false);

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
              <div className="border-solid border-8 border-[rgba(255, 255, 255, 0.5)] bg-white p-4 flex  flex-col justify-center items-center ">
                <i
                  class="fa fa-user-circle-o text-[100px] text-[#2b5283]"
                  aria-hidden="true"
                ></i>

                <h2 className="text-center">Ingrese número de confirmación</h2>
                <div className="p-4">
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

                  {usuario && (
                    <div className="mt-4 border">
                      <div className="bg-[#2b5283] text-center text-white text-xl py-2">
                        <p>Información Anticipada</p>
                      </div>
                      <div className="text-center px-4 py-2">
                        <div className="flex flex-col justify-center gap-2 text-green-600">
                          <i
                            class="fa fa-check-circle text-[70px] "
                            aria-hidden="true"
                          ></i>
                          <p className="  font-medium text-2xl">
                            CITA PROGRAMADA
                          </p>
                        </div>
                      </div>
                      <div className=" py-4 grid gap-2 ">
                        <div className="grid gap-2 px-4">
                          {" "}
                          <div className="text-center text-[#1c3764] font-bold">
                            <p>
                              {"Su cita está programada: "} {usuario[0].puerto}
                            </p>
                            <p>
                              {"el "} {usuario[0].fecha} {" a las "} {usuario[0].hora}
                            </p>
                          </div>
                          <p>
                            {
                              "Su cita en un puerto de entrada se programó con éxito"
                            }
                          </p>
                          <p>
                            {
                              "Guarde su(s) números de confirmación. Se envió un correo electrónico de confirmación a la dirección de correo electrónico que utilizó para iniciar sesión en CBP One "
                            }
                          </p>
                        </div>
                        <div>
                          <div className="w-full bg-gray-100 text-[#1c3764] flex justify-between px-2 text-xs lg:text-sm py-2">
                            <p className="w-7/12 ">VIAJEROS</p>
                            <p className=" flex- text-right">NÚMERO DE CONFIRMACIÓN</p>
                          </div>
                          {
                            usuario?.map((user,idx) => (
                              <div  className=" uppercase flex justify-between px-4 py-2 text-xs lg:text-md">
                              <p className="w-7/12">
                                {user.nombre} {user.apellido}
                              </p>
                              <p>{user.codigo}</p>
                            </div>
                            ))
                          }
                        </div>
                        <div>
                          <div className="w-full bg-gray-100 text-[#1c3764] flex justify-between px-2 text-xs lg:text-sm py-2">
                            <p>DETALLES DE LA CITA</p>
                         
                          </div>
                          <div className="px-4 grid gap-2">
                            <div>
                              {" "}
                              <p className="text-xs text-gray-400">
                                Puerto de entrada
                              </p>
                              <p>{usuario[0].puerto}</p>
                            </div>
                            <div>
                              <p className="text-xs text-gray-400">Fecha</p>
                              <p>{usuario[0].fecha}</p>
                            </div>
                            <div>
                              <p className="text-xs text-gray-400">Tiempo</p>
                              <p>{usuario[0].hora}</p>
                            </div>
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
                    className={`absolute fa fa-search right-0 text-blue-600 text-[20px] ${
                      hover
                        ? "text-white border-2 border-blue-600 p-1 bg-blue-600"
                        : "border-2 border-blue-600 p-1 hover:text-white hover:bg-blue-600"
                    }`}
                    aria-hidden="true"
                  ></i>
                  <img
                    className=""
                    src={samplePassport}
                    alt=""
                    srcSet=""
                  />
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
