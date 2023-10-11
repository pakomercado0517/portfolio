import { useState, useEffect } from "react";
import useCreatePDF from "../hooks/useCreatePDF";
import useFormatNumber from "../hooks/useFormatNumber";
import PaybackTable from "../components/PaybackTable";
import { Button } from "flowbite-react";

function PaybackInformation() {
  const createDocument = useCreatePDF();
  const formatNumber = useFormatNumber();
  const [data, setData] = useState({});
  const [formattedNumber, setFormattedNumber] = useState("");
  const [showTable, setShowTable] = useState(false);
  const [getTotal, setGetTotal] = useState([]);

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
      <form className="mt-5">
        <div className="relative z-0 w-full mb-6 group">
          <input
            onChange={handleChange}
            type="text"
            name="name"
            id="name"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required=""
          />
          <label
            htmlFor="name"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Nombre de la empresa
          </label>
        </div>

        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <input
              onChange={handleChange}
              type="number"
              name="percentage"
              id="percentage"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required=""
              defaultValue={data.percentage}
            />
            <label
              htmlFor="percentage"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Porcentaje
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              onChange={handleChange}
              type="text"
              name="total"
              id="total"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required=""
            />
            <label
              htmlFor="total"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Monto
            </label>
          </div>
        </div>
        <div className="flex justify-center gap-4">
          <button
            type="submit"
            onClick={handleSubmit}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Crear PDF
          </button>
          <Button onClick={handleShowTable}>Mostrar Resultados</Button>
        </div>
      </form>
      <article className={`${!showTable ? "hidden" : ""} mt-10`}>
        <PaybackTable data={getTotal} />
      </article>
    </section>
  );
}

export default PaybackInformation;
