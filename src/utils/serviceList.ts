import { ServiceListProps } from "../types";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { RiMentalHealthLine } from "react-icons/ri";
import { GiHealthNormal } from "react-icons/gi";
import { FaBalanceScale } from "react-icons/fa";
import { AiOutlineDollar } from "react-icons/ai";
import { MdOutlineDesignServices } from "react-icons/md";

const iconProps = { size: 100 };

const serviceList: ServiceListProps[] = [
    {
        category: "Technician",
        desc: "Explore technicians associated to electronics, plumbing and other such necessary operations",
        link: "",
        idx: 0,
        icon: HiOutlineWrenchScrewdriver(iconProps),
    },
    {
        category: "Health Care",
        desc: "Feeling sick? Want to get a checkup? Just click to explore our team of experienced doctors",
        link: "",
        idx: 1,
        icon: RiMentalHealthLine(iconProps),
    },
    {
        category: "Personnel Well Being",
        desc: "Stressed out at work? Want to get in shape? Want to get a massage? Just click to explore our team of experts",
        link: "",
        idx: 2,
        icon: GiHealthNormal(iconProps),
    },
    {
        category: "Legal Services",
        desc: "Want to get a legal advice? Just click to get any kind of legal help from our list of experienced lawyers",
        link: "",
        idx: 3,
        icon: FaBalanceScale(iconProps),
    },
    {
        category: "Financial Services",
        desc: "Are you confused where to invest for good returns? Just click to explore our associated mutual fund advisors",
        link: "",
        idx: 4,
        icon: AiOutlineDollar(iconProps),
    },
    {
        category: "Designing Services",
        desc: "Just click to explore our group of creative interior designers, logo creators and fulfil your needs",
        link: "",
        idx: 5,
        icon: MdOutlineDesignServices(iconProps),
    },
];

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
];

export { serviceList, breakPoints };
