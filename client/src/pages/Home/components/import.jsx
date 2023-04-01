import styles from "../../../styles/Home/home-import-data.module.scss";
import { ReactComponent as ImportIcon } from "../../../assets/Import.svg";
export default function ImportDataset() {
  return (
    <div
      className={[
        styles.container,
        "flex justify-around items-center gap-10",
      ].join(" ")}
    >
      <div className={styles.icon}>
        <ImportIcon />
      </div>
      <div className={styles.title}>Import new dataset</div>
    </div>
  );
}
