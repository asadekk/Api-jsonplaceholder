import React from 'react'
import DataTable from '../companet/DataTable';
function DataUsers() {
    const columns = [
    { name: 'Ism',    key: 'name'   },
    { name: 'Rol',    key: 'role'   },
    { name: 'Oylik',  key: 'salary' },
    ]

    const data = [
    { id: 1, name: 'Aria Chen',   role: 'Engineering Lead', salary: '$155,000' },
    { id: 2, name: 'Marcus Webb', role: 'Product Manager',  salary: '$132,000' },
    { id: 3, name: 'Sara Johnson',role: 'Designer',         salary: '$98,000'  },
    ]
  return (
    <div>
      <h1>TWO</h1>
        <DataTable columns={columns} data={data} />
    </div>
  )
}

export default DataUsers