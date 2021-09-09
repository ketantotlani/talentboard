import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Graphs.css'
import { Chart } from "react-google-charts";

function Graphs() {
    // const [data, setData] = useState([])
    const [location, setLocation] = useState([])
    const [jobexp, setJobexp] = useState([])


    let emploc = [];
    
    let empexp = [];
    useEffect(() => {
        setTimeout(() => {
            const newitems = () => {
                var counts = {};
                for (var i = 0; i < emploc.length; i++) {
                    counts[emploc[i]] = 1 + (counts[emploc[i]] || 0);
                }
                // setlocation(counts)
                
                setLocation()
                var items= Object.keys(counts).map((key) => [key, counts[key]])
                var item = [["Location", "Job Seekers"]]
                var main = item.concat(items)
               setLocation(main)
               var expcount = {};
               for (var j = 0; j < empexp.length; j++) {
                expcount[empexp[j]] = 1 + (expcount[empexp[j]] || 0);
               }
               // setlocation(counts)
               
               var items1= Object.keys(expcount).map((key) => [(key+" Years"), expcount[key]])
               var item1 = [["Location", "Job Seekers"]]
               var main1 = item1.concat(items1)
              setJobexp(main1)
               
            }
            
            newitems();
            
                console.log(location);
        }, 1000);
        
    })

    useEffect(() => {
        const getData = () =>{
            axios.post(`https://nwmxjrs4cb.execute-api.ap-south-1.amazonaws.com/prod/talent/profiles`)
            .then(res => {
                // setData(res.data.profiles)
                // console.log(res.data);
                for(const dataObj of res.data.profiles){
                    emploc.push(dataObj.state)
                    empexp.push(dataObj.experience)
                }
            })
            .catch(err => console.log(err))   
        }
        getData(); 
          
    })
 
    return (
        <>
            <h1 className="heading1">Visual Representation (Graphs)</h1>
        <div className="chartContainer">
                            
                            <Chart
                width={'500px'}
                height={'300px'}
                chartType="BarChart"
                loader={<div>Loading Chart</div>}
                data={location}
                options={{
                    title: 'Job Seekers Based on Location (State Wise)',
                    chartArea: { width: '60%' },
                    hAxis: {
                    title: 'Total Population',
                    minValue: 0,
                    },
                    vAxis: {
                    title: 'State',
                    },
                    backgroundColor: "none"
                }}
                // For tests
                rootProps={{ 'data-testid': '1' }}
                />
                <Chart
                width={'500px'}
                height={'300px'}
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={jobexp}
                options={{
                    title: 'Experience Sorted by Years',
                    backgroundColor: "none"
                }}
                rootProps={{ 'data-testid': '1' }}
                />
            
        </div>
        </>
    )
}

export default Graphs
