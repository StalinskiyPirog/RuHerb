import Layout from "../layout/layout";
import RegisterForm from "../components/form/registerForm";
import RetailersTable from "../components/tables/retailersTable";
import TestTable from "../components/tables/testTable";
import ProfitIncome from "../components/stats/ProfitIncome";
import Line from "../components/charts/LineChart";
import RetailerPieChart from "../components/charts/RetailerPieChart";
import ProductsPieChart from "../components/charts/ProductsPieChart";
import {useState, useEffect } from "react";
import { parseCookies } from 'nookies'
import Router from "next/router";

export default function MainPage({}){

 
  useEffect(()=>{
    const cookies = parseCookies();
    if (Object.entries(cookies).length == 0 && Object.entries(cookies)[0] != "session-key"){
      Router.push('/login');
    }
  });

  return(
    <div className="bg-green-500">
    <div className="grid gap-4 grid-cols-1 border-2   lg:grid-cols-3 items-start justify-evenly ">
    <div className="col-span-1 rounded-xl   lg:col-span-1 ">
    <ProfitIncome />
    </div>
    
    
    <div className="col-span-1 rounded-xl border-2 lg:col-span-1 row-span-2">
    <RetailerPieChart />
    </div>
    <div className="col-span-1 rounded-xl border-2 lg:col-span-1 row-span-2">
    <ProductsPieChart />
    </div>
    <div className="col-span-1 rounded-xl border-2 lg:col-span-2 row-span-3">
    <Line />
    </div>
    <div className="col-span-1 rounded-xl border-2 lg:col-span-2 row-span-3">
    <Line />
    </div>
    <div className="col-span-1 rounded-xl border-2 lg:col-span-2 row-span-2">
    <TestTable />
    </div>
    
    <div className="col-span-1 rounded-xl lg:col-span-1 row-span-1">
    <ProfitIncome />
    </div>
    </div>
    </div>
  );
}


