import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function UserView() {
    const params = useParams();
    const [data, setData] = useState(null); // Initialize as null

    useEffect(() => {
        getUserData();
    }, []);

    const getUserData = async () => {
        try {
            const response = await axios.get(`https://64493cfab88a78a8f001da8a.mockapi.io/users/${params.id}`);
            setData(response.data); // Set the API response directly
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };

    return (
        <div className='container'>
            <h1>User View - {params.id}</h1>

            {/* Render data conditionally */}
            {data ? (
                <div className='row'>
                    <div className='col-lg-12 mt-5'>
                        <h2>Employee Details</h2>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Field</th>
                                    <th>Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Employee ID</strong></td>
                                    <td>{data.employeeId}</td>
                                </tr>
                                <tr>
                                    <td><strong>First Name</strong></td>
                                    <td>{data.firstName}</td>
                                </tr>
                                <tr>
                                    <td><strong>Last Name</strong></td>
                                    <td>{data.lastName}</td>
                                </tr>
                                <tr>
                                    <td><strong>Email</strong></td>
                                    <td>{data.email}</td>
                                </tr>
                                <tr>
                                    <td><strong>Country</strong></td>
                                    <td>{data.country}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default UserView;
