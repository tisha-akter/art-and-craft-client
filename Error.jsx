import { Link } from "react-router-dom";
import { Player } from '@lottiefiles/react-lottie-player';


const Error = () => {
    return (
        <div>
            <div className='container mx-auto mt-16 mb-5'>

                <Player
                    src='https://assets2.lottiefiles.com/packages/lf20_zyu0ctqb.json'
                    className="player"
                    loop
                    autoplay
                    style={{ height: '500px', width: '500px' }}
                />

                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <Link to='/'>
                            <button className="btn btn-sm text-violet-600 font-bold text-xl">GO Back</button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Error;