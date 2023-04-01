import styles from "../../../styles/ImportData/importdata.module.scss";
import { ReactComponent as ImageIcon } from "../../../assets/ImageSquare.svg";
export default function ImportButton() {
    return (
        <div
            className={[
                styles.container,
                "flex justify-around items-center gap-10",
            ].join(" ")}
        >
            <div className={styles.icon}>
                <ImageIcon />
            </div>
            <div className={styles.title}>Choose Image</div>
        </div>
    );
}
