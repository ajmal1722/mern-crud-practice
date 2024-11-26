import React from 'react';

const SingleUser = ({ user }) => {
    return (
        <div className="border rounded-md shadow-md p-5 m-5 max-w-md mx-auto">
            <h2 className="text-lg font-bold mb-2">User Details</h2>
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