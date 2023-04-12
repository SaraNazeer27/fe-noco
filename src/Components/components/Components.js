import { dragStart, drag, dragEnd } from "../../scripts/drag-and-drop";
export default function Components() {
    function btnClick(e) {
        e.stopPropagation()
    }
    return (
        <div>
            <button className="btn" style={{ backgroundColor: '#1d1dc1', color: 'white', width: "100px", height: '30px' }} id="button-1" onClick={btnClick} draggable="true" onDragStart={(e) => dragStart(e)} onDrag={drag} onDragEnd={dragEnd}>button</button>
            {/* <a id="anchor-1" href="" onClick={(e) => e.stopPropagation()} draggable="true" onDragStart={(e) => dragStart(e)} onDrag={drag} onDragEnd={dragEnd}>anchor</a> */}
            {/* <input id="text-1" type="text" onClick={(e) => e.stopPropagation()} draggable="true" onDragStart={(e) => dragStart(e)} onDrag={drag} onDragEnd={dragEnd} /> */}
            <div className="component-wrapper" style={{ backgroundColor: '#f9f9f9', border: '1px solid #00000008', borderRadius: '5px', marginTop: '1rem', padding: '.5rem' }} >
                <p id="text-1" onClick={(e) => e.stopPropagation()} draggable="true" onDragStart={(e) => dragStart(e)} onDrag={drag} onDragEnd={dragEnd}>
                    welcome to the page builder welcome to the page builder</p>
            </div>

        </div>
    );
}