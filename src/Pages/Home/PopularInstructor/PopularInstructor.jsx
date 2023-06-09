import usePopularInfo from "../../../hooks/usePopularInfo";


const PopularInstructor = () => {


    const [popularInfo] = usePopularInfo();

    const sortedClasses = popularInfo.sort((a, b) => b.number_of_students - a.number_of_students);
    const topInstructors = sortedClasses.slice(0, 6);




    return (
        <div className="my-10">
            <div className=' text-center font-light text-gray-500 sm:text-lg dark:text-gray-400 py-5'>
                <h1 className="mb-4 text-4xl tracking-tight font-extrabold font-serif text-gray-900 dark:text-white">
                    Popular <span className="text-violet-600">Instructors</span>
                </h1>
                <p className="mb-5">Some of our popular classes based on the number of Instructors.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-14 mx-auto">

                {topInstructors.map(instructorData => (
                    <div className="card w-96 bg-base-100 border  border-violet-700" key={instructorData._id}>
                        <figure className="px-10 pt-10">
                            <img src={instructorData.instruc_img} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body">
                            <h2 className="text-center text-xl font-serif font-bold">{instructorData.instruc_name}</h2>
                            <h2 className="text-center text-xl font-serif font-bold">{instructorData.email}</h2>
                            <div className="my-3 text-center items-center">
                                <button className="btn btn-primary btn-sm bg-violet-500 ">See more!!</button>
                            </div>
                        </div>
                    </div>
                ))}

            </div>

        </div>
    );
};

export default PopularInstructor;