import React from 'react'
import {useState, useEffect} from 'react'
import Axios from 'axios'
import './Form.css'

function Form() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        Axios.get('http://localhost:3001/read').then((response) => {
            setUsers(response.data)
        })
    }, [])
    return (
        <div>
                <form >
                <table >
                    <thead className="thead">
                        <tr>
                           
                            <th>Name</th> 
                            <th>Age</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                            {users.map((val, key) => {
                                return (
                                        <tr>
                                            <td>{val.name}</td>
                                            <td>{val.age}</td>
                                            <td>{val.email}</td>
                                            <td>{val.status}</td>
                                        </tr>
                                )
                            })}

</tbody>
                </table> 
            </form> 
            </div>) }

export default Form