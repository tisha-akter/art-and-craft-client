import { useContext } from "react";
import useClassesInfo from "../../../hooks/useClassesInfo";
import { AuthContext } from "../../../Providers/AuthProvider";
import { Link } from "react-router-dom";

const MyAddedClasses = () => {
    const [classesInfo, setClassesInfo] = useClassesInfo();
    const { user } = useContext(AuthContext);

    const instructorEmail = user.email;

    // total number of enrolled students for a class
    const TotalEnrolledStudents = (classId) => {
        const classInfo = classesInfo.find((item) => item._id === classId);
        if (classInfo && classInfo.number_of_students) {
            return classInfo.number_of_students.length;
        }
        return 0;
    };

    // Filter classesInfo array based on instructorEmail
    const instructorClasses = classesInfo.filter(
        (classItem) => classItem.email === instructorEmail
    );

    // Function to update classesInfo state with feedback
    const updateClassFeedback = (classId, feedback) => {
       
        setClassesInfo(prevClassesInfo => {
            const updatedClassesInfo = prevClassesInfo.map(classInfo => {
                if (classInfo._id === classId) {
                    return {
                        ...classInfo,
                        feedback: feedback || "No feedback provided"
                    };
                }
                return classInfo;
            });
            return updatedClassesInfo;
            
        });
    };

    return (
        <div>
            <div className=' text-center font-light text-gray-500 sm:text-lg dark:text-gray-400 py-5 mb-5'>
                <h1 className="mb-4 text-4xl tracking-tight font-extrabold font-serif text-gray-900 dark:text-white">Manage <span className="text-violet-600">Classes</span></h1>
                <p>Manage instructor post. You can approve or deny their post.</p>
            </div>
            {instructorClasses.length === 0 ? (
                <p>No classes added yet</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Class Name</th>
                                <th>Status</th>
                                <th>Total Enrolled Students</th>
                                <th>Feedback</th>
                                <th>Update</th>
                            </tr>
                        </thead>
                        <tbody>
                            {instructorClasses.map((classItem) => (
                                <tr key={classItem._id}>
                                    <td className="text-lg font-semibold">{classItem.class_name}</td>
                                    <td>{classItem.status}</td>
                                    <td className="text-center">{TotalEnrolledStudents(classItem._id)}</td>
                                    <td>
                                        {classItem.status === "denied" ? (
                                            classItem.feedback || "No feedback provided"
                                        ) : (
                                            "-"
                                        )}
                                    </td>
                                    <td>
                                        <Link to={`update-class/${classItem._id}`}>
                                            <button className=" btn btn-sm">Update</button>
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default MyAddedClasses;






