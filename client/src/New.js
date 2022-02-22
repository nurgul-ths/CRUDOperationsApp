import React, {useState, useEffect} from 'react'

import Axios from 'axios'

function New() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        Axios.get('http://localhost:3001/read').then((response) => {
            setUsers(response.data)
        })
    }, [])
    return (
        <div>
        {users.map((val, key) => {
            return (
                <div>
                    <h1>
                    {val.name}
                    </h1>
                </div>
            )
        })}
        </div>
    )
}

export default New