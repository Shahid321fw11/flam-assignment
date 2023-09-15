import React, { useState } from "react";
import "./BottomSheet.css";

const BottomSheet = () => {
  const [sheetHeight, setSheetHeight] = useState(100);
  const [description, setDescription] = useState("Close");
  const [buttonStates, setButtonStates] = useState({
    open: false,
    halfOpen: false,
    close: true,
  });

  const handleOpen = () => {
    setSheetHeight(300);
    setDescription("Fully open");
    setButtonStates({ open: true, halfOpen: false, close: false });
  };

  const handleHalfOpen = () => {
    setSheetHeight(200);
    setDescription("Half-open");
    setButtonStates({ open: false, halfOpen: true, close: false });
  };

  const handleClose = () => {
    setSheetHeight(100);
    setDescription("Close");
    setButtonStates({ open: false, halfOpen: false, close: true });
  };

  return (
    <div className="bottom-sheet" style={{ height: `${sheetHeight}px` }}>
      <div className="handle">
        <button
          onClick={handleOpen}
          disabled={buttonStates.open}
          className={buttonStates.open ? "disabled" : ""}
        >
          Open
        </button>
        <button
          onClick={handleHalfOpen}
          disabled={buttonStates.halfOpen}
          className={buttonStates.halfOpen ? "disabled" : ""}
        >
          Half-open
        </button>
        <button
          onClick={handleClose}
          disabled={buttonStates.close}
          className={buttonStates.close ? "disabled" : ""}
        >
          Close
        </button>
      </div>
      <div className="description">{description}</div>
    </div>
  );
};

export default BottomSheet;
