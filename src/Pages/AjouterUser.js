import React, { useState } from 'react'
import { AdduserAction } from '../config/action';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

function AjouterUser() {
  const count = useSelector((data) => data.users.length)
  // const [id, setId] = useState()
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const HandelClick = (event) => {
    event.preventDefault()
    dispatch(AdduserAction({
      id: count + 1,
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
            {/* <tr >
              <td><label>id :</label></td>
              <td><input type="number" value={id} onChange={(e) => setId(e.target.value)} /></td>
            </tr> */}
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
export default AjouterUser;