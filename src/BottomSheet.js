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
    setDescription(
      "I'm thrilled about the opportunity to join Flam, as it perfectly complements my passion for crafting elegant and responsive web applications. My proficiency in React, coupled with a keen design sensibility, positions me to actively contribute to Flam's mission of delivering outstanding user experiences through innovative technology"
    );
    setButtonStates({ open: true, halfOpen: false, close: false });
  };

  const handleHalfOpen = () => {
    setSheetHeight(200);
    setDescription(
      "At Flam, we are reimagining digital experiences via AI stack. We believe that the future of physical and digital content is immersive. With our proprietary AI image recognition, gen AI mocap, and AI avatar tech, we are democratizing 3D XR content creation and camera-first consumption at scale."
    );
    setButtonStates({ open: false, halfOpen: true, close: false });
  };

  const handleClose = () => {
    setSheetHeight(100);
    setDescription("Let's Start");
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
