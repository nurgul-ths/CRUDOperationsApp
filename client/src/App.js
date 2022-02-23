import React, {useState } from 'react'
import './App.css'
import Axios from 'axios'
import Form from './Form'


function App() {

    const [name, setName] = useState("")
    const [age, setAge] = useState(0)
    const [email, setEmail] = useState("")
    const [status, setStatus] = useState("")

    const handleChange = e => {
        const target = e.target
        if (target.checked) {
            setStatus(target.value)
        }
    }
    
    const addToList = () => {
        Axios.post('http://localhost:3001/insert', {
            name: name,
            age: age,
            email: email,
            status: status
        })
    }

    return (
        <div className='App'>
            <header className='App-header'>
                Students Data
            </header>
            <div className="container">

                <Form/>

            </div>
            <div>
            
            </div>
                <div className="new-user">
                    <form>
                    <div className="group">
                        <label>Name</label>
                        <input className ="name-email" onChange={(event)=>{setName(event.target.value)}} type="text" name='name' placeholder="Full Name"/>
                    </div>
                    <div class="group">
                        <label>Email</label>
                        <input className ="name-email" type="text" onChange={(event)=>{setEmail(event.target.value)}} name='email' placeholder="example@gmail.com"/>
                    </div>
                    <div class="group">
                        <label>Age</label>
                        <input className ="name-email" onChange={(event)=>{setAge(event.target.value)}} type="number" name='age' placeholder="Age"/>
                    </div>
                    
                    <label className="level">Level</label>
                        <div class="radio">
                            <input type="radio"  onChange={handleChange} name="status" value="Beginner"/>
                            <label>Beginner</label>
                        </div>
                        <div class="radio">
                            <input type="radio"  onChange={handleChange} name="status" value="Intermediate"/>
                            <label>Intermediate</label>
                        </div>
                        <div class="radio">
                            <input type="radio"  onChange={handleChange} name="status" value="Advanced"/>
                            <label>Advanced</label>
                        </div>
                    <div className="box-justify-between">
                        <button onClick={addToList}>
                            Create New User 
                        </button>

                         
                    </div>
                    </form>  
                    <br/>
                </div>
            
        </div>   
    )
}

export default App