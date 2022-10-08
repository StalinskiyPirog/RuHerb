
import { useState } from "react";

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

import dynamic from "next/dynamic";


export default function ProductsPieChart({}){
  const [state,setState] = useState({
          
    series: [44, 55, 13, 33],
    options: {
      chart: {
        width: 380,
        type: 'donut',
      },
      dataLabels: {
        enabled: false
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            show: false
          }
        }
      }],
      legend: {
        position: 'right',
        offsetY: 0,
        height: 230,
      }
    },
  
  
  })
  function appendData() {
    var arr = state.series.slice()
    arr.push(Math.floor(Math.random() * (100 - 1 + 1)) + 1)
  
    setState({
      series: arr
    })
  }
  
  function removeData() {
    if(state.series.length === 1) return
    
    var arr = state.series.slice()
    arr.pop()
  
    setState({
      series: arr
    })
  }
  
  function randomize() {
    setState({
      series: state.series.map(function() {
        return Math.floor(Math.random() * (100 - 1 + 1)) + 1
      })
    })
  }
  
  function reset() {
    setState({
      series: [44, 55, 13, 33]
    })
  }
    return(
      <div className="bg-white border relative border-gray-100 rounded-lg">
        <h3>Процент продаж товаров по категориям </h3>
      <div className="chart-wrap">
        <div id="chart">
      <Chart options={state.options} series={state.series} type="donut"  />
    </div>
      </div>
    
      <div className="actions">
        <button
            
            onClick={() => appendData()}
            >
          + ADD
        </button>
        &nbsp;
        <button
            
            onClick={() => removeData()}
            >
          - REMOVE
        </button>
        &nbsp;
        <button
            
            onClick={() => randomize()}
            >
          RANDOMIZE
        </button>
        &nbsp;
        <button
            
            onClick={() => reset()}
            >
          RESET
        </button>
      </div>
    </div>
    );
}
