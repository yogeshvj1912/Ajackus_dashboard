import axios from 'axios';
import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function UserEdit() {
    const [isLoading,setLoading]=useState(false);
    const params=useParams()
    const navigate = useNavigate()

    useEffect(()=>{
getUserData()
    },[])
    let getUserData=async()=>{
        try{
          
         const user=await axios.get(`https://64493cfab88a78a8f001da8a.mockapi.io/users/${params.id}`)
           myFormik.setValues(user.data)
         }
         catch (error){
           console.log(error);
         
          
         }
    }

    const myFormik = useFormik({
        initialValues: {
            employeeId:"",
            firstName: "",
            lastName:"",
            email: "",
            country: ""
        },
        validate:(values)=>{
            let errors = {}

            if (!values.employeeId) {
               errors.employeeId = "please enter an Employee Id";
            } 
   
            if (!values.firstName) {
               errors.firstName = "please enter a First Name";
            } else if (values.firstName.length < 1) {
               errors.firstName = "Length should be greater than 3";
            } else if (values.firstName.length >= 20) {
               errors.firstName = "Length should be less than 15";
            }
   
            if (!values.lastName) {
               errors.lastName = "please enter a First Name";
            } else if (values.lastName.length < 1) {
               errors.lastName = "Length should be greater than 3";
            } else if (values.lastName.length >= 20) {
               errors.lastName = "Length should be less than 15";
            }
   
   
            if (!values.email) {
               errors.email = "please enter a email"
            }
            else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
               errors.email = "please enter a valid email"
            }
   
            if (!values.country) {
               errors.country = "please enter a country"
            }
   
            return errors
        },
        onSubmit:async(values)=>{
            try{
          await axios.put(`https://64493cfab88a78a8f001da8a.mockapi.io/users/${params.id}`,values)
          alert("Update done")
          navigate("/")
            }catch(error){
              alert("Somthing went wrong")
            }
        }
     })
  
  return (
   <>
    <div>UserEdit-{params.id}</div>
    <div className='container'>
    <form onSubmit={myFormik.handleSubmit}>
    <div className='row'>
            <div className='col-lg-4'>
                  <label>Emp ID</label>
                  <input name='employeeId' value={myFormik.values.employeeId} onChange={myFormik.handleChange} type={"text"} className={`form-control ${myFormik.errors.employeeId ? "is-invalid" : "is-valid"}`} />
                  <span style={{ color: "red" }}>{myFormik.errors.employeeId}</span>
               </div>
               <div className='col-lg-4'>
                  <label>First Name</label>
                  <input name='firstName' value={myFormik.values.firstName} onChange={myFormik.handleChange} type={"text"} className={`form-control ${myFormik.errors.firstName ? "is-invalid" : "is-valid"}`} />
                  <span style={{ color: "red" }}>{myFormik.errors.firstName}</span>
               </div>
               <div className='col-lg-4'>
                  <label>Last Name</label>
                  <input name='lastName' value={myFormik.values.lastName} onChange={myFormik.handleChange} type={"text"} className={`form-control ${myFormik.errors.lastName ? "is-invalid" : "is-valid"}`} />
                  <span style={{ color: "red" }}>{myFormik.errors.lastName}</span>
               </div>
               <div className='col-lg-6'>
                  <label>E-Mail</label>
                  <input name='email' value={myFormik.values.email} onChange={myFormik.handleChange} type={"text"} className={`form-control ${myFormik.errors.email ? "is-invalid" : "is-valid"}`} />
                  <span style={{ color: "red" }}>{myFormik.errors.email}</span>
               </div>
               <div className='col-lg-6'>
                  <label>Country</label>
                  <select name='country' value={myFormik.values.country} onChange={myFormik.handleChange} className={`form-control ${myFormik.errors.country ? "is-invalid" : "is-valid"}`} >
                     <option value={""}>---Select---</option>
                     <option value={"IN"}>India</option>
                     <option value={"USA"}>America</option>
                  </select>
                  <span style={{ color: "red" }}>{myFormik.errors.country}</span>
               </div>
            
               <div className='col-lg-3  mt-4'>
                  <input disabled={isLoading} type={"submit"} value={isLoading ? "Loding..." : "Create"} className='btn btn-primary' />
               </div>

            </div>
    </form>
    </div>
    </>
  )
}

export default UserEdit