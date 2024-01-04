import { useEffect } from 'react'
import './home.css'
import { getUsers } from '../../redux/apiCalls'
import { useDispatch, useSelector } from 'react-redux'

const Home = () => {
  const dispatch = useDispatch()

  const users = useSelector ( (state)=> state.users.Users)
  console.log(users)
  useEffect(()=>{
    dispatch(getUsers)
  },[dispatch])
  return (
    <div className='homeContainer'>
      <div className="userBox">
        {users.map((user, index)=>{
          return (
        <div className="infoContainer" key={index}>
          <div className="info">usernamr: <b>{user.username}</b></div>
          <div className="info">email: <b>{user.email}</b></div>
          <div className="info">phone: <b>{user.phone}</b></div>
         
        </div>
         )
        })}
      </div>
    </div>
  )
}

export default Home