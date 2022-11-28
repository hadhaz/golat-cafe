import React from "react";
import Mapper from "./Mapper";

export default function Komipa() {
  return (
    <Mapper
      req={[
        { cols: 3, len: 3 },
        { cols: 3, len: 3 },
        { cols: 2, len: 4 },
        { cols: 2, len: 4 },
      ]}
      location='komipa'
    />
  );
}
