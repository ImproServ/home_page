import { useNavigate } from "react-router-dom";
import ErrorImage from "../../assets/error.png";

const Error = () => {
    const navigate = useNavigate();
    return (
        <section className="min-h-screen flex flex-col items-center justify-center">
            <img className="max-w-[35rem] w-full" src={ErrorImage} alt={ErrorImage} />
            <h2 className="text-center text-[#b7b7b7]">This page does not exist</h2>
            <button className="mt-10" type="button" onClick={() => navigate("/", { replace: true })}>
                Back to ImproServ
            </button>
        </section>
    );
};

export default Error;
