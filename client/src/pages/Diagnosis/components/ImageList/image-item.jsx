import styles from "../../../../styles/Diagnosis/imagelist.module.scss";

export default function ImageItem(props) {
    const handleClick = (image) => {
        props.onClick(image);
      };

  return (
    <>
      <div className={styles["image-item"]}>
        <div className={styles["image-cont"]}>
          <img
            src={props.url}
            alt={props.name}
            onClick={() => handleClick(props.url)}
          />
        </div>
        <p className={styles["image-title"]}>{props.name}</p>
      </div>
    </>
  );
}
