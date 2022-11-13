import { memo } from "react";
import { ServiceListProps } from "../../types";

interface ServiceProps {
    service: ServiceListProps;
    icon: any;
}

const Service = ({ service, icon }: ServiceProps) => {
    console.log(__dirname + " " + __filename);
    // eslint-disable-next-line
    const { category, desc, link, idx } = service;
    return (
        <article className="bg-[rgba(255,255,255,0.2)] backdrop-blur-2xl text-cyan-300 flex flex-col p-8 items-center justify-center gap-4 rounded-md max-w-[21rem] w-full shadow-sm transition-shadow duration-300 hover:shadow-2xl cursor-pointer">
            {/* icon type here */}
            {icon}
            <h3 className="text-center">{category}</h3>
            <p className="text-center text-white">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta, dolorum!</p>
            <button
                type="button"
                disabled={true}
                className="disabled bg-transparent border-2 border-cyan-300 text-cyan-300 py-3 px-6 rounded-md hover:none"
            >
                coming soon
            </button>
        </article>
    );
};

export default memo(Service);
