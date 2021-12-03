import React, {useState} from "react"
import api from '../api'

const Users = () => {
    const [users, setUsers] = useState(api.users.fetchAll())
    console.log(users)
    /*const handleDelete = (userId) => {

    }
    const renderPhrase = (number) => {

    }*/
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                <th scope="col">Имя</th>
                <th scope="col">Качества</th>
                <th scope="col">Профессия</th>
                <th scope="col">Встретился, раз</th>
                <th scope="col">Оценка</th>
                <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                    <tr key = {user._id}>
                    <td key = {user.name}>{user.name}</td>
                    <td key = {user._id + 'qua'}>{
                        user.qualities.map(element => {
                            console.log(element.name)
                            return <span key={element._id} className={'badge bg-' + element.color + ' m-1'}>{element.name}</span>
                        })
                    }</td>
                    <td key = {user.profession.name}>{user.profession.name}</td>
                    <td key = {user.completedMeetings}>{user.completedMeetings}</td>
                    <td key = {user.rate}>{user.rate}/5</td>
                    <td key = {user._id + user.name}></td>
                    </tr>
                ))}
            </tbody>
        </table>    
    )
}

export default Users