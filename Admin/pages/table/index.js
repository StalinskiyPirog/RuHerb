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

  return (
    <>
      <header className="pl-20">
        Выбор
      </header>
      <div className="grid w-1/3  gap-2 grid-cols-1 place-items-center justify-items-center md:grid-cols-3">
        <button onClick={()=>Router.push("/table/category")} className="bg-green-600 focus:outline-none active:bg-green-400 h-32 w-32  rounded-lg">Категории товаров</button>
        <button onClick={()=>Router.push("/table/adress")} className="bg-green-600 focus:outline-none active:bg-green-400 h-32 w-32  rounded-lg">Адрес доставки</button>
        <button onClick={()=>Router.push("/table/product")} className="bg-green-600 focus:outline-none active:bg-green-400 h-32 w-32  rounded-lg">Продукты</button>
        <button onClick={()=>Router.push("/table/retail")} className="bg-green-600 focus:outline-none active:bg-green-400 h-32 w-32  rounded-lg">Ритейлеры</button>
        <button onClick={()=>Router.push("/table/client")} className="bg-green-600 focus:outline-none active:bg-green-400 h-32 w-32  rounded-lg">Клиенты</button>
        <button onClick={()=>Router.push("/table/reviews")} className="bg-green-600 focus:outline-none active:bg-green-400 h-32 w-32  rounded-lg">Отзывы товаров</button>
      </div>
      
    </>
  );
}

MainPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
