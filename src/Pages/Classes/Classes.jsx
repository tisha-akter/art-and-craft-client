import useClassesInfo from "../../hooks/useClassesInfo";


const Classes = () => {

    const [classesInfo, loading] = useClassesInfo();
    const sortedClasses = classesInfo.sort((a, b) => b.number_of_students - a.number_of_students);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="relative w-24 h-24 animate-spin rounded-full bg-gradient-to-r from-purple-400 via-blue-500 to-red-400">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gray-200 rounded-full border-2 border-white">
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div>
            <div className=' text-center font-light text-gray-500 sm:text-lg dark:text-gray-400 py-5'>
                <h1 className="mb-4 mt-28 text-4xl tracking-tight font-extrabold font-serif text-gray-900 dark:text-white">Popular <span className="text-violet-600">Class</span></h1>
                <p className="mb-5">
                    Discover the world of art and craft at our school, where creativity knows no bounds. Our diverse range of classes offers something for everyone, including our popular weaving class. Unleash your imagination as you learn the ancient art of weaving, creating intricate and beautiful textiles with your own hands. Our experienced instructors will guide you through the techniques and tools of the trade, helping you master the art of weaving and unlock your creative potential. Whether you are a novice or have some experience, our weaving class welcomes all skill levels. Join us and embark on a journey of artistic expression, where threads come alive and your creations become works of art
                </p>
            </div>
            <div className="grid md:grid-cols-3 gap-14 mx-auto mb-20">

                {sortedClasses.map((classes, index) => (
                    <div className="card w-96 bg-base-100 shadow-xl" key={index}>
                        <figure className="px-10 pt-10">
                            <img src={classes.image} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body">
                            <h2 className="text-center text-xl font-serif font-bold">{classes.class_name}</h2>
                            <p className="text-gray-700">{classes.description}</p>

                            <h5><span className="font-bold  text-gray-500"> Number of students: </span>{classes.number_of_students}</h5>
                            <h5><span className="font-bold  text-gray-500">Available seats: </span> {classes.available_seats}</h5>
                            <h5><span className="font-bold  text-gray-500">Cost : </span>{classes.price}$</h5>

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

export default Classes;