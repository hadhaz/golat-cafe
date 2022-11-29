import Summary from "../components/reservation/Summary";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { clearSaved, selectedSavedReservation } from "../context/reservation-slice";
import { useEffect } from "react";

const SummaryPage = () => {
  const router = useRouter();
  const dispatch = useDispatch()
  const { id: orderId } = useSelector(selectedSavedReservation);

  const clickHandler = () => {
    dispatch(clearSaved())
    router.push("/");
  };

  useEffect(() => {
    if (!orderId) {
      router.push("/");
    }
  }, [orderId, router]);

  if (orderId)
    return (
      <>
        <div
          onClick={clickHandler}
          className='w-screen h-screen z-10 fixed bg-whiteOverlay flex justify-center items-center top-0'
        ></div>
        <Summary />
      </>
    );

  return <></>;
};

export default SummaryPage;
