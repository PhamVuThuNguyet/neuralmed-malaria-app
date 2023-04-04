import React, { useState, useRef, useEffect } from "react";
import styles from "../../../../styles/Diagnosis/editing-canvas.module.scss";

export default function EditingCanvas(props) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const img = new Image();
    img.src = props.image;
    img.onload = () => {
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    };
  }, [props.image]);

  return (
    <>
      <div className={styles.container}>
        <p className={styles.title}>Image 1</p>
        <canvas id="main-canvas" ref={canvasRef}></canvas>
      </div>
    </>
  );
}
