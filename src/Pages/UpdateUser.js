import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { UpdateUserAction } from '../config/action';

function UpdateUser() {
  const { id } = useParams();
  const user =useSelector(data =>data.users.find((u)=>u.id ===parseInt(id)))
  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const HandelClick = (event) => {
    event.preventDefault()
    dispatch(UpdateUserAction({
      id: id,
      name: name,
      email: email
    }))
    navigate('/')
  }
  return (
    <div>
      <h1>AddUser</h1>
      <form >
        <table className="table caption-top">
          <tbody>
           
            <tr >
              <td><label>Name :</label></td>
              <td><input type="text" value={name} onChange={(e) => setName(e.target.value)} /></td>
            </tr>
            <tr >
              <td><label>Email :</label></td>
              <td><input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /></td>
            </tr>
          </tbody>
        </table>
        <button onClick={HandelClick} className='btn btn-outline-info'>Send</button>
      </form>
    </div>
  )
}
export default UpdateUser;