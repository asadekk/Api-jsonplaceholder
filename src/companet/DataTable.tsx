import React from 'react'

interface DataRow {
  id: number
  name: string
  role: string
  salary: string
}

interface DataTableProps {
  columns: { name: string; key: keyof DataRow }[];
  data: DataRow[];
}

function DataTable(props: DataTableProps) {

  return (
    <div>
      <table border={1}>
        <thead>
          <tr>
            {props.columns.map((column)=>{
              return <th>{column.name}</th>
            })}
          </tr>
        </thead>
        <tbody>
          {props.data.map((row)=>{
            return <tr key={row.id}>
              {props.columns.map((column)=>{  
                return <td>{row[column.key]}</td>
              })}
            </tr>
          })}
        </tbody>
      </table>
    </div>
  )
}

export default DataTable