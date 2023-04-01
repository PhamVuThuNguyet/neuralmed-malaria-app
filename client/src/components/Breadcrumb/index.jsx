import styles from "../../styles/Breadcrumb/breadcrumb.module.scss";
import { Pathname } from "../../utils/get-location";
import { ReactComponent as MainLogo } from "../../assets/Logo.svg";
export default function BreadCrumb({ data }) {
  const pathname = Pathname();
  return (
    <div>
      <div className={styles.container}>
        <span>{data}</span>
      </div>
      <div className={pathname === "/" ? styles["main-logo"] : "hidden"}>
        <MainLogo />
      </div>
    </div>
  );
}
