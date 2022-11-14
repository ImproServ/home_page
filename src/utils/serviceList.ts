import { ServiceListProps } from "../types";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { RiMentalHealthLine } from "react-icons/ri";
import { GiHealthNormal } from "react-icons/gi";
import { FaBalanceScale } from "react-icons/fa";
import { AiOutlineDollar } from "react-icons/ai";
import { MdOutlineDesignServices } from "react-icons/md";

const iconProps = { size: 100 };

const serviceList: ServiceListProps[] = [
    { category: "Technician", desc: "hjjdhohd", link: "", idx: 0, icon: HiOutlineWrenchScrewdriver(iconProps) },
    { category: "Health Care", desc: "hjjdhohd", link: "", idx: 1, icon: RiMentalHealthLine(iconProps) },
    { category: "Personnel Well Being", desc: "hjjdhohd", link: "", idx: 2, icon: GiHealthNormal(iconProps) },
    { category: "Legal Services", desc: "hjjdhohd", link: "", idx: 3, icon: FaBalanceScale(iconProps) },
    { category: "Financial Services", desc: "hjjdhohd", link: "", idx: 4, icon: AiOutlineDollar(iconProps) },
    { category: "Designing Services", desc: "hjjdhohd", link: "", idx: 5, icon: MdOutlineDesignServices(iconProps) },
];

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
];

export { serviceList, breakPoints };
