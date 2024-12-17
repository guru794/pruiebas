import React from 'react';

const DescargarApp = () => {
  // Función que maneja la descarga de la APK
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/app.apk'; // Ruta a la APK en el servidor Netlify
    link.download = 'CBP_One.apk'; // Nombre del archivo a descargar
    link.click(); // Simula el clic para descargar el archivo
  };

  return (
    <div className='text-center pt-2 font-bold'>
      <p className="text-[#1c3764] ">Descarga nuestra App</p>

      {/* Botón para iniciar la descarga */}
      <button
        onClick={handleDownload} // Al hacer clic en el botón, se ejecuta la función handleDownload
        className="ml-2 bg-[#2b5283] text-white rounded px-4 py-2"
      >
        Descargar la APP CBP One
      </button>
    </div>
  );
};

export default DescargarApp;
