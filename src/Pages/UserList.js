import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom"
import { DeleteUserAction } from '../config/action';

function UserList() {
    const users = useSelector(data => data.users)
    const dispatch =useDispatch()
    const HandeleDelete =(id)=>{
        dispatch(DeleteUserAction(id))
    }
    return (
        <div>


            <Link to="/add_user"><button className='btn btn-outline-primary'>Add User</button></Link>
            <table className="table caption-top">
                <caption>List of users</caption>
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((item, index) =>
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>
                                    <Link to={`/update_user/${item.id}`}><button className='btn btn-info m-1'>Edit</button></Link>
                                    <button onClick={()=>HandeleDelete(item.id)} className='btn btn-info m-1'>Delete</button>
                                </td>

                            </tr>

                        )
                    }

                </tbody>
            </table>



        </div>
    )
}
export default UserList;