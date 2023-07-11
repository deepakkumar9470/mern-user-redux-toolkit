import React,{useState,useEffect} from 'react'
import {Row,Card,Table, Button} from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import './table.css'
import { BASE_URL } from '../services/api'
import {Link } from 'react-router-dom'
import axios from 'axios'
import { deleteUser, getUsers } from '../redux/userSlice'
import { toast } from 'react-hot-toast'
import { FaAccusoft } from 'react-icons/fa'

const MyTable = () => {
  
 const {users} = useSelector(state=>state.usersInfo)

 const dispatch =  useDispatch()

 useEffect(() => {
       const fetchUsers = async () =>{
          try {
              const res = await axios.get(`${BASE_URL}/api/user`)
              dispatch(getUsers(res.data))
          } catch (error) {
            console.log(error)
          }
       }

       fetchUsers()
}, [])

const deleteCurrentUser = async(id) =>{
      try {
            const res =  await axios.delete(`${BASE_URL}/api/user/${id}`)
            await  dispatch(deleteUser({id}))
            toast.success('User deleted successfully',{
              icon: <FaAccusoft/>
            })
            getUsers()
            // if(res.status === 200){
            //   getUsers()
            // }else{
            //   toast.error('Opps error in deleting user!')
            // }
            
      } catch (error) {
        console.log(error)
      }
  }

 

  //Pagination Previous



 
  return (
    <div className="container">
        <Row>
          <div className="col mt-0">
             <Card className="shadow my-2">
             <Table className='align-items-center' style={{width : '100%'}} responsive="sm">
      <thead className="thead-dark">
        <tr className="table-dark">
          <th>Id</th>
          <th>Name</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
       {
        users.length > 0 ? users.map((item)=>{
          return (
            <>
              <tr key={item._id}>
              <td>{item._id}</td>
              <td>{item.name}</td>
             
            <td className="d-flex align-items-center gap-3">
                <Link className='link' to={`/profile/${item._id}`} >
                <Button  variant="success">View</Button>              
                </Link>

                <Link className='link' to={`/edit/${item._id}`} >
                <Button  variant="primary">Edit</Button>  
                </Link>

               
                <Button variant="danger" onClick={()=>deleteCurrentUser(item._id)}>Delete</Button>           
                
            </td>
            </tr>
            </>
          )
        })
        :
        <div className="no_data text-center">No data found</div>
       }
       
      </tbody>
    </Table>

             </Card>
          </div>
        </Row>
        
    </div>
  )
}

export default MyTable