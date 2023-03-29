import styles from "../../styles/Dashboard/dashboard-summary.module.scss";
export default function SummaryData(props) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{props.item.title}</div>
      <div
        className={[
          "flex justify-around items-center gap-2",
          styles["data"],
        ].join(" ")}
      >
        <div className={styles.icon}>{props.item.icon}</div>
        <div className={styles.total}>{props.item.total}</div>
      </div>
    </div>
  );
}
