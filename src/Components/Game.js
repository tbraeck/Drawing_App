import { ReactSketchCanvas } from "react-sketch-canvas";
import { useRef, useState } from "react";
import ColorPicker from "./ColorPicker"
import Header from "./Header";

const Game = () => {
   
      const canvasRef = useRef(null);
      const [eraseMode, setEraseMode] = useState(false);
      const [penColor, setPenColor] = useState("#000000");
      const [brushSize, setBrushSize] = useState(10);
      
    
      const handleEraserClick = () => {
        setEraseMode(true);
        canvasRef.current?.eraseMode(true);
      };
    
      const handlePenClick = () => {
        setEraseMode(false);
        canvasRef.current?.eraseMode(false);
      };
    
      const handleUndoClick = () => {
        canvasRef.current?.undo();
      };
    
      const handleRedoClick = () => {
        canvasRef.current?.redo();
      };
    
      const handleClearClick = () => {
        canvasRef.current?.clearCanvas();
      };
    
      const handleBrushSizeChange = (event) => {
        const size = parseInt(event.target.value);
        setBrushSize(size);
    
        if (eraseMode) {
          canvasRef.current?.eraseMode(true, { size: size }); // For eraser
        } else {
          canvasRef.current?.eraseMode(false, { size: size }); // For pen
        }
      };
    
      const handleColorChange = (color) => {
        setPenColor(color);
      };
    
      return (
        <>
          <div style={{justifyContent: "center", alignContent: "center"}}>
            <Header style={{justifyContent: "center", alignContent: "center"}}/>
          </div>
       
        <div className="d-flex flex-column gap-2 p-2" style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", width: "cover" }}>
          <div className="container" style={{ width: "cover", justifyContent: "left", marginRight: "60px" }}>
            <button
              type="button"
              className="button-shrink"
              disabled={!eraseMode}
              onClick={handlePenClick}
            >
              Pen
            </button>
            <button
              type="button"
              className="btn btn-sm btn-outline-primary"
              disabled={eraseMode}
              onClick={handleEraserClick}
            >
              Eraser
            </button>
            <div className="vr" />
            <button
              type="button"
              className="btn btn-sm btn-outline-primary"
              onClick={handleUndoClick}
            >
              Undo
            </button>
            <button
              type="button"
              className="btn btn-sm btn-outline-primary"
              onClick={handleRedoClick}
            >
              Redo
            </button>
            <button
              type="button"
              className="btn btn-sm btn-outline-primary"
              onClick={handleClearClick}
            >
              Clear
            </button>
            <input
            style={{border: '1px solid', borderColor: "black", borderWidth: "3px"}}
              type="range"
              min="1"
              max="40"
              value={brushSize}
              onChange={handleBrushSizeChange}
            />
            <span style={{ marginLeft: "10px" }}>{brushSize}px</span>
            <ColorPicker chosenColor={penColor} onColorChange={handleColorChange} />
          </div>
          <div style={{ marginTop: "30px" }}>
            <ReactSketchCanvas ref={canvasRef} strokeColor={penColor} strokeWidth={brushSize} style={{ height: "500px", width: "800px", border: "5px", borderStyle: "solid", borderColor: "black", marginLeft: "1 50px" }} />
          </div>
        </div>
    
        </>
      );
    }
export default Game
