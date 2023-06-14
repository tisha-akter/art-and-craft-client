import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const MyEnrolledClasses = () => {
    const { user } = useContext(AuthContext);
    const [classesInfo, setClassesInfo] = useState([]);

    useEffect(() => {
        const fetchEnrolledClasses = async () => {
            try {
                const response = await fetch("https://summer-camp-scl-server-tisha-akter.vercel.app/enrolled-classes", {
                    method: "POST",
                    body: JSON.stringify({ userId: user.id }),
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                const data = await response.json();
                setClassesInfo(data.enrolledClasses);
            } catch (error) {
                console.error("Error fetching enrolled classes:", error);
            }
        };

        fetchEnrolledClasses();
    }, [user]);

    return (
        <div>
            <h2 className="text-center">My Enrolled Classes</h2>
            {classesInfo && classesInfo.length > 0 ? (
                classesInfo.map((classItem) => (
                    <div className="grid card w-96 bg-base-100 shadow-xl" key={classItem.id}>
                        <figure className="px-10 pt-10">
                            <img
                                src={classItem.image}
                                alt={classItem.class_name}
                                className="rounded-xl"
                            />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{classItem.class_name}</h2>
                            <p>Enrolled Students: {classItem.number_of_students}</p>
                        </div>
                    </div>
                ))
            ) : (
                <p>No classes selected after successful payment.</p>
            )}
        </div>
    );
};

export default MyEnrolledClasses;



