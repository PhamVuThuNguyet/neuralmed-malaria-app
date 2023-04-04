import ImportDataset from "./components/import";
import RecentFile from "./components/recent-file";
import styles from "../../styles/Home/home.module.scss";
import { recentFiles } from "../../data/recent-files";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles["import__button"]}>
        <Link to="/importdataset">
          {/* <input
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            id="import-button"
          /> */}
          <label htmlFor="import-button">
          <ImportDataset />
        </label>
        </Link>
      </div>
      <div className={styles["recent__title"]}>Recent Files</div>
      <div className={styles["recent__files"]}>
        {recentFiles.map((file) => (
          <RecentFile
            phonenum={file.phonenum}
            name={file.name}
            date={file.date}
          />
        ))}
      </div>
    </div>
  );
}
