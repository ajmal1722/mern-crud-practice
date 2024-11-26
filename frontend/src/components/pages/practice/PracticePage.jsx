import { useState } from 'react';
import Form from './Form';
import UserListing from './UserListing';

const PracticePage = () => {
    const [userData, setUserData] = useState({
        id: '',
        name: '',
        dob: '',
        role: 'Teacher',
        hobbies: [],
    })
    const [users, setUsers] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        userData.id = Date.now()
        setUsers(prev => [...prev, userData]);
        // console.log('hobbies:', userData.hobbies)

        setUserData({
            id: '',
            name: '',
            dob: '',
            role: 'Teacher',
            hobbies: [],
        })
    }

    const deleteUser = (id) => {
        setUsers(users.filter(user => user.id !== id))
    }

    return (
        <>
            <Form 
                handleSubmit={handleSubmit} 
                userData={userData}
                setUserData={setUserData}
                users={users}
            />
            <UserListing 
                users={users}
                deleteUser={deleteUser}
            />
        </>
    )
}

export default PracticePage