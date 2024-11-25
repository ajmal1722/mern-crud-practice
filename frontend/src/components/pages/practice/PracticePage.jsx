import { useState } from 'react'
import Form from './Form'

const PracticePage = () => {
    const [users, setUsers] = useState({
        name: '',
        dob: '',
        role: '',
        skills: '',
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(users)
    }
    return (
        <>
            <Form 
                handleSubmit={handleSubmit} 
                users={users}
                setUsers={setUsers}
            />
        </>
    )
}

export default PracticePage
