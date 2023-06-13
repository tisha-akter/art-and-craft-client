import Swal from "sweetalert2";
import useClassesInfo from "../../../hooks/useClassesInfo";
import { useState } from "react";
import axios from "axios";

const ManageClasses = () => {
    const [classesInfo, setClassesInfo] = useClassesInfo();
    const [loading, setLoading] = useState(false);


    // for approve the class 
    const handleApprove = async (classId) => {
        setLoading(true);

        const url = `http://localhost:5000/classesInfo/update/status/${classId}`;
        const payload = { status: 'approved' };

        try {
            await axios.patch(url, payload);
            setLoading(false);
            
            Swal.fire({
                icon: 'success',
                text: 'Class approved successfully!',
                timer: 1500,
                showConfirmButton: false,
            });
        } catch (error) {
            console.error('Error approving class:', error);
            setLoading(false);
            // Show error message
            Swal.fire({
                icon: 'error',
                text: 'Failed to approve class',
            });
        }
    };



    // for deny the class 
    const handleDeny = async (classId) => {
        setLoading(true);

        try {
            //  modal for the admin to enter feedback
            const { value: feedback, dismiss: isCancelled } = await Swal.fire({
                title: 'Provide Feedback',
                input: 'text',
                inputLabel: 'Feedback',
                inputPlaceholder: 'Enter feedback message (optional)',
                showCancelButton: true,
                cancelButtonText: 'Cancel',
                confirmButtonText: 'Submit',
            });

            // if the admin provided feedbak update the class status to denied
            if (!isCancelled) {
                const url = `http://localhost:5000/classesInfo/update/status/${classId}`;
                const payload = {
                    status: 'denied',
                    feedback: feedback || '',
                };

                await axios.patch(url, payload);

                
                Swal.fire({
                    icon: 'success',
                    text: 'Class denied successfully!',
                    timer: 1500,
                    showConfirmButton: false,
                });
            }
        } catch (error) {
            console.error('Error denying class:', error);

            
            Swal.fire({
                icon: 'error',
                text: 'Failed to deny class',
            });
        } finally {
            setLoading(false);
        }
    };



    return (
        <div className="w-full">
            <div className="overflow-x-auto mt-20">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Class Image</th>
                            <th>Class name</th>
                            <th>Instructor name</th>
                            <th>Instructor email</th>
                            <th>Available seats</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {classesInfo.map((item, index) => (
                            <tr key={item._id}>
                                <td>{index + 1}</td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="w-24">
                                        <div>{item.class_name}</div>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <div>{item.instruc_name}</div>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <div>{item.email}</div>
                                    </div>
                                </td>
                                <td className="text-center">
                                    <div>{item.available_seats}</div>
                                </td>
                                <td className="">
                                    <div>{item.price}$</div>
                                </td>
                                <td>
                                    <div>{item.status}</div>
                                </td>
                                <td>
                                    <div className="">
                                        {item.status === "pending" && (
                                            <>
                                                <button
                                                    className="btn btn-xs mb-1"
                                                    disabled={loading}
                                                    onClick={() => handleApprove(item._id)}
                                                >
                                                    Approve
                                                </button>
                                                <button
                                                    className="btn btn-xs mb-1"
                                                    disabled={loading}
                                                    onClick={() => handleDeny(item._id)}
                                                >
                                                    Deny
                                                </button>
                                            </>
                                        )}

                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageClasses;
