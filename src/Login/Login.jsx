import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import pic from '../assets/login/Wavy_Gen-01_Single-07.jpg'
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    const handleLogin = (data) => {
        console.log(data);
    };

    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <div className=" w-1/2 md:mr-12 mr-0">
                        <img src={pic} alt="" />
                    </div>

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <h1 className="text-3xl text-center font-bold text-violet-700 my-6">Login now!</h1>
                        <div className="card-bod px-6 py-6">

                            <form onSubmit={handleSubmit(handleLogin)}>
                                <div className="form-control">
                                    <label className="label  border-violet-700">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered border-violet-700" />

                                    {errors.email && <span className="text-red-600">Email is required</span>}
                                </div>

                                <div className="form-control">
                                    <label className="label  border-violet-700">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <div className='relative w-full'>
                                        <input type={showPassword ? 'text' : 'password'}
                                            {...register("password", {
                                                required: true,
                                                minLength: 6,
                                                maxLength: 20,
                                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                            })} placeholder="password" className="input input-bordered w-full border-violet-700" />

                                        <span className="absolute top-3 right-0 pr-3">
                                            {showPassword ? (
                                                <FaEyeSlash className="h-6 text-gray-700 cursor-pointer" onClick={handleTogglePassword} />
                                            ) : (
                                                <FaEye className="h-6 text-gray-700 cursor-pointer" onClick={handleTogglePassword} />
                                            )}
                                        </span>
                                    </div>

                                    {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                    {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                    {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one upper case, one lower case, one number &one special character</p>}
                                    {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                                </div>

                                <div className="form-control mt-6">
                                    <input type="submit" value="login" className="btn bg-violet-700" />
                                </div>
                            </form>

                            <p><small>Do not have any account?
                                <Link to="/signup">Sign Up</Link>
                            </small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;