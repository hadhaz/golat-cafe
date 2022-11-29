import { useDispatch, useSelector } from "react-redux";
import { selectedLocation } from "../../context/reservation-slice";
import map from "../../utils/map";
import { generate } from "../../utils/seatGenerator";
import { initialize } from "../../context/reservation-slice";

export default function TimeOption() {
  const location = useSelector(selectedLocation);
  const dispatch = useDispatch();
  const timeHandler = () => {
    const req =
      location === "GMC"
        ? map.gmc
        : location === "SARDJITO"
        ? map.sardjito
        : map.komipa;

    const data = generate(req);

    dispatch(initialize({ seats: data, location }));
  };

  return (
    <select
      onChange={timeHandler}
      defaultValue='9'
      name='time'
      id='time'
      className='bg-mango outline-none text-black mt-2 px-3 font-medium rounded-md w-fit py-1'
    >
      <option value='9'>09.00 - 10.00</option>
      <option value='10'>10.00 - 11.00</option>
      <option value='11'>11.00 - 12.00</option>
      <option value='12'>12.00 - 13.00</option>
      <option value='13'>13.00 - 14.00</option>
      <option value='14'>14.00 - 15.00</option>
    </select>
  );
}
