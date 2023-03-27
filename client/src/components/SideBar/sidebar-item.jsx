import styles from "../../styles/SideBar/sidebar-item.module.scss";

export default function SidebarItem({ icon, title }) {
  return (
    <>
      <div className={["flex gap-6", styles["container"]].join(" ")}>
        <div className={styles.icon}>{icon}</div>
        <div className={styles.title}>{title}</div>
      </div>
    </>
  );
}
