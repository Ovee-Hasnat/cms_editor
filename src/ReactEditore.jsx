import { useState } from "react";
import { EditorBlockWrapper, useDraggable } from "react-web-editor";

const ReactEditore = () => {
  const [componentStyle, setComponentStyle] = useState({
    width: 20,
    height: 40,
    top: 40,
    left: 40,
  });
  // this state can be used for your own component.
  const {
    handleDragEnd, // onMouseUp handler
    handleDragStart, // onMouseDown handler
  } = useDraggable({
    ...componentStyle,
    onDrag: setComponentStyle,
    unit: "px",
  });
  return (
    <>
      <EditorBlockWrapper
        width={componentStyle.width}
        height={componentStyle.height}
        top={componentStyle.top}
        left={componentStyle.left}
        onMouseDown={handleDragStart}
        onMouseUp={handleDragEnd}
      >
        <div>Hello</div>
      </EditorBlockWrapper>{" "}
      // Now, This component dynamically change location.
    </>
  );
};

export default ReactEditore;
