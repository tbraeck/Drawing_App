import { ReactSketchCanvas } from "react-sketch-canvas";
import { useRef, useState } from "react";
import ColorPicker from "./Components/ColorPicker";

function App() {
  const canvasRef = useRef(null);
  const [eraseMode, setEraseMode] = useState(false);
  const [penColor, setPenColor] = useState("#000000"); // Default pen color

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

  const handleResetClick = () => {
    canvasRef.current?.resetCanvas();
  };

  const handleColorChange = (color) => {
    setPenColor(color);
  };

  return (
    <div className="d-flex flex-column gap-2 p-2" style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", width: "cover"}}>
      {/* <h1>Tools</h1> */}
      <div className="container" style={{width: "cover", justifyContent: "left", marginRight: "60px"}}>
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
        {/* <button
          type="button"
          className="btn btn-sm btn-outline-primary"
          onClick={handleResetClick}
        >
          Reset
        </button> */}
        <ColorPicker chosenColor={penColor} onColorChange={handleColorChange}  />
      </div>
      <div style={{marginTop: "30px"}}>
        
        <ReactSketchCanvas ref={canvasRef} strokeColor={penColor} style={{height: "500px", width: "800px",border: "5px", borderStyle: "solid", borderColor: "black", marginLeft: "1 50px"}}/>
      </div>
     
    </div>
  );
}

export default App;
