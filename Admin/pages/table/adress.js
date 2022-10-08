import Layout from "../../layout/layout";
import BigTable from "../../components/tables/bigTable";
import TableButtons from "../../components/tables/buttons";
import DateEditor from "react-tabulator/lib/editors/DateEditor";
import MultiValueFormatter from "react-tabulator/lib/formatters/MultiValueFormatter";
import MultiSelectEditor from "react-tabulator/lib/editors/MultiSelectEditor";
import { useState, useEffect } from "react";
import Router from "next/router";
import { parseCookies } from "nookies";
import EditModal from "../../components/tables/buttons/editModal";
import DeleteModal from "../../components/tables/buttons/deleteModal";
import { reactFormatter } from "react-tabulator";
import ReactModal  from "react-modal";

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


export default function MainPage({}) {
  useEffect(() => {
    const cookies = parseCookies();
    if (
      Object.entries(cookies).length == 0 &&
      Object.entries(cookies)[0] != "session-key"
    ) {
      Router.push("/login");
    }
  });

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
  const [addButton, setAddButton] = useState(false);
  const [editButton, setEditButton] = useState(false);
  const [deleteButton, setDeleteButton] = useState(false);


  function closeAddModal(){
    setAddButton(!addButton)
  }
  function closeEditModal(){
    setEditButton(!editButton)
  }
  function closeDeleteModal(){
    setDeleteButton(!deleteButton)
  }

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
  return (
    <>
      <header className="pl-20">
        <TableButtons
          data={data}
          setData={setData}
          emptyData={emptyData}
          addButton={addButton}
          setAddButton={setAddButton}
          editButton={editButton}
          setEditButton={setEditButton}
          deleteButton={deleteButton}
          setDeleteButton={setDeleteButton}
        />
        <h1>{addButton.toString()}</h1>
      </header>

      <BigTable
        ref={ref}
        data={data}
        options={options}
        editableColumns={editableColumns}
        rowTap={rowTap}
        
      />
     <ReactModal isOpen={addButton} shouldCloseOnOverlayClick={true}>

<div className="w-full px-6 py-4 m-20 overflow-hidden bg-white shadow-xl shadow-black sm:max-w-md sm:rounded-lg">

            <div>
              <label
                htmlFor="name"
                className="block text-sm   font-medium text-gray-700 undefined"
              >
                Имя
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="text"
                  require="true"
                  name="name"
                  pattern="[А-Я][а-я]+"
                  placeholder="Иван"
                  className="block invalid:border-pink-500 invalid:text-pink-600 shadow-md shadow-black w-full mt-1 border-black rounded-md  focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>

            <div className="mt-4">
              <label
                htmlFor="surname"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Фамилия
              </label>
              <div className="flex flex-col border-black items-start">
                <input
                  require="true"
                  type="text"
                  name="surname"
                  
                  pattern="[А-Я][а-я]+"
                  placeholder="Иванов"
                  className="block invalid:border-pink-500 invalid:text-pink-600 shadow-md shadow-black w-full mt-1 border-black rounded-md  focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>

            <div className="flex items-center justify-center mt-4">
              <button
                onClick={closeAddModal}
                className={`inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold
                tracking-widest text-white uppercase transition duration-150 ease-in-out 
                 border border-transparent rounded-md  false active:bg-gray-900 bg-gray-900`}
                
              >
                Подтвердить
              </button>
            </div>

          </div>
        </ReactModal>
     <ReactModal isOpen={editButton} shouldCloseOnOverlayClick={true}>

<div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-xl shadow-black sm:max-w-md sm:rounded-lg">

            <div>
              <label
                htmlFor="name"
                className="block text-sm   font-medium text-gray-700 undefined"
              >
                Имя
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="text"
                  require="true"
                  name="name"
                  pattern="[А-Я][а-я]+"
                  placeholder="Иван"
                  className="block invalid:border-pink-500 invalid:text-pink-600 shadow-md shadow-black w-full mt-1 border-black rounded-md  focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>

            <div className="mt-4">
              <label
                htmlFor="surname"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Фамилия
              </label>
              <div className="flex flex-col border-black items-start">
                <input
                  require="true"
                  type="text"
                  name="surname"
                  
                  pattern="[А-Я][а-я]+"
                  placeholder="Иванов"
                  className="block invalid:border-pink-500 invalid:text-pink-600 shadow-md shadow-black w-full mt-1 border-black rounded-md  focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>

            <div className="flex items-center justify-center mt-4">
              <button
                onClick={closeAddModal}
                className={`inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold
                tracking-widest text-white uppercase transition duration-150 ease-in-out 
                 border border-transparent rounded-md  false active:bg-gray-900 bg-gray-900`}
                
              >
                Подтвердить
              </button>
            </div>

          </div>
        </ReactModal>
     <ReactModal isOpen={deleteButton} shouldCloseOnOverlayClick={true}>

<div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-xl shadow-black sm:max-w-md sm:rounded-lg">

            <div>
              <label
                htmlFor="name"
                className="block text-sm   font-medium text-gray-700 undefined"
              >
                Имя
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="text"
                  require="true"
                  name="name"
                  pattern="[А-Я][а-я]+"
                  placeholder="Иван"
                  className="block invalid:border-pink-500 invalid:text-pink-600 shadow-md shadow-black w-full mt-1 border-black rounded-md  focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>

            <div className="mt-4">
              <label
                htmlFor="surname"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Фамилия
              </label>
              <div className="flex flex-col border-black items-start">
                <input
                  require="true"
                  type="text"
                  name="surname"
                  
                  pattern="[А-Я][а-я]+"
                  placeholder="Иванов"
                  className="block invalid:border-pink-500 invalid:text-pink-600 shadow-md shadow-black w-full mt-1 border-black rounded-md  focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>

            <div className="flex items-center justify-center mt-4">
              <button
                onClick={closeAddModal}
                className={`inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold
                tracking-widest text-white uppercase transition duration-150 ease-in-out 
                 border border-transparent rounded-md  false active:bg-gray-900 bg-gray-900`}
                
              >
                Подтвердить
              </button>
            </div>

          </div>
        </ReactModal>
      
    </>
  );
}

MainPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
