import Layout from "../../components/businessLayout";
import Line from "../../components/business/charts/LineChart";
import PieChart from "../../components/business/charts/PieChart";
import { useState, useEffect } from 'react'
import { parseCookies } from "nookies";
import Router from "next/router";

export default function Index(){

  useEffect(()=>{
    const cookies = parseCookies();
    if (Object.entries(cookies).length == 0 && Object.entries(cookies)[0] != "session-key"){
      Router.push('/login');
    }
  })

  const [value, setValue] = useState('account')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <main>
     <div className="grid grid-cols-1 divide-y"> <h1 className="text-xl pl-5 pt-5 text-green-700 ">Главная страница</h1>

      <div className="col-span-1 border-2 lg:col-span-2 row-span-3">
    <Line />
    </div>
    <div className="col-span-1 border-2 lg:col-span-1 row-span-2">
    <PieChart />
    </div></div>
    </main>
  )
}


Index.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};