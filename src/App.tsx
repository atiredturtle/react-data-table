import React from "react";
import Table from "./Table";

const data = [
  ["first name", "last name", "age", "height (m)"],
  ["Guy", "Segev", "22", "186"],
  ["Tim", "Horton", "25", "220"],
  ["Joseph", "Green", "18", "165"],
];

function App() {
  return <Table rows={data} />;
}

export default App;
