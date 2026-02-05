"use client";

import React from "react";

const Legislacao = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center py-20 text-blue-900">
        <iframe
          title="Relatório Power BI"
          width="100%"
          height="600"
          src="https://app.powerbi.com/view?r=eyJrIjoiMjY2OWJkMDctMjk3Ni00ZWRmLTg3OWMtZjdiMDViZjE5NzNlIiwidCI6ImZhNDk3ZWUxLWU2MTMtNGMxMC04NWVmLWE5NjYxOGNlZDI1NCJ9"
        ></iframe>
      </div>
    </div>
  );
};

export default Legislacao;
