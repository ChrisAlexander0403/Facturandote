import React, { useEffect } from "react";

function Factura() {

  useEffect(() => {
    window.location.href = "http://facturandote.com/timfac/view/loguin/liguin.php";
  }, []);

  return (
    <div>
      <h2>Factura</h2>
    </div>
  );
}

export default Factura;