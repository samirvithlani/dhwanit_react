import React from 'react'

export const TableComponent = () => {
    var users = [
        {
            id:1,
            name:"Virat",
            runs:12000,
            six:1200,
            fours:1600
        },
        {
            id:2,
            name:"Sachin",
            runs:15000,
            six:1100,
            fours:1900
        },
        {
            id:3,
            name:"Dhoni",
            runs:10000,
            six:1300,
            fours:1500
        },
        {
            id:4,
            name:"Rohit",
            runs:9000,
            six:2100,
            fours:1000
        }
    ]
  return (
   <div>
    <table className='table table-dark'>
        <thead>
            <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>RUNS</th>
                <th>FOURS</th>
                <th>SIX</th>
            </tr>
        </thead>
        <tbody>
            {
                users.map((user)=>{
                    return <tr>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td style={{color:user.runs>10000 ?"green":"white"}}>{user.runs}</td>
                        <td style={{backgroundColor:user.fours>1800 && "green"}}>{user.fours}</td>
                        <td>{user.six}</td>
                    </tr>
                })
            }
        </tbody>
    </table>
   </div>
  )
}
