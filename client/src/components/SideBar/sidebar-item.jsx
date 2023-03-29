import styles from "../../styles/SideBar/sidebar-item.module.scss";

export default function SidebarItem(props) {
  return (
    <>
      <div className={["flex gap-6", styles["container"]].join(" ")}>
        <div className={styles.icon}>{props.icon}</div>
        <div className={styles.title}>{props.title}</div>
      </div>
    </>
  );
}
