import React, { useMemo, useState } from "react";
import Table from "./Table";
import Header from "./Header";
import { MyMenu } from "react-proxy-component";

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

  const [selected, setSelected] = useState('Select distance');

  function handleReset(e) {
    setSelected('Select distance');
  }

  return (
    <div className="App">
        <Header />
        <div className="Container">
          <div className="DropdownMenu">
            <MyMenu reset={selected} onTitleUpdated={({ detail }) => setSelected(detail.dropdownTitle)} />
            <button className="Reset" onClick={handleReset}>Reset</button>
            <p>{selected}</p>
          </div>
            <div className="DataTable">
              <Table selected={selected} columns={columns} data={data} />
            </div>
        </div>
    </div>
  );
}