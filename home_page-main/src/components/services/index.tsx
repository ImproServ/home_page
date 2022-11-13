import Service from "./service";
import serviceList from "../../utils/serviceList";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { RiMentalHealthLine } from "react-icons/ri";
import { GiHealthNormal } from "react-icons/gi";
import { FaBalanceScale } from "react-icons/fa";
import { AiOutlineDollar } from "react-icons/ai";
import { MdOutlineDesignServices } from "react-icons/md";

const Services = () => {
    console.log(__dirname + " " + __filename);

    const deliverIcon = (idx: number) => {
        switch (idx) {
            case 0:
                return <HiOutlineWrenchScrewdriver size={100} />;
            case 1:
                return <RiMentalHealthLine size={100} />;
            case 2:
                return <GiHealthNormal size={100} />;
            case 3:
                return <FaBalanceScale size={100} />;
            case 4:
                return <AiOutlineDollar size={100} />;
            case 5:
                return <MdOutlineDesignServices size={100} />;
            default:
                return <></>;
        }
    };

    return (
        <section className="p-4 " id="services">
            <div className="container pb-12">
                <h2 className="m-12 pt-16 text-center">Services</h2>
                <div className="flex flex-wrap items-stretch justify-center gap-10 mt-8 mb-16">
                    {serviceList.map((service, idx) => (
                        <Service service={service} key={idx} icon={deliverIcon(idx)} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
