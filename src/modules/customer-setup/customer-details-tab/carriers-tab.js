


// import React, { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom';
// import { Line } from '@ant-design/plots';

// let CarriersTab = () => {
//     const [data, setData] = useState([]);

//     useEffect(() => {
//         asyncFetch();
//     }, []);

//     const asyncFetch = () => {
//         fetch('https://gw.alipayobjects.com/os/bmw-prod/55424a73-7cb8-4f79-b60d-3ab627ac5698.json')
//             .then((response) => response.json())
//             .then((json) => setData(json))
//             .catch((error) => {
//                 console.log('fetch data failed', error);
//             });
//     };
//     const config = {
//         data,
//         xField: 'year',
//         yField: 'value',
//         seriesField: 'category',
//         xAxis: {
//             type: 'time',
//         },
//         yAxis: {
//             label: {

//                 formatter: (v) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
//             },
//         },
//     };

//     return (<Line {...config} style={{ height: "3 px" }} />)
// }
// export default CarriersTab;

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Card } from 'antd';

const data = [
     { name: 'Jan', apple: '40', banana: '24', citrus: '24' },
     { name: 'Feb', apple: '30', banana: '13', citrus: '22' },
     { name: 'Mar', apple: '20', banana: '98', citrus: '22' },
     { name: 'Apr', apple: '27', banana: '39', citrus: '20' },
     { name: 'May', apple: '18', banana: '48', citrus: '21' },
     { name: 'Jun', apple: '23', banana: '38', citrus: '25' },
     { name: 'Jul', apple: '34', banana: '43', citrus: '21' },
     { name: 'Aug', apple: '40', banana: '24', citrus: '24' },
     { name: 'Sep', apple: '30', banana: '13', citrus: '22' },
     { name: 'Oct', apple: '20', banana: '98', citrus: '22' },
     { name: 'Nov', apple: '27', banana: '39', citrus: '20' },
     { name: 'Dec', apple: '18', banana: '48', citrus: '21' },
];

const yAxisformatter = (number) => {
     return `${number.toString()}k`;
   }

let ActivityTab = () => {
     return (
          <Card>
               <LineChart
                    width={550}
                    height={250}
                    data={data}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
               >
                    <XAxis dataKey="name" />
                    <YAxis  tickFormatter={yAxisformatter}/>
                    <CartesianGrid strokeDasharray="3 6" />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="apple" stroke="#8884d8" />
                    <Line type="monotone" dataKey="banana" stroke="#82ca9d" />
                    <Line type="monotone" dataKey="citrus" stroke="#ffc658" />
               </LineChart>
          </Card>
     )
}
export default ActivityTab;