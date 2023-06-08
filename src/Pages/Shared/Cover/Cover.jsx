

const Cover = ({ img }) => {
    return (
        <div className="hero h-[400px] mb-4" style={{ backgroundImage: `url("${img}")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    {/* <h1 className="mb-5 text-5xl font-bold uppercase">Welcome to our popular classes section!</h1> */}
                    <p className="mb-5">Art and craft: Expressions of creativity, beauty, and cultural heritage intertwined in tangible forms.</p>
                </div>
            </div>
        </div>
    );
};

export default Cover;