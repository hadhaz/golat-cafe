import { nanoid } from "@reduxjs/toolkit";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  initialize,
  selectedSeats,
  updateSeats,
} from "../../context/reservation-slice";
import { generate } from "../../utils/seatGenerator";

export default function Mapper({ req, location }) {
  const data = generate(req);
  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    dispatch(initialize({ seats: data, location }));
    setLoaded(true);
  }, []);

  const seats = useSelector(selectedSeats);

  if (loaded)
    return (
      <div className='gap-y-6 w-full items-center flex flex-col text-black font-medium'>
        {seats.map((item, col) => (
          <DynamicGroup
            location={location}
            col={col}
            key={nanoid()}
            data={item}
          />
        ))}
      </div>
    );
}

const DynamicGroup = ({ data, location, col }) => {
  return (
    <div
      className={`grid w-full`}
      style={{
        gridTemplateColumns: `repeat(${data.items.length}, minmax(0, 1fr))`,
      }}
    >
      {data.items.map((item, line) => (
        <div
          key={nanoid()}
          className={`grid gap-1 w-fit self-center justify-self-center`}
          style={{
            gridTemplateColumns: `repeat(${data.col}, minmax(0, 1fr))`,
          }}
        >
          {item.map((child, idx) => (
            <AtomicItem
              key={nanoid()}
              no={child.no}
              status={child.status}
              col={col}
              idx={idx}
              line={line}
              location={location}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

const AtomicItem = ({ no, status, location, col, idx, line }) => {
  const dispatch = useDispatch();
  const clickHandler = e => {
    if (status !== "booked")
      dispatch(
        updateSeats({
          location,
          no,
          status: status === "available" ? "chosen" : "available",
          line,
          col,
          idx,
        })
      );
  };

  return (
    <div
      onClick={clickHandler}
      style={{
        background:
          status === "available"
            ? "#D9D9D9"
            : status === "chosen"
            ? "linear-gradient(180deg, rgba(49,69,44,1) 16%, rgba(224,127,9,1) 80%)"
            : "#ef4444",
      }}
      className='bg-grayAvailable w-6 h-6 text-center rounded-sm'
    >
      {no}
    </div>
  );
};
