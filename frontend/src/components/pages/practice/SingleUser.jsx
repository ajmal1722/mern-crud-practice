import { MdOutlineEdit, MdDelete } from "react-icons/md";

const SingleUser = ({ user }) => {
    return (
        <div className="border rounded-md shadow-md p-5 m-5 max-w-md mx-auto">
            <div className='flex justify-end'>
                <div className="flex gap-2 mb-4 text-xl">
                    <MdOutlineEdit className="text-green-600 hover:text-green-700 cursor-pointer" />
                    <MdDelete className="text-red-500 hover:text-red-700 cursor-pointer" />
                </div>
            </div>
            <div className="mb-2">
                <strong>ID:</strong> {user.id || "Not provided"}
            </div>
            <div className="mb-2">
                <strong>Name:</strong> {user.name || "Not provided"}
            </div>
            <div className="mb-2">
                <strong>DOB:</strong> {user.dob || "Not provided"}
            </div>
            <div className="mb-2">
                <strong>Role:</strong> {user.role}
            </div>
            <div className="mb-2">
                <strong>Skills:</strong> {user.skills || "Not provided"}
            </div>
        </div>
    );
};

export default SingleUser;