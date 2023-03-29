import SidebarItem from "./sidebar-item";
import styles from "../../styles/SideBar/sidebar.module.scss";
import Logo from "./sidebar-logo";
export default function SideBar(props) {
  return (
    <div className={styles.container}>
      <Logo />
      {props.pages.map((page) => (
        <SidebarItem key={page.title} icon={page.icon} title={page.title} />
      ))}
    </div>
  );
}
