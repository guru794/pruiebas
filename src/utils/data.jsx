import React, { createContext, useState } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);

  const buscarUsuarioPorDNI = async (codigo) => {
    try {
      const response = await fetch(`https://sheetdb.io/api/v1/90k0z4wli45ei`);
      const data = await response.json();
      if (data.length > 0) {
        console.log(data);
        const user = data.filter(item => item.codigo === codigo);
        const grupoData = data.filter(item => item.grupo === user[0].grupo);

        setUsuario(grupoData);
      } else {
        setUsuario(null);
      }
    } catch (error) {
      console.error('Error fetching user:', error);
    }
  };

  return (
    <UserContext.Provider value={{ usuario, buscarUsuarioPorDNI }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
