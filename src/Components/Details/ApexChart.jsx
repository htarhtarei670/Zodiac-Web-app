import { useState } from "react";
import ReactApexChart from "react-apexcharts";

const ApexChart = ({traits}) => {

  //for apex chart
const [chart,setChart]=useState({
    series: [{
      name: 'Series 1',
      data: traits.map(ts=>ts.percentage),
    }],
    options: {
      chart: {
        width: "100%",
        height: "100%",
        type: "radar",
        toolbar: {show: false},
      },
      plotOptions: {
        area: {fillTo: "end"},
        radar: {
            polygons: {
                strokeColors: '#e9e9e9',
                fill: {
                colors: ['#f8f8f8', '#fff']
                }
            }
        }
      },
      colors: ['#fdba74'],
      labels: traits.map((ts) => ts.name),
    //   grid: {show: false},
    dataLabels: {
        enabled: true,
        style: {fontWeight: "bold"},
    },
    },
  })
  return (
        <div className="my-4">
            <h1 className="text-3xl font-bold text-center">Personality Traits</h1>
            <div className="h-[370px] sm:h-[400px] lg:h-[550px] w-[370px] sm:w-[400px] lg:w-[550px] ">
                <ReactApexChart 
                        width={"100%"}
                        height={"100%"}
                        options={chart.options} 
                        series={chart.series} 
                        type="radar"  
                    />
            </div>
        </div>
  )
}

export default ApexChart
