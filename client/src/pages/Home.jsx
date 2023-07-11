import React,{useState,useEffect} from 'react'
import {Form,Button,Dropdown} from 'react-bootstrap';
import {AiOutlinePlus} from 'react-icons/ai'
import {FaAccusoft, FaFileCsv, FaSort} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';
import Loader from '../components/Loader';
import MyTables from '../components/MyTable'
import {toast} from 'react-hot-toast'

const Home = () => {
  const navigate = useNavigate()
  const [loading,setLoading] = useState(true)
 
  

  
  const addUser = () =>{
    navigate('/adduser')
  }

  

  return (
   <>
      <div className="container">
        <div className="main_div">

          <div className="search_add mt-4 d-flex justify-content-between">         
            <h2>User Management</h2>
            <div className="add_btn">
            <Button variant="primary" onClick={addUser}>
              <AiOutlinePlus/> Add User
            </Button>
            </div>
          </div>
           
        
        </div>
    </div>
      
        <MyTables/>
      
   </>
  )
}

export default Home