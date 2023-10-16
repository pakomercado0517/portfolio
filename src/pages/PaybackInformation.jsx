import { useState, useEffect } from "react";
import PaybackForm from "../components/PaybackForm";
import PaybackTable from "../components/PaybackTable";
import useCreatePDF from "../hooks/useCreatePDF";
import useFormatNumber from "../hooks/useFormatNumber";

function PaybackInformation() {
  const [showTable, setShowTable] = useState(false);
  const [getTotal, setGetTotal] = useState([]);
  const [data, setData] = useState({});
  const createDocument = useCreatePDF();
  const formatNumber = useFormatNumber();

  useEffect(() => {
    if (data.length !== 0) {
      const montoAntesIVA = data.total / 1.16;
      const getComision = (montoAntesIVA * data.percentage) / 100;
      const costTotal = data.total - getComision;

      setGetTotal({
        empresa: data.name,
        monto: formatNumber.format(data.total),
        comision: formatNumber.format(getComision),
        total: formatNumber.format(costTotal),
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleCurrencyInput = (value) => {
    setData({
      ...data,
      total: value === undefined ? "" : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    createDocument(getTotal, false);
  };

  const handleShowTable = () => setShowTable(!showTable);

  return (
    <section className="container mx-auto">
      <h1 className="text-3xl my-10 text-center underline">
        Obtener monto a devolver
      </h1>
      <article>
        <PaybackForm
          handleChange={handleChange}
          data={data}
          handleSubmit={handleSubmit}
          handleShowTable={handleShowTable}
          handleCurrencyInput={handleCurrencyInput}
        />
      </article>
      <article className={`${!showTable ? "hidden" : ""} mt-10`}>
        <PaybackTable data={getTotal} />
      </article>
    </section>
  );
}

export default PaybackInformation;
