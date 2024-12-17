import React from 'react';

const DescargarApp = () => {
  return (
    <div>
      <p>Descarga nuestra App</p>
      <a
        href="/app.apk" // Ruta a la APK en el servidor Netlify
        download="app.apk"
      >
        Haz clic aquí para descargar la APK
      </a>
    </div>
  );
};

export default DescargarApp;
