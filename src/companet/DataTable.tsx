import React from 'react'

interface Columns{
  key:string,
  name:string
}

interface Props<T>{
  columns: Columns[],
  data: T[]
}
function DataTable<T>({data,columns}:Props<T>) {
console.log(data,columns);

  return (
    <div>
      <h1>ONE</h1>
      <table border={1}>
        <thead>
          <tr>
            {
            columns?.map((column)=>{
              return <th>{column.name}</th>
            })
            }
          </tr>
        </thead>
        <tbody>
          {
            data.map((d:any) =>{
              return <tr>
                {
                  columns.map(c =>{
                    return <td>
                      {d[c.key]}
                    </td>
                  })
                }
              </tr>
            })
          }
          <tr>
            
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default DataTable