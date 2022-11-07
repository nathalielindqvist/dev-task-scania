import React, { useMemo, useState } from "react";
import Table from "./Table";
import Header from "./Header";
import { MyMenu } from "nathalielindqvist-react-proxy-dropdown";

export default function App() {

  // Columns for React table
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

  // Data set
  const data= [
    { driver: "Marcus Lundberg", company: "Aris FC", distance: 75044, score: 52 },
    { driver: "Marcus Mena Pacheco", company: "Lio LTD", distance: 129417, score: 95 },
    { driver: "Valentine Ichtertz", company: "LOTS Group", distance: 244656, score: 67 },
    { driver: "Niklas Rosén", company: "DD Interactive", distance: 200000, score: 78 }
  ]

   const [selected, setSelected] = useState('Select distance');
  // const [selected, setSelected] = useState({
  //   title: 'Select distance',
  //   operator: '',
  //   value: 0
  // });

  // Function to reset selected state and then pass as prop to child component to change dropdown title
  function handleReset(e) {
    setSelected('Select distance');

  //    setSelected({
  //   title: 'Select distance',
  //   operator: '',
  //   value: 0
  // });

  }

  // Filter function for filtering data based on which option is chosen in dropdown menu
  const filteredData = data.filter(item => {
    if (selected === "<= 200.000 km") {
        if (item.distance <= 200000) {
          return true;
        }
    } else if (selected === "> 200.000 km") {
      if (item.distance > 200000) {
        return true;
      }
    } else {
      return true;
    }
  })
//  const filteredData2 = data.filter(item => {
//   if (selected.operator === 'gt'){ return item.distance > selected.value }
//   else if (selected.operator === 'lte'){ return item.distance <= selected.value }
//   else return true
//  })

  // Function for adding comma and "km" decorations to distance data
  const decoratedData = filteredData.map(item => {
    return {...item, distance: `${parseInt( item.distance ).toLocaleString('en')} km`}
  })

  return (
    <div className="App">
        <Header />
        <div className="Container">
          <div className="DropdownMenu">
            <MyMenu reset={selected} onTitleUpdated={({ detail }) => setSelected(detail.dropdownTitle)} />
            <button className="Reset" onClick={handleReset}>Reset</button>
          </div>
            <div className="DataTable">
              <Table columns={columns} data={decoratedData} />
            </div>
        </div>
    </div>
  );
}