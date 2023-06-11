import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';

const AddClass = () => {
    const { register, handleSubmit } = useForm();
    const { user } = useContext(AuthContext);

    const instructor = {
        displayName: user?.displayName || '',
        email: user?.email || '',
    };

    const onSubmit = data => {
        const newClass = {
            class_name: data.class_name,
            description: data.description,
            image: data.image,
            number_of_students: data.number_of_students,
            available_seats: data.available_seats,
            price: data.price,
            instruc_name: instructor.displayName,
            instruc_img: instructor.image,
            email: instructor.email,
        };

        fetch('http://localhost:5000/classesInfo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newClass),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Class created successfully:', data);
            })
            .catch(error => {
                console.error('Error creating class:', error);
            });
    };

    return (
        <div className='w-full px-10 mt-10'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control mb-4 mx-4">
                    <label className="label">
                        <span className="label-text font-semibold">Instructor Name*</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Instructor Name"
                        value={instructor.displayName}
                        readOnly
                        className="input input-bordered"
                    />
                </div>

                <div className="form-control mb-4 mx-4">
                    <label className="label">
                        <span className="label-text font-semibold">Instructor Email*</span>
                    </label>
                    <input
                        type="email"
                        placeholder="Instructor Email"
                        value={instructor.email}
                        readOnly
                        className="input input-bordered"
                    />
                </div>

                <div className="form-control mb-4 mx-4">
                    <label className="label">
                        <span className="label-text font-semibold">Class Name*</span>
                    </label>
                    <input
                        type="text"
                        {...register("class_name", { required: true })}
                        placeholder="Class Name"
                        className="input input-bordered"
                    />
                </div>

                <div className="form-control mb-4 mx-4">
                    <label className="label">
                        <span className="label-text font-semibold">Description*</span>
                    </label>
                    <textarea
                        {...register("description", { required: true })}
                        className="textarea textarea-bordered h-24"
                        placeholder="Class Description"
                    ></textarea>
                </div>

                <div className="form-control mb-4 mx-4">
                    <label className="label">
                        <span className="label-text font-semibold">Image URL*</span>
                    </label>
                    <input
                        type="text"
                        {...register("image", { required: true })}
                        placeholder="Image URL"
                        className="input input-bordered"
                    />
                </div>

                <div className="form-control mb-4 mx-4">
                    <label className="label">
                        <span className="label-text font-semibold">Number of Students*</span>
                    </label>
                    <input
                        type="number"
                        {...register("number_of_students", { required: true })}
                        placeholder="Number of Students"
                        className="input input-bordered"
                    />
                </div>

                <div className="form-control mb-4 mx-4">
                    <label className="label">
                        <span className="label-text font-semibold">Available Seats*</span>
                    </label>
                    <input
                        type="number"
                        {...register("available_seats", { required: true })}
                        placeholder="Available Seats"
                        className="input input-bordered"
                    />
                </div>

                <div className="form-control mb-4 mx-4">
                    <label className="label">
                        <span className="label-text font-semibold">Price*</span>
                    </label>
                    <input
                        type="number"
                        {...register("price", { required: true })}
                        placeholder="Price"
                        className="input input-bordered"
                    />
                </div>

                <input className="btn btn-sm mt-4 ml-4" type="submit" value="Add Class" />
            </form>
        </div>
    );
};

export default AddClass;
