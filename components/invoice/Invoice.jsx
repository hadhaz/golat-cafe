import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import { useEffect, useRef, useState } from "react";
import { nanoid } from "@reduxjs/toolkit";

const data = {
  name: "Hadzami",
  phoneNumber: "+6281216233",
  seatsNo: [1, 2, 3],
  orderId: "B34k3rf",
  location: "KOMIPA",
  date: "11/12/2022 10:00:00",
  food: {
    total: "10.000",
    items: [
      { name: "Nasi Goreng", quantity: 10, price: 10000, total: "100.000" },
    ],
  },
};

export default function Invoice() {
  const pdfExportComponent = useRef(null);
  const container = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const savePDF = () => {
    if (pdfExportComponent.current) {
      pdfExportComponent.current.save();
    }
  };

  if (loaded)
    return (
      <div className='mx-auto max-w-7xl mt-24 flex flex-col'>
        <PDFExport
          paperSize='auto'
          margin={40}
          fileName={`Invoice for `}
          author='KendoReact Team'
          ref={pdfExportComponent}
        >
          <div ref={container} className='bg-white text-black py-10 px-10'>
            <h3 className='text-2xl font-semibold text-center'>
              Order Invoice
            </h3>
            <div className='flex mt-6 w-full gap-3'>
              <h4 className='border-2 py-1 px-2 basis-1/3 text-center'>
                Booking ID:
              </h4>
              <p className='border-2  py-1 px-2 basis-2/3'>{data.orderId}</p>
            </div>
            <div className='flex mt-3 w-full gap-3'>
              <h4 className='border-2  py-1 px-2 basis-1/3 text-center'>
                Customer Name:
              </h4>
              <p className='border-2  py-1 px-2 basis-2/3'>{data.name}</p>
            </div>
            <div className='flex mt-3 w-full gap-3'>
              <h4 className='border-2  py-1 px-2 basis-1/3 text-center'>
                Order Date:
              </h4>
              <p className='border-2  py-1 px-2 basis-2/3'>{data.date}</p>
            </div>
            <div className='flex mt-3 w-full gap-3'>
              <h4 className='border-2  py-1 px-2 basis-1/3 text-center'>
                Location:
              </h4>
              <p className='border-2  py-1 px-2 basis-2/3'>{data.location}</p>
            </div>
            <div className='flex mt-3 w-full gap-3'>
              <h4 className='border-2  py-1 px-2 basis-1/3 text-center'>
                Seats Number:
              </h4>
              <p className='border-2  py-1 px-2 basis-2/3'>
                {data.seatsNo.map((item, index) => {
                  if (index < data.seatsNo.length - 1) return item + ", ";
                  return item;
                })}
              </p>
            </div>
            <table className='w-full border mt-4 text-center'>
              <thead className='w-full bg-slate-100'>
                <tr>
                  <th className='font-medium border border-collapse'>
                    Food Name
                  </th>
                  <th className='font-medium border border-collapse'>
                    Quantity
                  </th>
                  <th className='font-medium border border-collapse'>
                    Price
                  </th>
                  <th className='font-medium border border-collapse'>
                    Total
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.food.items.map(item => (
                  <tr key={nanoid()}>
                    <td className='border border-collapse'>{item.name}</td>
                    <td className='border border-collapse'>
                      {item.quantity}
                    </td>
                    <td className='border border-collapse'>{item.price}</td>
                    <td className='border border-collapse'>{item.total}</td>
                  </tr>
                ))}
                <tr>
                  <td
                    colSpan='3'
                    className='border border-collapse font-medium'
                  >
                    Total Price:
                  </td>
                  <td className='border border-collapse'>
                    {data.food.total}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </PDFExport>
        <button
          onClick={savePDF}
          className='bg-mangoTango px-4 py-2 rounded-md font-medium mt-4 xl:w-64 lg:w-52 w-[70%] self-center hover:bg-deepOrange'
        >
          Save Invoice
        </button>
      </div>
    );
}
