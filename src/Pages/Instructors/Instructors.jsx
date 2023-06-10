import useClassesInfo from "../../hooks/useClassesInfo";


const Instructors = () => {

    const [classesInfo, loading] = useClassesInfo();
    const sortedClasses = classesInfo.sort((a, b) => b.number_of_students - a.number_of_students);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="relative w-24 h-24 animate-spin rounded-full bg-gradient-to-r from-purple-400 via-blue-500 to-red-400">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gray-200 rounded-full border-2 border-white"></div>
                </div>
            </div>
        );
    }

    return (
        <div>
            <div className=' text-center font-light text-gray-500 sm:text-lg dark:text-gray-400 py-5'>
                <h1 className="mb-4 mt-28 text-4xl tracking-tight font-extrabold font-serif text-gray-900 dark:text-white">
                    All <span className="text-violet-600">Instructors</span>
                </h1>
                <p className="mb-5">Our art and craft school is home to a talented team of instructors who are passionate about teaching and guiding students in various artistic disciplines. With a wealth of experience and expertise, our instructors empower students to explore and express their creativity through clay art, painting, photography, and textile arts. Each instructor brings a unique artistic perspective, fostering a diverse and enriching learning environment. Whether you are a beginner or experienced artist, our instructors are dedicated to nurturing your artistic growth and helping you reach your full creative potential.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-14 mx-auto mb-20">

                {sortedClasses.map((instructor, index) => (
                    <div className="card w-96 bg-base-100 border  border-violet-700" key={index}>
                        <figure className="px-10 pt-10">
                            <img src={instructor.instruc_img} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body">
                            <h2 className=" font-serif font-bold">Instructor Name: {instructor.instruc_name}</h2>
                            <h2 className=" font-serif font-bold">Email:  {instructor.email}</h2>
                            <h2 className=" font-serif font-bold">Class Name: {instructor.class_name}</h2>
                            <div className="my-3">
                                <button className="btn btn-primary btn-sm bg-violet-500 ">See more!!</button>
                            </div>
                        </div>
                    </div>
                ))}

            </div>

        </div>
    );
};

export default Instructors;


