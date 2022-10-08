import Layout from "../../layout/layout";
import BigTable from "../../components/tables/bigTable";
import TableButtons from "../../components/tables/buttons";
import { useState, useEffect } from "react";
import Router from "next/router";
import { parseCookies } from "nookies";
import EditModal from "../../components/tables/buttons/editModal";
import DeleteModal from "../../components/tables/buttons/deleteModal";
import { reactFormatter } from "react-tabulator";
import ReactModal  from "react-modal";



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

  return (
    <>
      <header className="pl-20">
        <TableButtons
          addButton={addButton}
          setAddButton={setAddButton}
          editButton={editButton}
          setEditButton={setEditButton}
          deleteButton={deleteButton}
          setDeleteButton={setDeleteButton}
        />
        <h1>{addButton.toString()}</h1>
      </header>

      <BigTable />
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
