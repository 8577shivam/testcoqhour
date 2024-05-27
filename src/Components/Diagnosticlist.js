import React from 'react'

const Diagnosticlist = ({list}) => {
    console.log(list,"fjk")
  return (
    <div><table>
        <thead>
            <th>Problem</th>
            <th>Description</th>
            <th>Status</th>
        </thead>
        <tbody>
            {
                list?.map((item)=>{
                    console.log(item)
                    return(
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.description}</td>
                            <td>{item.status}</td>
                        </tr>
                    )
                })
            }
        </tbody>
        </table></div>
  )
}

export default Diagnosticlist