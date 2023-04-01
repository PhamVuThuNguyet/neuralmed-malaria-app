import { ReactComponent as HouseIcon } from "../assets/House.svg";
import { ReactComponent as StackIcon } from "../assets/Stack.svg";
import { ReactComponent as SquaresIcon } from "../assets/SquaresFour.svg";
export const pages = [
    {
        to: "/",
        icon: <HouseIcon />,
        title: "Home",
    },
    {
        to: "/allrecords",
        icon: <StackIcon />,
        title: "All Records",
    },
    {
        to: "/dashboard",
        icon: <SquaresIcon />,
        title: "Dashboard",
    },
    {
        to: "/diagnosis",
        icon: <SquaresIcon />,
        title: "Diagnosis",
    },
];