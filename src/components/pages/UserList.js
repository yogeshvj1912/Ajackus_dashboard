import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

function UserList() {
   
    const [userList,setUserlist]=useState([])
    const [isLoading,setLoading]=useState(true);
    let count = 0

    useEffect(()=>{
     getUsers();
    }, []);
  
    let getUsers=async()=>{
      try{
        const users = await axios.get("https://64493cfab88a78a8f001da8a.mockapi.io/users")
      setUserlist(users.data);
      setLoading(false)
      }
      catch (error){
        console.log(error);
      }
};

let handleDelete=async(id)=>{
    
    try {
        const confirmData=window.confirm("Are you sure do you want to delete this data");
       if (confirmData){
        await axios.delete(`https://64493cfab88a78a8f001da8a.mockapi.io/users/${id}`)
        
        getUsers();
       }
     }
     catch (error) {
        
        alert("Somthing went wrong");
       
     }

}

    return (
        <>
            <div className="d-sm-flex align-items-center justify-content-between mb-4" style={{padding:"20px"}}>
                <h1 className="h3 mb-0 text-gray-800"></h1>
                <Link to="/create-user" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    className="fas  fa-download fa-sm text-white-50"></i> Create User</Link>
            </div>

            <div className="card shadow mb-4 " style={{padding:"0 30px"}}>
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">User List</h6>
                </div>
                <div className="card-body">
                    {
                        isLoading?<h1>Loading...</h1>: <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" >
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Emp ID</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email</th>
                                    <th>Country</th>
                                   
                                   
                                </tr>
                            </thead>
                            <tbody>
                               {
                                userList.map((user,index)=>{
                                    count++
                                    return  <tr key={index}>
                                    <td>{count}</td>
                                    <td>{user.employeeId}</td>
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.email}</td>
                                    <td style={{width:"23%"}}>{user.country}</td>
                                    
                                    <th>
                                    <Link to={`/user-view/${user.id}`} className='btn btn-success ml-1 btn-sm mr-1' style={{margin:"0 5px"}} >View</Link>
                                    <Link to={`/user-edit/${user.id}`} className='btn btn-primary btn-sm mr-1 ' style={{margin:"0 5px"}}>Edit</Link>
                                    <button onClick={()=>handleDelete(user.id)} className='btn btn-danger btn-sm ' style={{margin:"0 5px"}}>Delete</button>
                                    </th>
                                </tr>
                                })
                               }
                              
                            </tbody>
                        </table>
                    </div>
                    }
                   
                </div>
            </div>

        </>

    )
}

export default UserList