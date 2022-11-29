import React from "react";
import Mapper from "./Mapper";

export const mapSardjito = [
  { cols: 2, len: 4 },
  { cols: 2, len: 4 },
  { cols: 2, len: 4 },
  { cols: 2, len: 4 },
];

export default function Sardjito() {
  return <Mapper req={mapSardjito} location='SARDJITO' />;
}
