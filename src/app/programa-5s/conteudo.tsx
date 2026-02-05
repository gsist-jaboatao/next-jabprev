"use client";

const files = [
  {
    type: "pdf",
    local: "/Pdf/administrativo/programa-5s/Programa-5S.pdf",
    title: "Programa 5S - PDF",
    pptxUrl: "/pptx/Programa-5S.pptx", // URL do arquivo PPTX
  },
];

const Programa5S = () => {
  return (
    <div className="flex flex-col items-center h-auto space-y-10">
      {files.map((file, index) => (
        <div key={index} className="mx-auto max-w-6xl bg-white rounded-lg p-5">
          <h2 className="text-2xl text-slate-500 text-center pb-5">
            O documento publicado está em formato PDF. Caso não consiga abrir o
            arquivo,{" "}
            <a
              href={file.local}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              clique aqui para fazer o download do arquivo em PDF.
            </a>
          </h2>

          <div className="flex items-center justify-center w-full max-w-6xl mx-auto h-[600px] border rounded-lg shadow-lg bg-gray-100">
            <iframe
              src={file.local}
              width="100%"
              height="100%"
              className="rounded-md"
              title={`PDF ${index + 1}`}
            ></iframe>
          </div>

          <div className="flex justify-center pt-5">
            <a
              href={file.pptxUrl}
              download
              className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition duration-300"
            >
              Download do PPTX
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

const Programa5SPage = () => {
  return (
    <div className="flex flex-col py-14">
      <Programa5S />
    </div>
  );
};

export default Programa5SPage;
