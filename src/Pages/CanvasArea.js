import { dragEnter, dragover, dragLeave, drop, disableActiveElement } from "../scripts/drag-and-drop";
import Resize from "../scripts/resize";
import Editor from "../Components/properties/Editor";
export default function CanvasArea() {
  const styles = {
    designArea: {
      width: '1000px',
      height: '1000px',
      margin: '1rem',
      border: '5px dashed blue',
      textAlign: 'center',
      position: 'relative'
    },
  }


  return (
      <div>
       <div id="DropArea" style={styles.designArea}
        onDragEnter={(e) => dragEnter(e)}
        onDragLeave={(e) => dragLeave(e)}
        onDragOver={(e) => dragover(e)}
        onDrop={(e) => drop(e)}
        onMouseDown={disableActiveElement}
      > 
     
        <Editor />
      </div>
    </div>
  );
}