import React, { useEffect, useState } from 'react'
import axios from 'axios'
import  './Body.css'

function Body() {

    const [data, setData] = useState([])

    useEffect(() => {
        const getData = () =>{
            axios.post(`https://nwmxjrs4cb.execute-api.ap-south-1.amazonaws.com/prod/talent/profiles`, {   limit: 20, offset: 0 })
            .then(res => {
                setData(res.data.profiles)
                console.log(res);
            })
            .catch(err => console.log(err))
        }
        getData();
    }, [])

    
    return (
        <div>
            <section>

  <h1 className="heading">Job Seekers</h1>
  <div className="tbl-header">
    <table cellPadding="0" cellSpacing="0" border="0">
      <thead>
        <tr>
          <th>Full Name</th>
          <th>Job Role</th>
          <th>Experience</th>
          <th>AWS Cloud Proficiency</th>
          <th>Skll Sets</th>
          <th>Industry</th>
          <th>Location</th>
        </tr>
      </thead>
    </table>
  </div>
  <div className="tbl-content">
    <table cellPadding="0" cellSpacing="0" border="0">
      <tbody>
          {data.map((item, key) => (
              <tr key={key}>
              <td className="item-name" onClick={()=> window.open(item.linkedinUrl)}>{item.name} <img className="linked" src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg" alt="" /></td>
              <td>{item.jobRole}</td>
              <td>{item.experience} Years</td>
              <td>{item.proficiencyLevel}</td>
              <td className="skills">{item.skills.toString().split()}</td>
              <td>{item.industry}</td>
              <td>{item.state}</td>
            </tr>
          ))}
      </tbody>
    </table>
  </div>
</section>



        </div>
    )
}

export default Body
