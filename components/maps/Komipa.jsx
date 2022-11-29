import React from "react";
import Mapper from "./Mapper";

export const mapKomipa = [
  { cols: 3, len: 5 },
  { cols: 3, len: 3 },
  { cols: 2, len: 4 },
  { cols: 2, len: 4 },
];

export default function Komipa() {
  return <Mapper req={mapKomipa} location='KOMIPA' />;
}
