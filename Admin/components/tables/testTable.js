
import 'react-tabulator/lib/styles.css'; // required styles
import "react-tabulator/css/tabulator_modern.min.css";// theme

import DateEditor from "react-tabulator/lib/editors/DateEditor";
import MultiValueFormatter from "react-tabulator/lib/formatters/MultiValueFormatter";


import { ReactTabulator } from 'react-tabulator';
import { useRef } from 'react';

const data = [
  {
    id: 1,
    name: "Oli Bob",
    age: "12",
    color: "red",
    dob: "01/01/1980",
    rating: 5,
    passed: true,
    pets: ["cat", "dog"]
  },
  {
    id: 2,
    name: "Mary May",
    age: "1",
    color: "green",
    dob: "12/05/1989",
    rating: 4,
    passed: true,
    pets: ["cat"]
  },
  {
    id: 5,
    name: "Margret Marmajuke",
    age: "16",
    color: "yellow",
    dob: "07/01/1999",
    rating: 4,
    passed: false
  },
  {
    id: 6,
    name: "Van Ng",
    age: "37",
    color: "green",
    dob: "06/10/1982",
    rating: 4,
    passed: true,
    pets: ["dog", "fish"]
  },
  {
    id: 7,
    name: "Duc Ng",
    age: "37",
    color: "yellow",
    dob: "10/10/1982",
    rating: 4,
    passed: true,
    pets: ["dog"]
  }
];


const colorOptions = {
  "": "&nbsp;",
  red: "red",
  green: "green",
  yellow: "yellow"
};
const petOptions = [
  { id: "cat", name: "cat" },
  { id: "dog", name: "dog" },
  { id: "fish", name: "fish" }
];
const editableColumns = [
  {
    title: "Name",
    field: "name",
    width: 150,
    editor: "input",
    headerFilter: "input"
  },
  {
    title: "Age",
    field: "age",
    hozAlign: "left",
    formatter: "progress",
    editor: "progress"
  },
  {
    title: "Favourite Color",
    field: "color",
    editor: "select",
    editorParams: {
      allowEmpty: true,
      showListOnEmpty: true,
      values: colorOptions
    },
    headerFilter: "select",
    headerFilterParams: { values: colorOptions }
  },
  {
    title: "Date Of Birth",
    field: "dob",
    sorter: "date",
    editor: DateEditor,
    editorParams: { format: "MM/DD/YYYY" }
  },
  {
    title: "Pets",
    field: "pets",
    sorter: (a, b) => a.toString().localeCompare(b.toString()),
    // editor: MultiSelectEditor,
    editorParams: { values: petOptions },
    formatter: MultiValueFormatter,
    formatterParams: { style: "PILL" }
  },
  {
    title: "Passed?",
    field: "passed",
    hozAlign: "center",
    formatter: "tickCross",
    editor: true
  }
];


export default function TestTable({}){
  const options = {
    height: 300,
    movableRows: true,
    selectable: true,
    downloadDataFormatter: (data) => data,
    downloadReady: (fileContents, blob) => blob,
    rowClick: (e, row) => {
      console.log(ref);
    },
    
  };
  let selectedName = "";

  let ref = useRef();
  if (data.length){ 
  return(<div className='bg-white border relative border-gray-100 rounded-lg'>
  <ReactTabulator
          columns={editableColumns}
          options={options}
          data={data}
          onRef={(ref) => (ref = ref)}
          footerElement={<span>Footer</span>}
        /></div>);} else{
          (<div>
        Данные не объявлены
        </div>); };
}