import styles from "../../styles/SideBar/sidebar-item.module.scss";
import { useLocation } from "react-router-dom";
export default function SidebarItem(props) {
  const location = useLocation();
  return (
    <>
      <div
        className={[
          "flex gap-6",
          location.pathname === props.to
            ? styles["active-container"]
            : styles["container"],
        ].join(" ")}
      >
        <div
          className={
            location.pathname === props.to ? styles["active-icon"] : styles.icon
          }
        >
          {props.icon}
        </div>
        <div
          className={
            location.pathname === props.to
              ? styles["active-title"]
              : styles.title
          }
        >
          {props.title}
        </div>
      </div>
    </>
  );
}
