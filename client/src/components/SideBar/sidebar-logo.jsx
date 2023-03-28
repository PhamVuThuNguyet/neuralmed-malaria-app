import styles from "../../styles/SideBar/sidebar-logo.module.scss";
import { ReactComponent as MenuIcon } from "../../assets/NeuralMed.svg";
export default function Logo() {
  return (
    <>
      <div
        className={[
          "flex justify-around items-center gap-4 h-36",
          styles["container"],
        ].join(" ")}
      >
        <div className={styles.name}>NeuralMed</div>
        <div className={styles.icon}>
          <MenuIcon />
        </div>
      </div>
    </>
  );
}
