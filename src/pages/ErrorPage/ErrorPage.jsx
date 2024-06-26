// import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="h-screen flex justify-center items-center">
            <div>
                    <img className="w-90 h-80 " src="https://i.ibb.co/j4JfZxw/error.gif" alt="" />
                    <h2 className=" text-lg text-center font-semibold text-black ml-6 mb-5">Oops!!! Not found the page</h2>
                {/* <div className="flex justify-center items-center">
                    <Link to="/"><button className="btn  bg-[#C2A973] text-white ">Go back to home</button></Link>
                </div> */}
            </div>
        </div>
    );
};

export default ErrorPage;