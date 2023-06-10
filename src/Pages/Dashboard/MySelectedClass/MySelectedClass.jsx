import { Link } from "react-router-dom";
import useSelectedClass from "../../../hooks/useSelectedClass";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const MySelectedClass = () => {

    const [classCart, refetch] = useSelectedClass();
    console.log(classCart);
    const total = classCart.reduce((sum, item) => item.price + sum, 0)

    
    const handleDelete = item => {
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
                fetch(`http://localhost:5000/selectedClasses/${item._id}`, {
                    method: 'DELETE'

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
        <div>
            <div className="uppercase font-bold flex justify-evenly">
                <h3 className="text-3xl">Total classes: {classCart.length}</h3>
                <h3 className="text-3xl">Total Price: {total}</h3>
                <Link to="/dashboard/payment">
                    <button className="btn bg-purple-300 btn-sm ml-3">Pay</button>
                </Link>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Class Image</th>
                            <th>Class Name</th>
                            <th>User Email</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            classCart.map((item, index) => <tr
                                key={item._id}
                            >
                                <td>
                                    {index + 1}
                                </td>
                                <td>

                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>

                                </td>
                                <td>
                                    <h2 className="text-black">{item.name}</h2>
                                </td>
                                <td>
                                    {item.email}
                                </td>
                                <td className="text-end">${item.price}</td>
                                <td>
                                    <button onClick={() => handleDelete(item)} className="btn btn-ghost "><FaTrashAlt></FaTrashAlt></button>
                                </td>
                            </tr>)
                        }


                    </tbody>


                </table>
            </div>
        </div>


    );
};

export default MySelectedClass;