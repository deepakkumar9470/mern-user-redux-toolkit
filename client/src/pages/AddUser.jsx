import React,{useState} from 'react'
import {Row,Card,Form,Button} from 'react-bootstrap'
import { toast } from 'react-hot-toast'
import {useDispatch,useSelector} from 'react-redux'

import { FcCheckmark } from "react-icons/fc";
import { addUser } from '../redux/userSlice'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { BASE_URL } from '../services/api';

const AddUser = () => {
 const [inputs,setInputs] = useState({
    name : "",
    email:"",
    phone:"",
 })

const dispatch = useDispatch() 
const navigate = useNavigate()

 const handleInputChange = (e) =>{
  const {name,value}  = e.target
  setInputs({...inputs, [name] :value})
 }



 const handleSubmit = async (e) =>{
    e.preventDefault()
    const {name,email,phone} = inputs
    if(name === ""){
      toast.error('First name is required')
    }else if(email === ""){
      toast.error('Last name is required') 
    }else if(phone === ""){
      toast.error('Email is required')
      
    }else if(!email.includes("@")){
      toast.error('Invalid email!')
    }else if(phone === ""){
      toast.error('phone no  is required')
    }else if(phone.length > 10){
      toast.error('Enter valid phone no')
    }else{
         
      try {
        
        const res = await axios.post(`${BASE_URL}/api/user/add`, {
          name,
          email,
          phone
        })
        dispatch(addUser(res.data))
        toast.success('User added Successfully', {icon : <FcCheckmark/>})
        navigate('/') 
      } catch (error) {
        toast.error(error)
      }
      
    }
   }
 
  return (
   <>
      <div className='container'>
         <h2 className='text-center mt-3 mb-3'>Add Your Details</h2>
         <Card className='shadow mt-3 p-3 '>          
         <Form>
          <Row>
            <Form.Group className=' mb-3'>
              <Form.Label>First name</Form.Label>
              <Form.Control onChange={handleInputChange} value={inputs.name}  type="text" name="name" placeholder="Enter name"/>
            </Form.Group>


            <Form.Group className=' mb-3'>
              <Form.Label>Email</Form.Label>
              <Form.Control onChange={handleInputChange} value={inputs.email}  type="text" name="email" placeholder="Enter email"/>
            </Form.Group>
            <Form.Group className=' mb-3'>
              <Form.Label>Phone</Form.Label>
              <Form.Control onChange={handleInputChange} value={inputs.phone} maxLength={10}  type="number" name="phone" placeholder="Enter phone no"/>
            </Form.Group>


          </Row>
            <Button className='btn-block' variant="success" type="submit" onClick={handleSubmit}>Submit</Button>
         
        
         </Form>
        </Card>
        </div>
   </>
  )
}

export default AddUser