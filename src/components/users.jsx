import React, {useState} from "react"
import api from '../api'

const Users = () => {
    const [users, setUsers] = useState(api.users.fetchAll())
    /*let length = users.length*/
    /*console.log(users)*/
    const handleDelete = (userId) => {
        /*console.log(userId)*/
        setUsers(prevState=>prevState.filter((user) => {
            /*console.log(user)*/
           /*console.log(userId)*/
            return user._id!==userId
        }))
        /*renderPhrase(users.length)*/
    }
    const renderPhrase = (number) => {
        let text = ''
        let lastnumber = number
        if (number.length >= 10){
            lastnumber = String(number).slice(-1)
        }

        if (lastnumber === 1 || lastnumber > 4){
            text = ' человек тусанет с тобой сегодня'
        }else if (lastnumber === 2 || lastnumber === 3 || lastnumber === 4){
            text = ' человека тусанут с тобой сегодня'
        }
        return number + text
    }
    const renderTabele = () => {
        return <tbody>   
                {users.map((user) => (
                    <tr key = {user._id}>
                    <td key = {user.name}>{user.name}</td>
                    <td key = {user._id + 'qua'}>{
                        user.qualities.map(element => {
                            /*console.log(element.name)*/
                            return <span key={element._id} className={'badge bg-' + element.color + ' m-1'}>{element.name}</span>
                        })
                        }</td>
                        <td key = {user.profession.name}>{user.profession.name}</td>
                        <td key = {user.completedMeetings}>{user.completedMeetings}</td>
                        <td key = {user.rate}>{user.rate}/5</td>
                        <td key = {user._id + user.name}><button type='button' className='btn btn-danger' onClick = {() => handleDelete(user._id)}>delete</button></td>
                    </tr>
                ))}
                </tbody>
    }
    if (users.length !== 0){
        return<>
        <h3><span className="badge bg-primary m-2">{renderPhrase(users.length)}</span></h3>
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
            {renderTabele()}
        </table>
        </>
    }
    return (
        <h3><span className="badge bg-danger m-2">Никто с тобой не тусанет</span></h3>
    )
}

export default Users