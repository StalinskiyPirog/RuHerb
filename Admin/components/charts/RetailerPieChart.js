
import { useState } from "react";

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

import dynamic from "next/dynamic";


export default function RetailerPieChart({}){
  const [state,setState] = useState({
          
    series: [{
      data: [20, 10, 13, 25, 27, 28]
    }],
    options: {
      chart: {
        type: 'bar',
        height: 350
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: true,
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: ["Herb", "Iherb", "RuHeeb", "Tusk", "Trusya", "Lolipop"
        ],
      }
    },
  
  
  })
  
    return(
      <div className="bg-white border relative border-gray-100 rounded-lg">
        <h3>Процент продаж ритейлеров по категориям </h3>
      <div className="chart-wrap">
        <div id="chart">
      <Chart options={state.options} series={state.series} type="bar" />
    </div>
      </div>
    
     
    </div>
    );
}
