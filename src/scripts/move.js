export function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    elmnt.onmousedown = dragMouseDown;
    elmnt.onclick = showResizers;
    elmnt.ondblclick = () => { document.getElementById('Editor').style.display = 'block' };
  
    function dragMouseDown(e, elmnt) {
      e.stopPropagation();
      e = e || window.event;
      e.preventDefault();
  
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      document.onmousemove = elementDrag;
    }
  
    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      console.log('move', elmnt.offsetTop);
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  
    }
  
    function closeDragElement() {
      document.onmouseup = null;
      document.onmousemove = null;
    }
    function htmlCode(id) {
      let elmnt = document.getElementById(id);
      let htmlCode = document.getElementById('htmlCode');
      htmlCode.innerHTML = elmnt.innerText;
      // for (const x of elmnt.attributes) {
      //   if (!(x.name == 'style')) {
      //     htmlCode.innerHTML += x.name + ' = ' + x.nodeValue + '\n';
      //   }
      // }
    }
  
    function cssCode(id) {
      let elmnt = document.getElementById(id);
      let cssCode = document.getElementById('cssCode');
      console.log(elmnt.firstChild.data);
      cssCode.innerHTML = '';
      let sp = elmnt.attributes['style'].nodeValue.split(';')
      console.log(elmnt);
      console.log(elmnt.classList);
      let elem = document.querySelector('.not-header');
      let element = 'element {\n';
      for (let i = 0; i < sp.length - 1; i++) {
        element += '  ' + sp[i] + '\n';
        // console.log(elmnt.style[x]);
        // cssCode.innerHTML += x + ':' + elmnt.style[x];
      }
      cssCode.innerHTML = element + '}';
  
    }
  
    function showResizers(e) {
      if (localStorage.getItem('editor')) {
        localStorage.setItem("id", e.target.id);
        let elmnt = document.getElementById(e.target.id);
        elmnt.style.borderWidth = '1px';
        htmlCode(e.target.id);
        cssCode(e.target.id);
      } else {
        if (e.target.id) {
          localStorage.setItem("elmntId", e.target.id);
          let elmnt = document.getElementById(e.target.id);
          elmnt.style.borderWidth = '1px';
          let resizers = elmnt.getElementsByClassName('resizer');
          for (let i = 0; i < resizers.length; i++) {
            resizers[i].style.display = 'block';
          }
        }
      }
  
  
    }
  }