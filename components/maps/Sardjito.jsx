import React from "react";
import Mapper from "./Mapper";

export default function Sardjito() {
  return (
    <Mapper
      req={[
        { cols: 2, len: 4 },
        { cols: 2, len: 4 },
        { cols: 2, len: 4 },
        { cols: 2, len: 4 },
      ]}
    />
  );
}
