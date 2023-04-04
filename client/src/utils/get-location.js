import { useLocation } from "react-router-dom";

export const Pathname = () => {
    const location = useLocation();
    return location.pathname;
}