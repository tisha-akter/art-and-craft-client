import useClassesInfo from "../../../hooks/useClassesInfo";

const ManageClasses = () => {

    const [classesInfo] = useClassesInfo();



    return (
        <div className="w-full">

            <div className="overflow-x-auto mt-20">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th> Class Image </th>
                            <th>Class name</th>
                            <th>Instructor name</th>
                            <th> Instructor email</th>
                            <th>Available seats</th>
                            <th> Price</th>
                            <th>Status</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            classesInfo.map((item, index) => <tr key={item._id}>
                                <td>
                                    {index + 1}
                                </td>
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

                                <td className=""><div>{item.available_seats}</div></td>
                                <td className=""><div>{item.price} $</div></td>
                               
                               <td>
                                <div>
                                    Pending
                                </div>
                               </td>

                                <td>
                                    <div className="">
                                        <button className="btn btn-xs mb-1"> Approve</button>
                                        <button className="btn btn-xs mb-1">Approve</button>
                                        <button className="btn btn-xs mb-1">feedback </button>
                                    </div>
                                </td>

                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageClasses;