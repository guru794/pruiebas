import { useState, useContext } from "react";
import { UserContext } from "../utils/data";
function Formulario() {
  const { guardarEnInfoForm } = useContext(UserContext);
  const [formData, setFormData] = useState({
    Nombre: "",
    Nacionalidad: "",
    Estado: "",
    Telefono: "",
    Correo: "",
    tieneAbogado: "Sí",
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
      "Su solicitud ha sido enviada exitosamente. Un asesor se pondrá en contacto contigo"
    );
    setFormData({
      Nombre: "",
      Nacionalidad: "",
      Estado: "",
      Telefono: "",
      Correo: "",
      tieneAbogado: "Sí",
    });
  };

  return (
    <section className="container mx-auto md:pt-8 md:px-4 flex justify-center">
      <div className="bg-white px-4 pb-4 shadow-md rounded-lg w-full">
        <h2 className="text-lg font-bold text-center pb-3">Formulario Aplicar</h2>
        <form
          onSubmit={handleSubmit}
          className="text-sm md:grid-cols-2 md:gap-8"
        >
          <label className="block mb-2">
            Nombre:
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
            Estado:
            <input
              type="text"
              name="Estado"
              value={formData.Estado}
              onChange={handleChange}
              className="border p-1 w-full"
              required
            />
          </label>
          <label className="block mb-2">
            Numero:
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
          Tienes un abogado?
            <select
              name="tieneAbogado"
              value={formData.tieneAbogado}
              onChange={handleChange}
              className="border p-1 w-full"
            >
              <option value="Sí">si</option>
              <option value="No">No</option>
            </select>
          </label>
          <div className="col-span-2 flex flex-col items-center justify-center">
            {" "}
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
