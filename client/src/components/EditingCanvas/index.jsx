import React, { useState, useRef } from 'react';

export default function EditingCanvas(props) {
    const [selectedImage, setSelectedImage] = useState(null);
    const [coordinates, setCoordinates] = useState([]);
    const [isDrawing, setIsDrawing] = useState(false);
    
    const [startX, setStartX] = useState(null);
    const [startY, setStartY] = useState(null);

    const canvasRef = useRef(null);


    function startDraw(e) {
        setIsDrawing(true);
        
        const canvas = canvasRef.current;
        const BB = canvas.getBoundingClientRect();

        const startx = e.clientX - BB.left;
        const starty = e.clientY - BB.top;

        setStartX(startx);
        setStartY(starty);

        console.log(startX, startY);

        console.log("start draw");
    }

    function drawing() {
        if(!isDrawing) return;
        console.log("test");
    }

    function stopDraw() {
        setIsDrawing(false);
        console.log("stop draw");
    }

    return(
        <>
            <div className="p-3">
                <p>Image 1</p>
                <canvas
                    id="main-canvas"
                    ref={canvasRef}
                    onMouseDown={startDraw}
                    onMouseUp={stopDraw}
                    onMouseMove={drawing}></canvas>
            </div>
        </>
    )
}