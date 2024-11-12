import React, { createContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);
  const [caso, setCaso] = useState(null);
  const [error, setError] = useState("");

  const buscarUsuarioPorDNI = async (codigo) => {
    try {
      const response = await fetch(`https://sheetdb.io/api/v1/90k0z4wli45ei`);
      const data = await response.json();

      if (data.length > 0) {
        const user = data.filter((item) => item.codigo === codigo);

        if (user.length > 0) {
          const grupoData = data.filter((item) => item.grupo === user[0].grupo);
          setUsuario(grupoData);
          setError("");
        } else {
          setUsuario(null);
          setError("No se encontró informacion.");
        }
      } else {
        setUsuario(null);
        setError("No se encontró informacion.");
      }
    } catch (error) {
      console.error("Error fetching user:", error);
      setError("Ocurrió un error al buscar el usuario.");
    }
  };

  const buscarCasoPorNumero = async (numeroCaso) => {
    try {
      const response = await fetch(
        `https://sheetdb.io/api/v1/90k0z4wli45ei/search?sheet=Caso&numeroCaso=${numeroCaso}`
      );
      const data = await response.json();
      console.log(data);
      if (data.length > 0) {
        setCaso(data[0]); 
        return true;
      } else {
        setCaso(null);
        alert("Codigo de caso incorrecto.");
        return false; 
      }
    } catch (error) {
      console.error("Error fetching case:", error);
      return false; 
    }
  };

  return (
    <UserContext.Provider
      value={{ usuario, buscarUsuarioPorDNI, buscarCasoPorNumero, caso, error, setError }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
