import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import pic from '../../assets/login/Wavy_Gen-01_Single-07.jpg'
import SocialLogin from "../../Componets/Social/SocialLogin";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";


const SignUp = () => {
    const { register, handleSubmit, reset, formState: { errors }, watch } = useForm();

    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = (data) => {
        createUser(data.email, data.password, data.confirmPassword)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {

                        const saveUser = {name: data.name, email:data.email, photoURL:data.photoURL}

                        fetch('https://summer-camp-scl-server-tisha-akter.vercel.app/users',{
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset();
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'User created successfully',
                                        showConfirmButton: false,
                                        timer: 1500
                                    });

                                    navigate('/');
                                }
                            })



                    })
                    .catch(error => console.log(error))
            })


    };

    const password = watch("password");


    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <div className=" w-1/2 md:mr-12 mr-0">
                        <img src={pic} alt="" />
                    </div>

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 my-8 md:my-24">
                        <h1 className="text-3xl text-center font-bold text-violet-700 mt-6">Sign Up !!</h1>
                        <div className="card-body px-6 pb-6">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-control">
                                    <label className="label border-violet-700">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" {...register("name", { required: true })} name="name" placeholder="Your Name" className="input input-bordered border-violet-700" />

                                    {errors.name && <span className="text-red-600">Name is required</span>}
                                </div>

                                <div className="form-control">
                                    <label className="label border-violet-700">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered border-violet-700" />

                                    {errors.email && <span className="text-red-600">Email is required</span>}

                                </div>


                                <div className="form-control">
                                    <label className="label border-violet-700">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 20,
                                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                    })} placeholder="password" className="input input-bordered border-violet-700" />

                                    {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                    {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                    {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one upper case, one lower case, one number &one special character</p>}
                                    {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                                </div>

                                <div className="form-control">
                                    <label className="label border-violet-700">
                                        <span className="label-text">Confirm Password</span>
                                    </label>
                                    <input type="password" {...register("confirmPassword", {
                                        required: true,
                                        validate: (value) => value === password || "Password does not match"
                                    })} placeholder="confirm password" className="input input-bordered border-violet-700" />

                                    {errors.confirmPassword && <p className="text-red-600">{errors.confirmPassword.message}</p>}
                                </div>


                                <div className="form-control">
                                    <label className="label border-violet-700">
                                        <span className="label-text">Photo Url</span>
                                    </label>
                                    <input type="text" {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered border-violet-700" />

                                    {errors.photoUrl && <span className="text-red-600">Photo URL is required</span>}

                                </div>

                                <div className="form-control mt-6">
                                    <input type="submit" value="Sign Up" className="btn bg-violet-700" />
                                </div>
                            </form>
                            <p><small>Already have an account?
                                <Link to="/login">Login Now</Link>
                            </small></p>
                            <SocialLogin></SocialLogin>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
