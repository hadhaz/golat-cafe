import React from "react";
import Mapper from "./Mapper";

export default function Gmc() {
  return (
    <Mapper
      req={[
        { cols: 2, len: 5 },
        { cols: 1, len: 8 },
        { cols: 1, len: 8 },
        { cols: 2, len: 5 },
      ]}
    />
  );
}
