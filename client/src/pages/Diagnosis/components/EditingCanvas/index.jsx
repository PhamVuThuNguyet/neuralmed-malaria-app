import React, { useState, useRef, useEffect } from "react";
import styles from "../../../../styles/Diagnosis/editing-canvas.module.scss";

export default function EditingCanvas(props) {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [coordinates, setCoordinates] = useState([]);
  const [rmCoordinates, setRmCoordinates] = useState([]);

  const [startX, setStartX] = useState(null);
  const [startY, setStartY] = useState(null);
  const [canvas, setCanvas] = useState(null);
  const [ctx, setCtx] = useState(null);
  const [image, setImage] = useState(new Image());

  useEffect(() => {
    const canvas = canvasRef.current;
    setCanvas(canvas);
    const ctx = canvas.getContext("2d");
    setCtx(ctx);
    image.src = props.image;
    image.onload = () => {
      //reset
      setIsDrawing(false);
      setCoordinates([]);

      canvas.width = image.naturalWidth;
      canvas.height = image.naturalHeight;
      ctx.drawImage(image, 0, 0);
    };
  }, [props.image, image]);

  function drawImageToCanvas() {
    if (image === null || image === undefined) return;
    ctx.drawImage(image, 0, 0);
  }

  function startDraw(e) {
    const BB = canvas.getBoundingClientRect();
    const startx = e.clientX - BB.left;
    const starty = e.clientY - BB.top;

    setStartX(startx);
    setStartY(starty);
    setIsDrawing(true);
  }

  function stopDraw(e) {
    const size = drawBB(e);

    setCoordinates((prevCoordinates) => [
      ...prevCoordinates,
      { x: startX, y: startY, by: "Doctor", w: size.w, h: size.h },
    ]);

    setIsDrawing(false);
  }

  function drawing(e) {
    if (!isDrawing) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawImageToCanvas();
    drawBB(e);
  }

  function drawBB(e) {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    drawOldBB();

    const BB = canvas.getBoundingClientRect();
    const endX = e.clientX - BB.left;
    const endY = e.clientY - BB.top;

    const width = endX - startX;
    const height = endY - startY;

    ctx.lineWidth = 5;
    ctx.strokeStyle = "#0fa";
    ctx.strokeRect(startX, startY, width, height);
    ctx.fillStyle = "#0fa";
    ctx.fillRect(startX - 2.5, startY - 20, 65, 20);

    ctx.fillStyle = "#fff";
    ctx.font = "18px consolas";
    ctx.fillText("Doctor", startX + 2.5, startY - 5);

    return { w: width, h: height };
  }

  function drawOldBB() {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    coordinates.forEach((element) => {
      ctx.lineWidth = 5;
      ctx.strokeStyle = "#0fa";
      ctx.strokeRect(element.x, element.y, element.w, element.h);
      ctx.fillStyle = "#0fa";
      ctx.fillRect(element.x - 2.5, element.y - 20, 65, 20);

      ctx.fillStyle = "#fff";
      ctx.font = "18px consolas";
      ctx.fillText("Doctor", element.x + 2.5, element.y - 5);
    });
  }

  function handleKeyDown(e) {
    if (e.key === "z") {
      let temp = coordinates.pop();
      setRmCoordinates((prev) => [...prev, temp]);
      drawImageToCanvas();
      drawOldBB();
    }

    if (e.key === "y") {
      let temp = rmCoordinates.pop()
      setCoordinates((prev) => [...prev, temp]);
      drawImageToCanvas();
      drawOldBB();
    }
  }

  return (
    <>
      <div className={styles.container}>
        <p className={styles["canvas-title"]}>Image 1</p>
        <div className={styles["canvas-cont"]}>
          <canvas
            id="main-canvas"
            ref={canvasRef}
            className={styles["main-canvas"]}
            onMouseDown={startDraw}
            onMouseUp={stopDraw}
            onMouseMove={drawing}
            onKeyDown={handleKeyDown}
            tabIndex="0"
          ></canvas>
        </div>
      </div>
    </>
  );
}
