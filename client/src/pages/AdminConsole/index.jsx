import { React } from "react";
import SummaryData from "./Components/summary-data";
import { data } from "../../data/admin-console";
import DoctorRegister from "./Components/doctor-register-form";
import styles from "../../styles/AdminConsole/adminconsole-doctor-register.module.scss";
import DropMenu from "./Components/drop-down-menu";
export default function AdminConsole() {
  return (
    <div className="grid grid-cols-2">
      <div className={styles.summary__items__container}>
        {data.map((item) => (
        <SummaryData item={item} />
        ))}   
      </div>
      <div className={styles.form__container}>
        <div className={styles.label__container}>
          <div className={styles.content__label__container}>
            <label className={styles.title}>Create</label>
            <DropMenu className = {styles.dropmenu}></DropMenu>
          </div>
        </div>
        <DoctorRegister />
      </div>
    </div>
  );
}