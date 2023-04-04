import styles from "../../../styles/Home/home-recent-file.module.scss";
import { ReactComponent as StackIcon } from "../../../assets/StackFile.svg";
export default function RecentFile(props) {
  return (
    <div className={styles.container}>
      <div className="flex items-center gap-7">
        <div className={styles.icon}>
          <StackIcon />
        </div>
        <div className={styles.patient}>
          <div className={styles["patient__phonenum"]}>{props.phonenum}</div>
          <div className={styles["patient__name"]}>{props.name}</div>
        </div>
      </div>
      <div className={styles.date}>{props.date}</div>
    </div>
  );
}
