import { useState } from 'react'
import Form from './Form'

const PracticePage = () => {
    const [userData, setUserData] = useState({
        name: '',
        dob: '',
        role: 'Teacher',
        skills: '',
    })
    const [users, setUsers] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();
        setUsers(prev => [...prev, userData]);
    }
    return (
        <>
            <Form 
                handleSubmit={handleSubmit} 
                userData={userData}
                setUserData={setUserData}
                users={users}
            />
        </>
    )
}

export default PracticePage
