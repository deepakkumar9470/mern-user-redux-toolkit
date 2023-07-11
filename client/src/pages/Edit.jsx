import React,{useState,useEffect} from 'react'
import {Row,Card,Form,Button} from 'react-bootstrap'
import './edit.css'
import { useNavigate, useParams } from 'react-router-dom'
import { BASE_URL } from '../services/api'
import { toast } from 'react-hot-toast'
import { FcCheckmark } from "react-icons/fc";
import {editUser} from '../redux/userSlice'
import {useDispatch} from 'react-redux'
import axios from 'axios'

const Edit = () => {
  const {id} = useParams()
  // const {users} = useSelector(state=>state.usersInfo)
  // const existingUser = users.filter((user)=> user.id === id)
  const [isUpdated,setIsUpdated] = useState(false)
  const [inputs,setInputs] = useState({
    name: "" ,
    email :"",
    phone : "",
 })
 const handleInputChange = (e) =>{
  const {name,value}  = e.target
  setInputs({...inputs, [name] :value})
 }

const dispatch = useDispatch()
const navigate = useNavigate()

  useEffect(() => {
    const getUserById =  async () =>{
         try {
          const res = await axios.get(`${BASE_URL}/api/user/${id}`)
          setInputs(res.data)
        
         } catch (error) {
           console.log(error)
         }
    }
     getUserById()

  }, [id])


 const handleSubmit = async (e) =>{
  setIsUpdated(true)
  e.preventDefault()
  if(inputs.name === ""){
    toast.error('First name is required')
  }else if(inputs.email === ""){
    toast.error('Last name is required') 
  }else if(inputs.phone === ""){
    toast.error('Email is required')
    
  }else if(!inputs.email.includes("@")){
    toast.error('Invalid email!')
  }else if(inputs.phone === ""){
    toast.error('phone no  is required')
  }else if(inputs.phone.length > 10){
    toast.error('Enter valid phone no')
  }else{
       
    try {
      
      const res = await axios.put(`${BASE_URL}/api/user/${id}`,
      {
       
        name :inputs.name,
        email:inputs.email ,
        phone:inputs.phone 
      
    })
      dispatch(editUser(res.data)) 
      toast.success('User updated Successfully', {icon : <FcCheckmark/>})
      navigate('/') 
      setIsUpdated(false)
    } catch (error) {
      toast.error(error)
      setIsUpdated(false)
    }
    
  }
 }
 
  return (
   <>
      <div className='container'>
         <h2 className='text-center mt-3 mb-3'>Edit Your Details</h2>
         <Card className='shadow mt-3 p-3'>
         <Form>
          <Row>
            <Form.Group className='col-lg-6 mb-3'>
              <Form.Label>Name</Form.Label>
              <Form.Control onChange={handleInputChange} value={inputs.name}  type="text" name="name" placeholder="Enter name"/>
            </Form.Group>

            <Form.Group className='col-lg-6 mb-3'>
              <Form.Label>Email</Form.Label>
              <Form.Control onChange={handleInputChange} value={inputs.email}  type="text" name="email" placeholder="Enter email"/>
            </Form.Group>
            <Form.Group className='col-lg-6 mb-3'>
              <Form.Label>Mobile</Form.Label>
              <Form.Control onChange={handleInputChange} value={inputs.phone} maxLength={10}  type="number" name="phone" placeholder="Enter phone no"/>
            </Form.Group>
          
         
            <Button 
            variant="success" 
            type="submit" 
            onClick={handleSubmit}>
              {isUpdated ? "Update"  : "Create"}
            </Button>

          </Row>
         </Form>
         </Card>
        </div>
   </>
  )
}

export default Edit