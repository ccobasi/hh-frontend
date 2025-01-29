import React,{useState} from "react";
import { Chart } from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Data } from "../../../utils/Data";

import { Line } from "react-chartjs-2";

Chart.register(CategoryScale);


export const LineChartBoundaries = React.memo(() => {
    const [chartData, setChartData] = useState({
        labels: Data.map((data) => data.year), 
        datasets: [
          {
            label: "Users Gained ",
            data: Data.map((data) => data.userGain),
            backgroundColor: [
              "rgba(75,192,192,1)",
             
              "#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0"
            ],
            borderColor: "black",
            borderWidth: 2,
            fill:true,
       
          }
        ]
      });

    
    return (<>
   
    <Line data={chartData}/>
    
    </>);
  
  });
// import React, { useState, useEffect } from "react";
// import { Chart } from "chart.js/auto";
// import { CategoryScale } from "chart.js";
// import { Line } from "react-chartjs-2";
// import axios from "axios";

// Chart.register(CategoryScale);

// export const LineChartBoundaries = React.memo(() => {
//     const user = JSON.parse(localStorage.getItem("user"));
//     const userId = user ? user.id : null;

//     const [chartData, setChartData] = useState({
//         labels: [],
//         datasets: [
//             {
//                 label: "Contract Amount Over Time",
//                 data: [],
//                 backgroundColor: "rgba(75,192,192,0.4)",
//                 borderColor: "rgba(75,192,192,1)",
//                 borderWidth: 2,
//                 fill: true,
//             },
//         ],
//     });

//     useEffect(() => {
//         const fetchContractData = async () => {
//             try {
//                 const response = await axios.get(`http://localhost:8000/contract/user/${userId}/contracts/`);
//                 const contractData = response.data;

//                 const labels = contractData.map((contract) => new Date(contract.start_date).toLocaleDateString());
//                 const dataPoints = contractData.map((contract) => parseFloat(contract.contract_amount));

//                 setChartData({
//                     labels,
//                     datasets: [
//                         {
//                             label: "Contract Amount Over Time",
//                             data: dataPoints,
//                             backgroundColor: "rgba(75,192,192,0.4)",
//                             borderColor: "rgba(75,192,192,1)",
//                             borderWidth: 2,
//                             fill: true,
//                         },
//                     ],
//                 });
//             } catch (error) {
//                 console.error("Error fetching contract data:", error);
//             }
//         };

//         fetchContractData();
//     }, []);

//     return (
//         <div>
//             <Line data={chartData} />
//         </div>
//     );
// });
