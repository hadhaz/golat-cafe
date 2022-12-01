import { PDFExport } from "@progress/kendo-react-pdf";
import { useEffect, useRef, useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { selectedSavedReservation } from "../../context/reservation-slice";
import { useRouter } from "next/router";
import { selectedItems } from "../../context/memo-slice";
import { selectedFoods } from "../../context/cart-slice";

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
  payment: "Cash",
};

export default function Invoice() {
  const pdfExportComponent = useRef(null);
  const data = useSelector(selectedSavedReservation);
  const food = useSelector(selectedFoods);

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
      <div className='mb-16 mx-3 md:mx-auto rounded-md max-w-7xl mt-28 flex flex-col'>
        <PDFExport
          paperSize='auto'
          margin={40}
          fileName={`Invoice for ${data.name}`}
          author='Golat Cafe'
          ref={pdfExportComponent}
        >
          <div
            ref={container}
            className='bg-white mx-auto max-w-4xl rounded-md text-black py-10 px-10'
          >
            <h3 className='text-2xl font-semibold text-center'>
              Order Invoice
            </h3>
            <div className='flex mt-6 w-full gap-3'>
              <h4 className='border-2 py-1 px-2 basis-1/3 text-center'>
                Booking ID:
              </h4>
              <p className='border-2  py-1 px-2 basis-2/3'>{data.id}</p>
            </div>
            <div className='flex mt-3 w-full gap-3'>
              <h4 className='border-2  py-1 px-2 basis-1/3 text-center'>
                Phone Number:
              </h4>
              <p className='border-2  py-1 px-2 basis-2/3'>
                {data?.phone}
              </p>
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
                {data.seats?.map((item, index) => {
                  if (index < data.seats.length - 1) return item.no + ", ";
                  return item.no;
                })}
              </p>
            </div>
            <div className='flex mt-3 w-full gap-3'>
              <h4 className='border-2  py-1 px-2 basis-1/3 text-center'>
                Payment Method:
              </h4>
              <p className='border-2  py-1 px-2 basis-2/3'>{data.payment}</p>
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
                  <th className='py-1 font-medium border border-collapse'>
                    Price
                  </th>
                  <th className='font-medium border border-collapse'>Total</th>
                </tr>
              </thead>
              <tbody>
                {food?.items?.map(item => (
                  <tr key={nanoid()}>
                    <td className='border border-collapse'>{item.name}</td>
                    <td className='border border-collapse'>{item.quantity}</td>
                    <td className='py-1 border border-collapse'>
                      {item.price}
                    </td>
                    <td className='border border-collapse'>{item.quantity * item.price}</td>
                  </tr>
                ))}
                <tr>
                  <td
                    colSpan='3'
                    className='py-1 border border-collapse font-medium'
                  >
                    Total Price:
                  </td>
                  <td className='py-1 border font-medium border-collapse'>
                    {food.total}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </PDFExport>
        <button
          onClick={savePDF}
          className='bg-mangoTango px-4 py-2 rounded-md font-medium mt-6 xl:w-64 lg:w-52 w-[70%] self-center hover:bg-deepOrange'
        >
          Save Invoice
        </button>
      </div>
    );
}
