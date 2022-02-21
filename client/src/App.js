import React from 'react'
import './App.css'

function App() {
    return (
        <div className='App'>
            <header className='App-header'>
                Application
            </header>
            <div class="container">
        <div class="box-justify-between">
            <a href="/add-user" class="border-shadow">
                <span class="text-main"> New User </span>
            </a>
        </div>

        <form action='/' method='POST'>
            <table style="width:100%">
                <thead class="thead">
                    <tr>
                        <th>ID</th>
                        <th>Name</th> 
                        <th>Status</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <%- include('include/_show')%>
                </tbody>
              </table>
        </form>
        
    </div>
        </div>
    )
}

export default App