import { serviceList } from "../../../utils/serviceList";
import Service from "./service";

const Services = () => {
    return (
        <section className="p-4 " id="services">
            <div className="container pb-12">
                <h2 className="m-12 pt-16 text-center">Services</h2>
                <div className="flex flex-wrap items-stretch justify-center gap-10 mt-8 mb-16">
                    {serviceList.map((service, idx) => (
                        <Service service={service} key={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
