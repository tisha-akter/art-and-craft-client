import Swal from "sweetalert2";
import useClassesInfo from "../../../hooks/useClassesInfo";
import { useState } from "react";

const ManageClasses = () => {
    const [classesInfo, setClassesInfo] = useClassesInfo();
    const [loading, setLoading] = useState(false);

    const handleApprove = async (classId) => {
        setLoading(true);
        try {
            // Send a PATCH request to update the class status as "approved" in the backend
            await fetch(`http://localhost:5000/classesInfo/${classId}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ status: "approved" }),
            });

            // Update the class status in the local state
            const updatedClasses = classesInfo.map((item) => {
                if (item._id === classId) {
                    return { ...item, status: "approved" };
                }
                return item;
            });
            setClassesInfo(updatedClasses);
        } catch (error) {
            console.error("Error approving class:", error);
        }
        setLoading(false);
    };

    const handleDeny = async (classId) => {
        setLoading(true);
        try {
            // Send a PATCH request to update the class status as "denied" in the backend
            await fetch(`http://localhost:5000/classesInfo/${classId}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ status: "denied" }),
            });

            // Update the class status in the local state
            const updatedClasses = classesInfo.map((item) => {
                if (item._id === classId) {
                    return { ...item, status: "denied" };
                }
                return item;
            });
            setClassesInfo(updatedClasses);
        } catch (error) {
            console.error("Error denying class:", error);
        }
        setLoading(false);
    };

    const handleSendFeedback = (classId) => {
        Swal.fire({
            title: "Send Feedback",
            text: "Enter your feedback:",
            input: "textarea",
            showCancelButton: true,
            confirmButtonText: "Send",
            cancelButtonText: "Cancel",
            preConfirm: (feedback) => {
                // Handle feedback submission here
                console.log("Feedback:", feedback);
                // You can send the feedback and classId to the server or perform any other necessary actions
                console.log("Class ID:", classId);
            },
            allowOutsideClick: () => !Swal.isLoading(),
            showLoaderOnConfirm: true,
            inputValidator: (value) => {
                if (!value) {
                    return "Feedback is required!";
                }
            },
        });
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
                                    <div>
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
                                <td className="">
                                    <div>{item.available_seats}</div>
                                </td>
                                <td className="">
                                    <div>{item.price} $</div>
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
                                        <button
                                            className="btn btn-xs mb-1"
                                            onClick={() => handleSendFeedback(item._id)}
                                        >
                                            Feedback
                                        </button>
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
