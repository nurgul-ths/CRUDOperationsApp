import React from 'react'
import {useState, useEffect} from 'react'
import Axios from 'axios'
import './Form.css'
import { FiEdit2 } from 'react-icons/fi';
import { GoX } from 'react-icons/go';

function Form() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        Axios.get('http://localhost:3001/read').then((response) => {
            setUsers(response.data)
        })
    }, [])

    const [newName, setNewName] = useState("")
    const [newStatus, setNewStatus] = useState("")
    const handleChange = e => {
        const target = e.target
        if (target.checked) {
            setNewStatus(target.value)
        }
    }

    const updToList = (id) => {
        Axios.put('http://localhost:3001/update', {
            id: id,
            newName: newName,
            newStatus: newStatus
        })
    }

    const del = (id) => {
        Axios.delete(`http://localhost:3001/delete/${id}`)
    }
    return (
        <div>
                <form >
                <table >
                    <thead className="thead">
                        <tr>
                           
                            <th>Name</th> 
                            <th>Age</th>
                            <th>Email</th>
                            <th>Coding Level</th>
                            <th>Update / Delete</th>
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
                                            <td>
                                                <div className="update-user">
                                                <label>Name</label>
                                                    <input onChange={(event)=>{setNewName(event.target.value)}} type="text" name='name' placeholder="New Full Name"/>
                                                
                                                <label>Level</label>
                                                    <div class="radio">
                                                        <input onChange={handleChange}type="radio" name="status" value="Beginner"/>
                                                        <label>Beginner</label>
                                                    </div>
                                                    <div class="radio">
                                                        <input onChange={handleChange}type="radio"  name="status" value="Intermediate"/>
                                                        <label>Intermediate</label>
                                                    </div>
                                                    <div class="radio">
                                                        <input onChange={handleChange}type="radio"  name="status" value="Advanced"/>
                                                        <label>Advanced</label>
                                                    </div>
                                                <label>Update<button onClick={() => updToList(val._id)}><FiEdit2 /></button></label>
                                                <label>Delete<button onClick={() => del(val._id)}><GoX /></button></label>
                                                </div>
                                            </td>
                                            
                                        </tr>
                                )
                            })}

                    </tbody>
                </table> 
            </form> 
            </div>) }

export default Form