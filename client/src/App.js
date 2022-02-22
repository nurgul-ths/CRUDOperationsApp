import React from 'react'
import './App.css'

function App() {
    return (
        <div className='App'>
            <header className='App-header'>
                Users
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
                                
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            
                            <tr>
                                <td>Cell 1</td>
                                <td>Cell 2</td>
                                <td>Cell 3</td>
                                <td>Cell 4</td>
                                
                            </tr>
                            <tr>
                                <td>Cell 1</td>
                                <td>Cell 2</td>
                                <td>Cell 3</td>
                                <td>Cell 4</td>
                                
                            </tr>
                            <tr>
                                <td>Cell 1</td>
                                <td>Cell 2</td>
                                <td>Cell 3</td>
                                <td>Cell 4</td>
                                
                            </tr>
    </tbody>
                    </table> 
                </form> 

                <div className="box-justify-between">
                    <a href="/add-user" className="border-shadow">
                        <span className="text-main"> Update </span>
                    </a>
                </div>

                
                <div className="box-justify-between">
                    <a href="/add-user" className="border-shadow">
                        <span className="text-main"> Delete </span>
                    </a>
                </div>
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
                    <div class="group">
                        <label for='email'>Age</label>
                        <input class ="name-email" type="number" name='age' placeholder="Age"/>
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