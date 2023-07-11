import React,{useState,useEffect} from 'react'
import {Row,Card,Form,Button} from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import {useNavigate, useParams,Link} from 'react-router-dom'
import { getSingleUser } from '../redux/userSlice'
import { BASE_URL } from '../services/api'
import axios from 'axios'
import { FcIphone } from "react-icons/fc";
import { MdOutlineMailOutline } from "react-icons/md";

const Profile = () => {
  const [user,setUser]  = useState({})
 
  const {id} = useParams()

  const dispatch = useDispatch() 
  const navigate = useNavigate()

useEffect(() => {
  const getUserById =  async () =>{
       try {
        const res = await axios.get(`${BASE_URL}/api/user/${id}`)
        setUser(res.data)
       } catch (error) {
         console.log(error)
       }
  }
   getUserById()

}, [id])

  return (
    <div className='container'>

<Card className='card_profile shadow col-lg-6 mx-auto mt-5'>
        <Card.Body>
          <Row>
            <div className="col">
              <div className="card_profile_stats d-flex justify-content-center mb-5">
                <img width={150} height={150} style={{borderRadius:'50%'}} src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600" alt="userpic" />
              </div>
            </div>
          </Row>
          <div className="text-center">
            <h3 className="mb-5">{user._id}</h3>
            <h4 className="mb-5">{user.name}</h4>
            <h5 className="mb-5"><MdOutlineMailOutline/> &nbsp;<span>{user.email}</span></h5>
            <h5 className="mb-5"><FcIphone/>&nbsp;<span>{user.phone}</span></h5>
           
          </div>
          <Link className='link' to="/">Go Back</Link>
        </Card.Body>
          </Card>
        

    </div>
  )
}

export default Profile