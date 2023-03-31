import styles from "../../styles/ImageList/imagelist.module.scss";

export default function ImageItem(props) {
    return (
        <>
            <div className={styles["image-item"]}>
                <div className={styles["image-cont"]}>
                    <img src={props.url} alt={props.name} />
                </div>
                <p className={styles["image-title"]}>{props.name}</p>
            </div>
        </>
    );
}