import SidebarItem from "./sidebar-item";
import styles from "../../styles/SideBar/sidebar.module.scss";
import Logo from "./sidebar-logo";
import { Link } from "react-router-dom";
export default function SideBar(props) {
  return (
    <div className={styles.container}>
      <Logo />
      {props.pages.map((page) => (
        <Link to={page.to}>
          <SidebarItem
            key={page.title}
            icon={page.icon}
            title={page.title}
            to={page.to}
          />
        </Link>
      ))}
    </div>
  );
}
