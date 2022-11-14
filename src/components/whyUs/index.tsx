import { MdEngineering } from "react-icons/md";
import { BsStars } from "react-icons/bs";
import { IoMdPricetags } from "react-icons/io";

const whyUsPoints = [
    { title: "Quality Services", description: "We offer quality services at ImproServ" },
    { title: "Affordable prices", description: "We offer affordable prices for each service" },
    { title: "Professional Help", description: "We offer professionals from different fields" },
];

const WhyUs = () => {
    return (
        <section id="whyus" className="gradient-background mt-4">
            <div className="py-16 px-4 sm:px-8 container">
                <h2 className="mb-12 text-center">Why Choose ImproServ ?</h2>
                <div className="flex flex-wrap gap-10 justify-center text-secondary-light items-stretch">
                    {whyUsPoints.map((point, idx) => (
                        <div key={idx} className="min-w-[15rem] p-6 rounded-md flex-1 flex flex-col items-center justify-center">
                            {idx === 0 ? <BsStars size={40} className="text-white block mx-auto mb-4" /> : null}
                            {idx === 1 ? <IoMdPricetags size={40} className="text-white block mx-auto mb-4" /> : null}
                            {idx === 2 ? <MdEngineering size={40} className="text-white block mx-auto mb-4" /> : null}
                            <h3 className="text-center mb-2 text-white">{point.title}</h3>
                            <p className="text-center">{point.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
