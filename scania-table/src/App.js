import React, { useMemo, useState } from "react";
import Table from "./Table";
import Header from "./Header";
import { MyMenu } from "component-library-react";

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

  const [selected, setSelected] = useState('test');
  console.log(MyMenu)

  return (
    <div className="App">
        <Header />
        <div className="Container">
          <MyMenu />
          <button>Reset</button>
          <p>{selected}</p>
            <div className="DataTable">
              <Table columns={columns} data={data} />
            </div>
        </div>
    </div>
  );
}