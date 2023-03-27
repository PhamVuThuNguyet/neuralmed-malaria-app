import styles from "../../styles/SideBar/sidebar-logo.module.scss";
import { ReactComponent as MenuIcon } from "../../assets/Menu.svg";
export default function Logo() {
  return (
    <>
      <div className={["flex justify-center items-center gap-12 h-36", styles["container"]].join(" ")}>
        <div className={styles.name}>NeuralMed</div>
        <div className={styles.icon}>
          <MenuIcon />
        </div>
      </div>
    </>
  );
}
