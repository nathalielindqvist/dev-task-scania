import React, { useMemo } from "react";
import Table from "./Table";
import Header from "./Header";

export default function App() {

  const columns = useMemo(
    () => [
      {
        Header: "Driver",
        accessor: "driver"
      },
      {
        Header: "Company",
        accessor: "company"
      },
      {
        Header: "Distance",
        accessor: "distance"
      },
      {
        Header: "Score",
        accessor: "score"
      }
    ],
    []
  );

  const data= [
    { driver: "Marcus Lundberg", company: "Aris FC", distance: "75,044 km", score: "52" },
    { driver: "Marcus Mena Pacheco", company: "Lio LTD", distance: "129,417 km", score: "95" },
    { driver: "Valentine Ichtertz", company: "LOTS Group", distance: "244,656 km", score: "67" },
    { driver: "Niklas Rosén", company: "DD Interactive", distance: "200,000 km", score: "78" }
  ]

  return (
    <div className="App">
        <Header />
        <div className="Container">
            <div className="DataTable">
              <Table columns={columns} data={data} />
            </div>
        </div>
    </div>
  );
}