import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt, FaUserCog, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";


const AllUsers = () => {

    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('https://summer-camp-scl-server-tisha-akter.vercel.app/users')
        return res.json();
    })


    const handleMakeAdmin = user => {
        fetch(`https://summer-camp-scl-server-tisha-akter.vercel.app/users/admin/${user._id}`, {
            method: 'PATCH'
        })

            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: `${user.name} is an Admin Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    const handleMakeInstructor = user => {
        fetch(`https://summer-camp-scl-server-tisha-akter.vercel.app/users/instructor/${user._id}`, {
            method: 'PATCH'
        })

            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: `${user.name} is an Instructor Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    const handleDelete = user => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://summer-camp-scl-server-tisha-akter.vercel.app/users/admin/${user._id}`, {
                    method: 'Delete'

                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }


    return (
        <div className="w-full">
            <h4 className="text-2xl font-bold text-violet-500 mt-24 mb-5">Total Users: {users.length}</h4>

            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role Admin</th>
                            <th>Role Instructor</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr
                                key={user._id}
                            >
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    {
                                        user.role === 'admin' ? 'admin' : <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost"><FaUserShield className="text-2xl text-green-500"></FaUserShield></button>

                                    }
                                </td>
                                <td>
                                    {
                                        user.role === 'instructor' ? 'instructor' : <button onClick={() => handleMakeInstructor(user)} >
                                            <FaUserCog className="text-purple-500 text-2xl"></FaUserCog>
                                        </button>
                                    }
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(user)} className="btn btn-ghost"><FaTrashAlt className="text-xl text-red-600"></FaTrashAlt></button>
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;