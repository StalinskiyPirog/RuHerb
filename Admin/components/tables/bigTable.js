
import "react-tabulator/lib/styles.css"; // default theme
import "react-tabulator/css/bootstrap/tabulator_bootstrap.min.css"; // use Theme(s)

import DateEditor from "react-tabulator/lib/editors/DateEditor";
import MultiValueFormatter from "react-tabulator/lib/formatters/MultiValueFormatter";
import MultiSelectEditor from "react-tabulator/lib/editors/MultiSelectEditor";
import {useState} from "react";


import { ReactTabulator } from "react-tabulator";



// Editable Example:
const colorOptions = {
  "": "пусто",
  red: "red",
  green: "green",
  yellow: "yellow",
};
const petOptions = [
  { id: "cat", name: "cat" },
  { id: "dog", name: "dog" },
  { id: "fish", name: "fish" },
];
const editableColumns = [
  {
    title: "Name",
    field: "name",
    headerFilter: "input",
  },
  {
    title: "Age",
    field: "age",
    hozAlign: "left",
  },
  {
    title: "Favourite Color",
    field: "color",
    headerFilter: "select",
    headerFilterParams: { values: colorOptions },
  },
  {
    title: "Date Of Birth",
    field: "dob",
  },
  {
    title: "Pets",
    field: "pets",
    sorter: (a, b) => a.toString().localeCompare(b.toString()),
    formatter: MultiValueFormatter,
    formatterParams: { style: "PILL" },
  },
  {
    title: "Passed?",
    field: "passed",
    hozAlign: "center",
    formatter: "tickCross",
  },
];


export default function BigTable(){
    
  const [data, setData] = useState([
    {
      id: 1,
      name: "Oli Bob",
      age: "12",
      color: "red",
      dob: "01/01/1980",
      rating: 5,
      passed: true,
      pets: ["cat", "dog"],
    },
    {
      id: 2,
      name: "Mary May",
      age: "1",
      color: "green",
      dob: "12/05/1989",
      rating: 4,
      passed: true,
      pets: ["cat"],
    },
    {
      id: 5,
      name: "Margret Marmajuke",
      age: "16",
      color: "yellow",
      dob: "07/01/1999",
      rating: 4,
      passed: false,
    },
    {
      id: 6,
      name: "Van Ng",
      age: "37",
      color: "green",
      dob: "06/10/1982",
      rating: 4,
      passed: true,
      pets: ["dog", "fish"],
    },
    {
      id: 7,
      name: "Duc Ng",
      age: "37",
      color: "yellow",
      dob: "10/10/1982",
      rating: 4,
      passed: true,
      pets: ["dog"],
    },
  ]);

  const [selectedName, setSelectedName] = useState("");

  
  function rowTap(e, row ) {

    console.log(row);

    setSelectedName("kif");
  }

  function clearData() {
    setData([]);
  }
  const options = {
    movableRows: false,
    movableColumns: false,
    selectable: true,
    //rowTap: rowTap
  };
  const emptyData = editableColumns.reduce((p, c) => {
    p[c.field] = c.defaultValue || "";
    return p;
  }, {});
  let ref = null;
 

    return(
        <ReactTabulator
          onRef={(r) => (ref = r)}
          columns={editableColumns}
          data={data}
          options={options}
          events={{
            rowClick: rowTap
          }}
       
        />
    );
}