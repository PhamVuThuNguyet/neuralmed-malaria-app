import styles from "../../../../styles/Diagnosis/infolist.module.scss";

export default function InfoList(props) {
    return (
        <>
            <div className={styles["info-list"]}>
                <p>{props.info.id}</p>
                <p>{props.info.name}</p>
                <p>{props.info.age}</p>
                <p>{props.info.dob}</p>
                <p>{props.info.address}</p>
            </div>
        </>
    );
}