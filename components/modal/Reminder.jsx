import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  popup,
  remind,
  selectedIsPopupClosed,
  selectedPopup,
  selectedReminder,
} from "../../context/reminder-slice";

export default function Reminder() {
  const dispatch = useDispatch();
  const isReminder = useSelector(selectedReminder);
  const isPopup = useSelector(selectedPopup);
  const router = useRouter();
  const isPopupClosed = useSelector(selectedIsPopupClosed);

  const reminderHandler = () => {
    dispatch(popup(false));
    dispatch(remind(true));
  };

  const closeHandler = () => {
    dispatch(popup(false));
  };

  const directHandler = () => {
    dispatch(popup(false));
    router.push("/reserve");
  };
  useEffect(() => {
    if (isReminder) {
      setTimeout(() => {
        dispatch(popup(true));
      }, 100000);
      dispatch(remind(false));
    }

    return () =>
      clearTimeout(
        setTimeout(() => {
          dispatch(popup(true));
        }, 100000)
      );
  }, [isReminder, dispatch]);

  if (isPopup && !isPopupClosed)
    return (
      <div className='w-screen h-screen z-50 bg-whiteOverlay flex justify-center items-center fixed'>
        <div className='bg-dairyCream shadow-lg shadow-black text-black w-fit py-10 flex flex-col items-center justify-center'>
          <h1 className='font-semibold text-lg xl:text-2xl lg:text-xl'>
            Don&apos;t you want to reserve a seat first?
          </h1>
          <p className='max-w-[75%] text-center my-2'>
            this prevents you from running out of seats even if you have ordered
            food
          </p>
          <div className='flex my-4 gap-6 border-2 w-full font-medium justify-center'>
            <button
              onClick={directHandler}
              className='w-1/3 py-2 bg-mangoTango hover:bg-deepOrange text-center text-white border-[3px] border-transparent duration-300'
            >
              Yes, please
            </button>

            <button
              onClick={reminderHandler}
              className='w-2/5 py-2 border-[3px] border-mangoTango hover:bg-mango duration-300'
            >
              Remind me later
            </button>
          </div>
          <div
            onClick={closeHandler}
            className='cursor-pointer underline-offset-2 underline lg:text-base text-sm hover:font-semibold'
          >
            No Thanks, I may delivery order
          </div>
        </div>
      </div>
    );

  return <></>;
}
