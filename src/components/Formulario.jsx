import { useState, useContext } from "react";
import { UserContext } from "../utils/data";

function Formulario() {
  const { guardarEnInfoForm } = useContext(UserContext);
  const [formData, setFormData] = useState({
    Nombre: "",
    Identificacion: "",
    Residencia: "",
    Nacionalidad: "",
    EstadoCivil: "",
    Ocupacion: "",
    Telefono: "",
    Correo: "",
    tieneAbogado: "Sí",
    NombreAbogado: "",
    ResidenciaAbogado: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "tieneAbogado" && value === "No") {
      alert(
        "USCIS le asignará uno para que lo represente en su proceso de legalización."
      );
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await guardarEnInfoForm(formData);
    alert(
      "Su solicitud ha sido enviada exitosamente. Un asesor se pondrá en contacto contigo."
    );
    setFormData({
      Nombre: "",
      Identificacion: "",
      Residencia: "",
      Nacionalidad: "",
      EstadoCivil: "",
      Ocupacion: "",
      Telefono: "",
      Correo: "",
      tieneAbogado: "Sí",
      NombreAbogado: "",
      ResidenciaAbogado: "",
    });
  };

  return (
    <section className="container mx-auto md:pt-8 md:px-4 flex justify-center">
      <div className="bg-white px-4 pb-4 shadow-md rounded-lg w-full">
        <h2 className="text-lg font-bold text-center pb-3">
          Formulario Aplicar
        </h2>
        <form
          onSubmit={handleSubmit}
          className="text-sm grid grid-cols-1 lg:grid-cols-2 md:gap-8"
        >
          <label className="block mb-2">
            Nombre y Apellido:
            <input
              type="text"
              name="Nombre"
              value={formData.Nombre}
              onChange={handleChange}
              className="border p-1 w-full"
              required
            />
          </label>
          <label className="block mb-2">
            Nacionalidad:
            <input
              type="text"
              name="Nacionalidad"
              value={formData.Nacionalidad}
              onChange={handleChange}
              className="border p-1 w-full"
              required
            />
          </label>
          <label className="block mb-2">
            Estado Civil:
            <select
              name="EstadoCivil"
              value={formData.EstadoCivil}
              onChange={handleChange}
              className="border p-1 w-full"
              required
            >
              <option value="">Seleccione</option>
              <option value="Soltero">Soltero</option>
              <option value="Casado">Casado</option>
              <option value="Divorciado">Divorciado</option>
              <option value="Viudo">Viudo</option>
            </select>
          </label>
          <label className="block mb-2">
            Ocupación:
            <input
              type="text"
              name="Ocupacion"
              value={formData.Ocupacion}
              onChange={handleChange}
              className="border p-1 w-full"
              required
            />
          </label>
          <label className="block mb-2">
            Numero de identificación:
            <input
              type="text"
              name="Identificacion"
              value={formData.Identificacion}
              onChange={handleChange}
              className="border p-1 w-full"
              required
            />
          </label>
          <label className="block mb-2">
            Residencia:
            <input
              type="text"
              name="Residencia"
              value={formData.Residencia}
              onChange={handleChange}
              className="border p-1 w-full"
              required
            />
          </label>
          <label className="block mb-2">
            Número de Teléfono:
            <input
              type="text"
              name="Telefono"
              value={formData.Telefono}
              onChange={handleChange}
              className="border p-1 w-full"
              required
            />
          </label>
          <label className="block mb-2">
            Email:
            <input
              type="email"
              name="Correo"
              value={formData.Correo}
              onChange={handleChange}
              className="border p-1 w-full"
              required
            />
          </label>
          <label className="block mb-3">
            ¿Tienes un abogado?
            <select
              name="tieneAbogado"
              value={formData.tieneAbogado}
              onChange={handleChange}
              className="border p-1 w-full"
            >
              <option value="Sí">Sí</option>
              <option value="No">No</option>
            </select>
          </label>

          {formData.tieneAbogado === "Sí" && (
            <>
              <label className="block mb-2">
                Nombre del abogado:
                <input
                  type="text"
                  name="NombreAbogado"
                  value={formData.NombreAbogado}
                  onChange={handleChange}
                  className="border p-1 w-full"
                  required
                />
              </label>
              <label className="block mb-2">
                Residencia del abogado:
                <input
                  type="text"
                  name="ResidenciaAbogado"
                  value={formData.ResidenciaAbogado}
                  onChange={handleChange}
                  className="border p-1 w-full"
                  required
                />
              </label>
            </>
          )}

          <div className="col-span-2 flex flex-col items-center justify-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-3 py-1 rounded w-full md:py-4 md:w-80"
            >
              Enviar
            </button>
            <p className="text-xs text-gray-500 mt-2 text-center">
              Evite deportaciones o irregularidades en su estatus migratorio.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Formulario;
