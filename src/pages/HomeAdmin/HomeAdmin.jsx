import React , {useEffect , useState} from 'react'
import axios from 'axios';
import "./homeAdmin.css";
const HomeAdmin = () => {
    const [users , setUsers] = useState([]);
   
    
    useEffect(()=>{
        const fetchUsers = async ()=>{
          const res = await axios.get("http://localhost:8800/api/users");
          setUsers(res.data);
        }

        fetchUsers();
    })





  return (
    <>
    <h1 style={{textAlign : "center"}}>Welcome back admin</h1>
    <h2>les utilisateurs</h2>
    <div className='container1'>
        <div className='user'>
       <p><b>name</b></p>
       <p><b style={{marginLeft :"25px"}}>email</b></p>
        </div>
    {
        users.map(user => 
            <div className="user">
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p style={{color : 'red' , cursor : "pointer"}} >Delete</p>
            </div>
            )
    }
    </div>
    </>
    
  )
}

export default HomeAdmin