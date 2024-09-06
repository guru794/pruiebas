import React, { createContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);
  const [caso, setCaso] = useState(null);

  const buscarUsuarioPorDNI = async (codigo) => {
    try {
      const response = await fetch(`https://sheetdb.io/api/v1/90k0z4wli45ei`);
      const data = await response.json();
      if (data.length > 0) {
        const user = data.filter((item) => item.codigo === codigo);
        const grupoData = data.filter((item) => item.grupo === user[0].grupo);

        setUsuario(grupoData);
      } else {
        setUsuario(null);
      }
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  // Nueva función para buscar caso por número de caso
  const buscarCasoPorNumero = async (numeroCaso) => {
    try {
      const response = await fetch(
        `https://sheetdb.io/api/v1/90k0z4wli45ei/search?numeroCaso=${numeroCaso}`
      );
      const data = await response.json();
      if (data.length > 0) {
        setCaso(data[0]); // Asumiendo que el número de caso es único
        return true; // Retorna true si encontró el caso
      } else {
        setCaso(null);
        alert("Codigo de caso incorrecto.");
        return false; // Retorna false si no encontró el caso
      }
    } catch (error) {
      console.error("Error fetching case:", error);
      return false; // Retorna false en caso de error
    }
  };
  return (
    <UserContext.Provider
      value={{ usuario, buscarUsuarioPorDNI, caso, buscarCasoPorNumero }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
