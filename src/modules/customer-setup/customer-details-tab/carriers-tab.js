


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
     { name: 'Jan', apple: '40k', banana: '24k', citrus: '24k' },
     { name: 'Feb', apple: '30k', banana: '13k', citrus: '22k' },
     { name: 'Mar', apple: '20k', banana: '98k', citrus: '22k' },
     { name: 'Apr', apple: '27k', banana: '39k', citrus: '20k' },
     { name: 'May', apple: '18k', banana: '48k', citrus: '21k' },
     { name: 'Jun', apple: '23k', banana: '38k', citrus: '25k' },
     { name: 'Jul', apple: '34k', banana: '43k', citrus: '21k' },
     { name: 'Aug', apple: '40k', banana: '24k', citrus: '24k' },
     { name: 'Sep', apple: '30k', banana: '13k', citrus: '22k' },
     { name: 'Oct', apple: '20k', banana: '98k', citrus: '22k' },
     { name: 'Nov', apple: '27k', banana: '39k', citrus: '20k' },
     { name: 'Dec', apple: '18k', banana: '48k', citrus: '21k' },
];
let count = ['0', '10k', '20k', '40k', '100k']

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
                    <YAxis label={{ value: 'Quantity', angle: -90, position: 'insideLeft' }} dataKey={count} />
                    <CartesianGrid strokeDasharray="3 5" />
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