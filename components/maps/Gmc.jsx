import React from "react";
import Mapper from "./Mapper";

export const mapGmc = [
  { cols: 2, len: 5 },
  { cols: 1, len: 8 },
  { cols: 1, len: 8 },
  { cols: 2, len: 5 },
];

export default function Gmc() {
  return <Mapper req={mapGmc} location='GMC' />;
}
