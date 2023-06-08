import { useEffect, useState } from "react";


const PopularClass = () => {

    const [popularClass, setPopularClass] = useState([]);
    useEffect(() => {
        fetch('popularclass.json')
            .then(res => res.json())
            .then((data) => {
                // Sort the classes based on the number of students
                const sortedClasses = data.sort((a, b) => b.number_of_students - a.number_of_students);

                const topClasses = sortedClasses.slice(0, 6);
                setPopularClass(topClasses);
            })
            .catch((error) => {
                console.error('Error fetching data from JSON:', error);
            });
    }, [])


    return (
        <div className="my-5">
            <div className=' text-center font-light text-gray-500 sm:text-lg dark:text-gray-400 py-5'>
                <h1 className="mb-4 text-4xl tracking-tight font-extrabold font-serif text-gray-900 dark:text-white">Popular <span className="text-violet-600">Class</span></h1>
                <p className="mb-5">Some of our popular classes based on the number of students.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-10">

                {popularClass.map(classData => (
                    <div className="card w-96 bg-base-100 shadow-xl" key={classData._id}>
                        <figure className="px-10 pt-10">
                            <img src={classData.image} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body">
                            <h2 className="text-center text-xl font-serif font-bold">{classData.class_name}</h2>
                            <p className="text-gray-700">{classData.description}</p>
                            
                                <h5><span className="font-bold  text-gray-500"> Number of students: </span>{classData.number_of_students}</h5>
                                <h5><span className="font-bold  text-gray-500">Available seats: </span> {classData.available_seats}</h5>
                                <h5><span className="font-bold  text-gray-500">Cost : </span>{classData.price}$</h5>

                            <div className="my-3 text-center items-center">
                                <button className="btn btn-primary btn-sm bg-violet-500 ">Enroll now!!</button>
                            </div>
                        </div>
                    </div>
                ))}

            </div>

        </div>
    );
};

export default PopularClass;