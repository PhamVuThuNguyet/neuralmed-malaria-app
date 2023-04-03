import styles from "../../../styles/AdminConsole/adminconsole-summary.module.scss";
import { Button } from "antd";

export default function SummaryData(props) {
  return (
    <div className="space-y-10">
      <div className={styles.container}>
        <div className={styles.title}>{props.item.title}</div>
          <div
            className={[
            "flex space-y-6 justify-around items-center",
            styles["data"],
            ].join(" ")}
          >
            <div className={styles.icon}>{props.item.icon}</div>
            <div className={styles.total}>{props.item.total}</div>
          </div>
      </div>
      <div className={styles.button}>
        <Button
         type="primary"
         onClick=""
         size="large"
         >
         Manage
         </Button>
      </div>
    </div>
  );
}