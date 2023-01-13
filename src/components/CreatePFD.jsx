import React, { useState } from "react";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";

function CreatePFD({ costo }) {
  const doc = new jsPDF();

  const formatTotal = (num) => {
    let result;
    result = num.toString().split(".");
    result[0] = result[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return result.join(".");
  };
  const formatSubtotal = (num) => {
    let result;
    result = num.toFixed(2);
    result = result.toString().split(".");
    result[0] = result[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return result.join(".");
  };

  const createDoc = (e) => {
    e.preventDefault();
    console.log("Creando documento...");
    autoTable(doc, {
      head: [["RFC", "Subtotal", "Total"]],
      body: costo.map((el) => {
        return [el.rfc, formatSubtotal(el.total / 1.16), formatTotal(el.total)];
      }),
    });
    doc.save("resultado.pdf");
  };

  return (
    <div className="my-8">
      <button
        className="h-8 w-48 bg-red-500 rounded-md font-medium text-white flex justify-center items-center"
        onClick={createDoc}
      >
        <i className="material-icons mx-2">picture_as_pdf</i>
        Exportar a PDF
      </button>
    </div>
  );
}

export default CreatePFD;
