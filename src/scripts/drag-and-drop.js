import { dragElement } from "./move";
import Resize from "./resize";
import Measure from "./measure";

// Drag Functions
export function dragStart(e) {
    e.dataTransfer.setData('text', e.target.id);
}

export function drag() {
    // console.log('drag');
}

export function dragEnd() {
    // console.log('drag end');
}

// Drop Fuctions
export function dragEnter(e) {
    e.preventDefault()
    e.target.style.borderWidth = '3px';
}

export function dragover(e) {
    e.preventDefault()
    e.target.style.borderWidth = '3px';
}

export function dragLeave(e) {
    e.target.style.borderWidth = '0px'
    console.log('leave');
}

// export let elmnt;

let currentElmnt = "";
export function drop(e) {
    e.preventDefault()
    e.target.style.borderWidth = '0px'
    const id = e.dataTransfer.getData('text');
    const header = document.getElementById(id)
    const elmnt = header.cloneNode(true);
    elmnt.draggable = false;
    try {
        elmnt.firstChild.classList.remove("scale");
    }
    catch (err) {
        // document.getElementById("demo").innerHTML = err.message;
    }

    elmnt.classList.remove("component-wrapper");
    elmnt.classList.add("header");
    elmnt.removeAttribute("id");
    elmnt.setAttribute('id', id + '1');
    new Measure(elmnt);
    new Resize(elmnt);
    const DropArea = document.getElementById('DropArea')
    DropArea.appendChild(elmnt);
    dragElement(elmnt);
    currentElmnt = id + '1';
    localStorage.setItem('id', currentElmnt);
}

export function disableActiveElement(e) {
    if (currentElmnt) {
        let elmnt = document.getElementById(currentElmnt);
        elmnt.style.borderWidth = '0px'
        let resizers = elmnt.getElementsByClassName('resizer');
        for (let i = 0; i < resizers.length; i++) {
            resizers[i].style.display = 'none';
        }
    }


}