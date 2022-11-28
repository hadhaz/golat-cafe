import { nanoid } from "@reduxjs/toolkit";
import React from "react";
import { generate } from "../../utils/seatGenerator";

export default function Mapper({ req }) {
  const data = generate(req);
  return (
    <div className='gap-y-6 w-full items-center flex flex-col text-black font-medium'>
      {data.map(item => (
        <DynamicGroup key={nanoid()} data={item} />
      ))}
    </div>
  );
}

const DynamicGroup = ({ data }) => {
  return (
    <div
      className={`grid w-full`}
      style={{
        gridTemplateColumns: `repeat(${data.items.length}, minmax(0, 1fr))`,
      }}
    >
      {data.items.map(item => (
        <div
          key={nanoid()}
          className={`grid gap-1 w-fit self-center justify-self-center`}
          style={{
            gridTemplateColumns: `repeat(${data.col}, minmax(0, 1fr))`,
          }}
        >
          {item.map(child => (
            <div
              key={nanoid()}
              className='bg-grayAvailable w-6 h-6 text-center rounded-sm'
            >
              {child.no}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
