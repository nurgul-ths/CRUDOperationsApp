import React from 'react'
import './App.css'

function App() {
    return (
        <div className='App'>
            <header className='App-header'>
                Application
            </header>
            <div className="container">

                <div className="box-justify-between">
                    <a href="/add-user" className="border-shadow">
                        <span className="text-main"> New User </span>
                    </a>
                </div>

                <form action='/' method='POST'>
                    <table >
                        <thead className="thead">
                            <tr>
                                <th>ID</th>
                                <th>Name</th> 
                                <th>Status</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                    </table> 
                </form> 

                <a href="/add-user" className="border-shadow">
                    <span class="text-main"> Update </span>
                </a>

                
                <a href="/add-user" className="border-shadow">
                    <span class="text-main"> Delete </span>
                </a>
            </div>
            <form method='POST' id="add-user">
                <div className="new-user">
                    <div className="group">
                        <label for='name'>Name</label>
                        <input className ="name-email"type="text" name='name' placeholder="Full Name"/>
                    </div>
                    <div class="group">
                        <label for='email'>Email</label>
                        <input class ="name-email" type="text" name='email' placeholder="example@gmail.com"/>
                    </div>
                    <label>Status</label>
                        <div class="radio">
                            <input type="radio" name="status" value="inactive"/>
                            <label>Active</label>
                        </div>
                        <div class="radio">
                            <input type="radio" name="status" value="active"/>
                            <label>Inactive</label>
                        </div>
                </div>
            </form>
        </div>   
    )
}

export default App