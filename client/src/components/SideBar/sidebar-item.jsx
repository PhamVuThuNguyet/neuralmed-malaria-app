import styles from "../../styles/SideBar/sidebar-item.module.scss";
import { Pathname } from "../../utils/get-location";
export default function SidebarItem(props) {
  const pathname = Pathname();
  return (
    <>
      <div
        className={[
          "flex gap-6",
          pathname === props.to
            ? styles["active-container"]
            : styles["container"],
        ].join(" ")}
      >
        <div
          className={
            pathname === props.to ? styles["active-icon"] : styles.icon
          }
        >
          {props.icon}
        </div>
        <div
          className={
            pathname === props.to ? styles["active-title"] : styles.title
          }
        >
          {props.title}
        </div>
      </div>
    </>
  );
}
