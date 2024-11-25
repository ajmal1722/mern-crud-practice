import { useState } from "react"

const Form = ({ handleSubmit, userData, setUserData }) => {
    const handleChange = (e) => {
        const { value, name } = e.target;
        // console.log(value, name)
        setUserData({
            ...userData, [name] : value
        })
    }
    return (
        <div className='flex justify-center my-10'>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name='name'
                    className="border rounded-md p-1 px-2 mr-3"
                    placeholder="your name..."
                    value={userData.name}
                    onChange={handleChange}
                /> <br />
                <div className="border rounded-md p-1 px-2 my-2">
                    <label htmlFor="dob">
                        DOB:
                    </label>
                    <input 
                        type="date" 
                        name='dob'
                        className="mx-2"
                        value={userData.dob}
                        onChange={handleChange}
                    />
                </div>
                <select 
                    name="role" id="" 
                    value={userData.role}
                    className="border rounded-md p-1 px-2 my-2" 
                    onChange={handleChange}
                >
                    <option value="Teacher" >
                        Teacher
                    </option>
                    <option value="Student" >
                        Student
                    </option>
                    <option value="Parent" >
                        Parent
                    </option>
                </select> <br />

                <button type="submit" className="bg-green-500 text-white px-5 p-1 rounded-md my-5">
                    Create
                </button>
            </form>
        </div>
    )
}

export default Form