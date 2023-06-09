import { FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div>
            <div className="divider"></div>
            <div className="w-full text-center my-4">
                <button  className="btn btn-circle text-xl">
                    <FaGoogle className="text-red-600"></FaGoogle>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;