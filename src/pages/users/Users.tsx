import DataTable from '../../components/dataTable/DataTable'
import { GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import './users.scss'
import { userRows } from '../../data';
import { useState } from 'react';
import Add from '../../components/add/Add';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'avatar',
        headerName: 'Avatar',
        width: 100,
        renderCell: (params) => {
            return <img src={params.row.img || './noavatar.png'} />
        }
    },
    {
        field: 'firstName',
        headerName: 'First name',
        width: 150,

    },
    {
        field: 'lastName',
        headerName: 'Last name',
        width: 150,

    },
    {
        field: 'email',
        headerName: 'Email',
        type: 'string',
        width: 200,

    },
    {
        field: 'phone',
        headerName: 'Phone',
        type: "string",
        width: 200
    },
    // {
    //     field: 'createdAt',
    //     headerName: 'Created At',
    //     width: 200,
    // },
    // {
    //     field: 'verified',
    //     headerName: 'Verified',
    //     width: 150,
    //     type: 'boolean',
    // },
];
const Users = () => {
    const [open, setOpen] = useState(false)


    return (
        <div className='users'>
            <div className="info">
                <h1>Users</h1>
                <button onClick={() => setOpen(true)}>Add new User</button>
            </div>
            <DataTable columns={columns} rows={userRows} slug="users" />
            {open && <Add columns={columns} slug='user' setOpen={setOpen} />}
        </div>
    )
}

export default Users