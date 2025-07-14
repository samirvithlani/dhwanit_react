import React from 'react'

//{employees:[]}
export const EmployeeList = (props) => {
    console.log("emplist props",props)
  return (
    <div>
        <h1>EMPLOYEE LIST</h1>
        <table className='table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>AGE</th>
                    <th>SALARY</th>
                    <th>ACTION</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.employees.map((emp)=>{
                        return <tr>
                            <td>{emp.id}</td>
                            <td>{emp.name}</td>
                            <td>{emp.age}</td>
                            <td>{emp.salary}</td>
                            <td>
                                <button onClick={()=>{props.deleteEmployee(emp.id)}} className='btn btn-danger'>DELETE</button>
                            </td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
