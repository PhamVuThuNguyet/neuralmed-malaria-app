import { useState } from "react";
import styles from "../../../../styles/Diagnosis/imagelist.module.scss";
import ImageItem from "./image-item";

export default function ImageList(props) {
  return (
    <>
      <div className={styles["image-list"]}>
        {props.images.map((img) => (
          <ImageItem
            key={img.id}
            url={img.url}
            name={img.name}
            onClick={props.onClick}
          />
        ))}
      </div>
    </>
  );
}
