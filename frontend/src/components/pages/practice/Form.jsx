import { useState } from "react"

const Form = ({ handleSubmit, userData, setUserData }) => {
    const hobbiesOptions = ["Reading", "Cooking", "Sports", "Driving"];

    const handleChange = (e) => {
        const { value, name } = e.target;
        // console.log(value, name)
        setUserData({
            ...userData, [name] : value
        })
    }

    const handleHobbiesChange = (e) => {
        const { value, checked } = e.target;
        setUserData(prevUser => {
            const hobbies = prevUser.hobbies;
            return {
                ...prevUser,
                hobbies: checked
                    ? [...hobbies, value] // Add hobby if checked
                    : hobbies.filter(hobby => hobby !== value) // Remove hobby if unchecked
            }
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

                <div className="my-2">
                    <label>Hobbies:</label>
                    <div className="mt-1">
                        {hobbiesOptions.map(hobby => (
                            <label className="mr-2 ">
                                <input 
                                    type="checkbox" 
                                    value={hobby}
                                    onChange={handleHobbiesChange}
                                    checked={userData.hobbies.includes(hobby)}
                                />
                                {hobby}
                            </label>
                        ))}
                    </div>
                </div>

                <button type="submit" className="bg-green-500 text-white px-5 p-1 rounded-md my-5">
                    Create
                </button>
            </form>
        </div>
    )
}

export default Form