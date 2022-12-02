import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { clearSaved, updateLocation } from "../../context/reservation-slice";

export default function LocationOption() {
  const dispatch = useDispatch();
  const locationRef = useRef();

  const locHandler = e => {
    dispatch(clearSaved());
    dispatch(updateLocation(e.target.value));
  };

  useEffect(() => {
    dispatch(updateLocation(locationRef.current.value));
  }, []);

  return (
    <select
      onChange={locHandler}
      defaultValue='KOMIPA'
      ref={locationRef}
      name='outlet'
      id='outlet'
      className='bg-mangoTango outline-none px-3 font-medium rounded-md w-fit py-1'
    >
      <option value='GMC'>Foodcourt GMC</option>
      <option value='KOMIPA'>Komipa UGM</option>
      <option value='SARDJITO'>Sardjito Food Corner</option>
    </select>
  );
}
