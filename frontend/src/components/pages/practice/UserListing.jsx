import SingleUser from "./SingleUser"

const UserListing = ({ users, deleteUser }) => {
    return (
        <>
            <h2 className="text-center font-semibold text-2xl">
                User Details
            </h2>
            <div className="flex justify-center items-center">
                <div className="my-7 grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3">
                    {users.map(user => (
                        <SingleUser
                            key={user.id}
                            user={user}
                            deleteUser={deleteUser}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

export default UserListing
